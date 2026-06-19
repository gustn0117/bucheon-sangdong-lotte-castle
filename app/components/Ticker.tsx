import { TICKER } from "../content";

// Static key-points strip (marquee animation removed).
export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {TICKER.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
