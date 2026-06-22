"use client";

import { useEffect, useState } from "react";
import { PROJECT } from "../content";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
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

  const tel = `tel:${PROJECT.tel}`;

  return (
    <>
      <div className={`float-cta${show ? " show" : ""}`}>
        <a className="reg" href="#register">
          <PlusIcon />
          관심고객 등록
        </a>
        <a className="tel" href={tel}>
          <PhoneIcon />
          전화 상담
        </a>
      </div>

      <div className={`mobile-bar${show ? " show" : ""}`}>
        <a className="tel" href={tel}>
          <PhoneIcon />
          전화상담
        </a>
        <a className="reg" href="#register">
          <PlusIcon />
          관심고객 등록
        </a>
      </div>
    </>
  );
}
