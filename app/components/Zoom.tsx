"use client";

import { useEffect, useState, type ReactNode } from "react";

// Wraps an image; click opens a full-screen lightbox showing the original file.
export default function Zoom({
  full,
  caption,
  children,
}: {
  full: string;
  caption?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="zoom-trigger"
        aria-label={caption ? `${caption} 확대 보기` : "이미지 확대 보기"}
        onClick={() => setOpen(true)}
      >
        {children}
        <span className="zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="lightbox" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          <button className="lb-close" aria-label="닫기" onClick={() => setOpen(false)}>
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={full} alt={caption || ""} onClick={(e) => e.stopPropagation()} />
          {caption && <div className="lb-cap">{caption}</div>}
        </div>
      )}
    </>
  );
}
