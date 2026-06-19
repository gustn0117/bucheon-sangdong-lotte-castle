import Image from "next/image";
import Reveal from "./Reveal";
import { COMMUNITY_FLOORS } from "../content";

export default function Community() {
  return (
    <section className="sec comm" id="community">
      <div className="wrap">
        <div className="sec-head">
          <div className="top">
            <span className="sec-num">04</span>
            <span className="eyebrow">Community</span>
          </div>
          <Reveal as="h2" className="sec-title">
            단지 안에서 완성되는
            <br />
            <b>호텔급 라이프</b>, 캐슬리안센터
          </Reveal>
          <Reveal as="p" className="sec-lead" delay={100}>
            멀리 나가지 않아도 됩니다. 지하 1층 통합 커뮤니티 ‘캐슬리안센터’를 중심으로 운동·여가·돌봄까지,
            입주민만을 위한 프라이빗한 일상이 펼쳐집니다.
          </Reveal>
        </div>

        <Reveal as="figure" className="comm-hero">
          <Image
            src="/assets/community-interior.jpg"
            alt="캐슬리안센터 실내골프클럽·피트니스클럽·북카페·1인 독서실 투시도"
            width={1080}
            height={697}
            sizes="(max-width: 1280px) 100vw, 1200px"
            style={{ width: "100%", height: "auto" }}
          />
        </Reveal>

        <div className="comm-flrs">
          {COMMUNITY_FLOORS.map((floor, i) => (
            <Reveal className="flr" key={floor.title} delay={i * 100}>
              <div className="fl">{floor.fl}</div>
              <h4>{floor.title}</h4>
              <p>{floor.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="figure" className="comm-map">
          <Image
            src="/assets/community-map.jpg"
            alt="캐슬리안센터 커뮤니티 시설 배치도"
            width={1080}
            height={685}
            sizes="(max-width: 1280px) 100vw, 1200px"
            style={{ width: "100%", height: "auto" }}
          />
        </Reveal>
        <p className="comm-cap">▲ 커뮤니티 시설 배치도 — 시설 구성 및 명칭은 변경될 수 있습니다 (CG)</p>
      </div>
    </section>
  );
}
