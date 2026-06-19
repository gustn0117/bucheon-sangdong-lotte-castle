import Reveal from "./Reveal";
import Rich from "./Rich";
import InfraIcon from "./InfraIcon";
import { METRO, INFRA } from "../content";

export default function Location() {
  return (
    <section className="sec" id="location">
      <div className="wrap">
        <div className="sec-head">
          <div className="top">
            <span className="sec-num">01</span>
            <span className="eyebrow">Location</span>
          </div>
          <Reveal as="h2" className="sec-title">
            모든 중심에 <b>가장 가깝게</b>,
            <br />
            상동역 초역세권 입지
          </Reveal>
          <Reveal as="p" className="sec-lead" delay={100}>
            7호선 상동역을 두 발 앞에 둔 초역세권. 백화점·터미널·공원·학원가가 모두 도보 생활권에 놓인
            부천 최중심에서, 출퇴근부터 쇼핑·교육·여가까지 막힘없이 누립니다.
          </Reveal>
        </div>

        {/* metro line */}
        <Reveal className="metro">
          <div className="metro-h">
            <span className="ln7">7</span>
            <b>7호선 상동역, 환승 없이 강남 직결</b>
            <span>· 상동역 1번 출구 도보 약 5분 거리</span>
          </div>
          <div className="line">
            {METRO.stops.map((stop) => (
              <div className={`stop${stop.hi ? " hi" : ""}`} key={stop.name}>
                <i />
                <b>{stop.name}</b>
                <span>{stop.sub}</span>
              </div>
            ))}
          </div>
          <p className="metro-note">
            ※ 7호선은 상동~강남 구간을 환승 없이 직결합니다. 실제 소요시간은 운행 상황에 따라 달라질 수
            있으며, 노선·역명은 이해를 돕기 위한 표기입니다.
          </p>
        </Reveal>

        {/* infra cards */}
        <div className="infra">
          {INFRA.map((card, i) => (
            <Reveal className="icard" key={card.title} delay={(i % 3) * 90}>
              <div className="ico">
                <InfraIcon name={card.icon} />
              </div>
              <span className="k">{card.kicker}</span>
              <h4>{card.title}</h4>
              <ul>
                {card.items.map((item, j) => (
                  <li key={j}>
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
