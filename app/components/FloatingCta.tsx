"use client";

import { useEffect, useState } from "react";

const PlusIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`float-cta${show ? " show" : ""}`}>
        <a className="reg" href="#register">
          <PlusIcon />
          관심고객 등록
        </a>
      </div>

      <div className={`mobile-bar${show ? " show" : ""}`}>
        <a className="reg" href="#register">
          <PlusIcon />
          관심고객 등록
        </a>
      </div>
    </>
  );
}
