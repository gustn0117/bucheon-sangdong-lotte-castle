import type { IconName } from "../content";

// Line-style icons for the location/infra cards.
export default function InfraIcon({ name }: { name: IconName }) {
  switch (name) {
    case "transit":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="3" width="14" height="14" rx="2" />
          <path d="M5 11h14M8 21l2-4M16 21l-2-4M9 7h6" />
          <circle cx="8.5" cy="14" r=".6" />
          <circle cx="15.5" cy="14" r=".6" />
        </svg>
      );
    case "shopping":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 6h18l-1.5 12.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 6z" />
          <path d="M8 6V4.5A2.5 2.5 0 0 1 10.5 2h3A2.5 2.5 0 0 1 16 4.5V6" />
        </svg>
      );
    case "park":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 22V12M12 12c0-3 2-5 5-5 0 3-2 5-5 5zM12 14c0-3-2-5-5-5 0 3 2 5 5 5z" />
          <path d="M12 9c0-2.5 1.2-4.5 3-6-1.8-.5-3 .5-3 .5s-1.2-1-3-.5c1.8 1.5 3 3.5 3 6z" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M7 9.5V14c0 1.5 2.2 3 5 3s5-1.5 5-3V9.5M21 7v5" />
        </svg>
      );
    case "trend":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 17l5-5 4 4 8-8" />
          <path d="M16 8h4v4" />
        </svg>
      );
    case "premium":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 2l3 6.5 7 .9-5 4.9 1.3 7L12 18l-6.3 3.3L7 14.3 2 9.4l7-.9L12 2z" />
        </svg>
      );
    default:
      return null;
  }
}
