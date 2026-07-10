"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "sangdong-popup-hide-until";

/** 다음 자정까지의 타임스탬프 — "오늘 하루" 의 기준. */
function endOfToday() {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let hideUntil = 0;
    try {
      hideUntil = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    } catch {
      // 시크릿 모드 등 localStorage 차단 시엔 그냥 노출한다.
    }
    if (Date.now() >= hideUntil) setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const hideToday = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(endOfToday()));
    } catch {
      // 저장 실패해도 닫기는 되어야 한다.
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="popup-overlay" onClick={close}>
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-label="상동역 롯데캐슬 7월 오픈예정 안내"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="popup-x" onClick={close} aria-label="팝업 닫기">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <a href="#register" onClick={close} className="popup-img">
          <Image
            src="/assets/popup.jpg"
            alt="상동역 롯데캐슬 — 49층 1,859세대, 7월 오픈예정"
            width={450}
            height={580}
            priority
          />
        </a>

        <div className="popup-bar">
          <button type="button" onClick={hideToday}>
            오늘 하루 안보기
          </button>
          <button type="button" onClick={close}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
