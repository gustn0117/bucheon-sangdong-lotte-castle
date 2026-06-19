import Reveal from "./Reveal";
import Rich from "./Rich";
import { INFO_ROWS, TIMELINE } from "../content";

export default function Info() {
  return (
    <section className="sec info" id="info">
      <div className="wrap">
        <div className="sec-head">
          <div className="top">
            <span className="sec-num">05</span>
            <span className="eyebrow">Information</span>
          </div>
          <Reveal as="h2" className="sec-title">
            분양 안내
          </Reveal>
          <Reveal as="p" className="sec-lead" delay={100}>
            분양가·청약 일정·견본주택 등 세부 정보는 관심고객 등록 후 가장 먼저, 정확하게 안내해 드립니다.
          </Reveal>
        </div>

        <div className="info-grid">
          <Reveal as="dl" className="spec-table">
            {INFO_ROWS.map((row) => (
              <div className="row" key={row.dt}>
                <dt>{row.dt}</dt>
                <dd>
                  <Rich text={row.dd} />
                  {row.badge ? <span className="badge-tbd">{row.badge}</span> : null}
                </dd>
              </div>
            ))}
          </Reveal>

          <Reveal className="timeline" delay={120}>
            {TIMELINE.map((item) => (
              <div className={`tl${item.now ? " now" : ""}`} key={item.title}>
                <div className="t">{item.t}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
