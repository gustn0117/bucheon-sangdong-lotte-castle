"use client";

import { useEffect } from "react";

/**
 * 모바일(≤1024px)에서는 .cta-inner 가 1단으로 쌓여 설명 영역이 먼저 오고
 * 입력 폼이 화면 밖으로 밀린다. 그래서 '관심고객 등록' 링크를 눌러도
 * 기재란이 보이지 않아 한 번 더 스크롤해야 한다.
 *
 * 이 컴포넌트는 그때만 기본 앵커 이동을 가로채 입력 폼으로 직접 스크롤한다.
 * PC(2단 레이아웃)는 폼이 이미 보이므로 기본 동작 그대로 둔다.
 */
const STACKED = "(max-width:1024px)";

export default function RegisterAnchor() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // 새 탭 열기 등 브라우저 기본 동작은 건드리지 않는다.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target?.closest) return;
      if (!target.closest('a[href="#register"]')) return;
      if (!window.matchMedia(STACKED).matches) return;

      const card = document.querySelector<HTMLElement>(".form-card");
      if (!card) return;

      const head = document.querySelector<HTMLElement>(".site-head");
      const offset = (head?.offsetHeight ?? 64) + 12;

      e.preventDefault();
      window.scrollTo({
        top: card.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
      history.replaceState(null, "", "#register");
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
