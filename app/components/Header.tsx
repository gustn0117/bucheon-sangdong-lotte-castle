"use client";

import { useEffect, useState } from "react";
import { NAV } from "../content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-head${scrolled ? " scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="상동역 롯데캐슬 시그니처 홈">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/assets/lotte-castle-logo.png" alt="LOTTE CASTLE" />
          <span className="brand-loc">상동역 시그니처</span>
        </a>
        <nav className="nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="head-cta" href="#register">
          관심고객 등록 →
        </a>
        <button
          className="burger"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ opacity: open ? 0 : 1 }}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`m-menu${open ? " open" : ""}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#register" onClick={() => setOpen(false)} style={{ color: "var(--gold-deep)" }}>
          관심고객 등록
        </a>
      </div>
    </>
  );
}
