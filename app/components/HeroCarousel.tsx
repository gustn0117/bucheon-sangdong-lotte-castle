"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import type { HeroSlide } from "../content";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SWIPE_THRESHOLD_PX = 48;

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeToPageVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

function getPageVisibilitySnapshot() {
  return document.visibilityState === "visible";
}

function getPageVisibilityServerSnapshot() {
  return true;
}

type HeroCarouselProps = {
  children: ReactNode;
  slides: readonly HeroSlide[];
  intervalMs?: number;
};

type PointerStart = {
  id: number;
  x: number;
  y: number;
};

export default function HeroCarousel({
  children,
  slides,
  intervalMs = 4000,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const pointerStart = useRef<PointerStart | null>(null);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const isPageVisible = useSyncExternalStore(
    subscribeToPageVisibility,
    getPageVisibilitySnapshot,
    getPageVisibilityServerSnapshot,
  );

  const slideCount = slides.length;

  useEffect(() => {
    if (
      slideCount < 2 ||
      prefersReducedMotion ||
      !isPageVisible ||
      isTouching
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, intervalMs);

    return () => window.clearTimeout(timer);
  }, [
    activeIndex,
    intervalMs,
    isPageVisible,
    isTouching,
    prefersReducedMotion,
    slideCount,
  ]);

  function selectSlide(index: number) {
    setActiveIndex(index);
  }

  function moveSlide(direction: -1 | 1) {
    setActiveIndex(
      (current) => (current + direction + slideCount) % slideCount,
    );
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLElement>) {
    if (event.pointerType !== "touch") return;

    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
    setIsTouching(true);
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLElement>) {
    const start = pointerStart.current;
    pointerStart.current = null;
    setIsTouching(false);

    if (!start || start.id !== event.pointerId || slideCount < 2) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) >= SWIPE_THRESHOLD_PX &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.2;

    if (!isHorizontalSwipe) return;
    moveSlide(deltaX < 0 ? 1 : -1);
  }

  function handlePointerCancel() {
    pointerStart.current = null;
    setIsTouching(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (slideCount < 2) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveSlide(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveSlide(1);
    }
  }

  return (
    <section
      className="hero"
      id="top"
      role="region"
      aria-roledescription="carousel"
      aria-label="상동역 롯데캐슬 대표 이미지"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      <div className="hero-card">
        <div className="hero-bg" aria-live="off">
          {slides.map((slide, index) => {
            const style = {
              "--hero-position": slide.position ?? "50% 50%",
              "--hero-mobile-position":
                slide.mobilePosition ?? slide.position ?? "50% 50%",
              "--hero-scale": String(slide.scale ?? 1),
              "--hero-mobile-scale": String(
                slide.mobileScale ?? slide.scale ?? 1,
              ),
              "--hero-origin": slide.origin ?? "50% 50%",
              "--hero-mobile-origin":
                slide.mobileOrigin ?? slide.origin ?? "50% 50%",
            } as CSSProperties;

            return (
              <div
                className={`hero-slide${index === activeIndex ? " is-active" : ""}`}
                key={slide.src}
                style={style}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1304px) calc(100vw - 64px), 1240px"
                  preload={index === 0}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {children}

        {slideCount > 1 ? (
          <>
            <button
              className="hero-arrow hero-arrow-prev"
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="이전 대표 이미지"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </button>

            <button
              className="hero-arrow hero-arrow-next"
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="다음 대표 이미지"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </button>

            <div className="hero-carousel-controls">
              <div className="hero-dots" role="group" aria-label="대표 이미지 선택">
                {slides.map((slide, index) => (
                  <button
                    className="hero-dot"
                    type="button"
                    key={slide.src}
                    onClick={() => selectSlide(index)}
                    aria-label={`${index + 1}번째 대표 이미지 보기: ${slide.alt}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
