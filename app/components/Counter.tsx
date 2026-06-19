"use client";

import { useEffect, useRef, useState } from "react";

// Counts up from 0 to `value` once the element scrolls into view.
export default function Counter({ value, unit }: { value: number; unit?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            let startTs = 0;
            const step = (ts: number) => {
              if (!startTs) startTs = ts;
              const p = Math.min((ts - startTs) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(value * eased);
              if (p < 1) requestAnimationFrame(step);
              else setN(value);
            };
            requestAnimationFrame(step);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {Math.round(n).toLocaleString("en-US")}
      {unit ? <small>{unit}</small> : null}
    </span>
  );
}
