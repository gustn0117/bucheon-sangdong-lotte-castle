import type { ReactNode, ElementType } from "react";

// Passthrough wrapper (scroll-reveal animation removed for a calmer, static layout).
// `delay` is accepted for API compatibility but intentionally unused.
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children?: ReactNode;
}) {
  return <Tag className={className || undefined}>{children}</Tag>;
}
