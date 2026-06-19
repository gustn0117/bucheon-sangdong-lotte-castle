"use client";

import { useEffect, useRef } from "react";

// Parallax background for the hero. Plain <img> so the CSS ken-burns
// animation and the JS parallax transform compose cleanly.
export default function HeroBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const el = ref.current;
      if (el && y < window.innerHeight) {
        el.style.transform = `translateY(${y * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero-bg" ref={ref}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/hero-towers.jpg" alt="상동역 롯데캐슬 초고층 트윈 타워 조감도" />
    </div>
  );
}
