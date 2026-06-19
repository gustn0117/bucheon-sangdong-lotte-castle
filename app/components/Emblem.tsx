// Abstract gold emblem (crest) — evokes the Lotte Castle mark without copying it.
export default function Emblem({ className = "emblem" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 2l4.6 9.4L35 13l-7.5 7.3L29.2 31 20 25.8 10.8 31l1.7-10.7L5 13l10.4-1.6L20 2z" />
    </svg>
  );
}
