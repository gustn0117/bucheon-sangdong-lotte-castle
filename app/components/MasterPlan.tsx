import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { SPECS, LANDSCAPE } from "../content";

export default function MasterPlan() {
  return (
    <section className="sec masterplan" id="masterplan">
      <div className="wrap">
        <div className="sec-head">
          <div className="top">
            <span className="sec-num">02</span>
            <span className="eyebrow">Master Plan</span>
          </div>
          <Reveal as="h2" className="sec-title">
            하나의 도시를 닮은,
            <br />
            <b>약 1,853세대</b> 대단지 설계
          </Reveal>
          <Reveal as="p" className="sec-lead" delay={100}>
            초고층 타워가 빚어내는 부천의 새로운 스카이라인. 입주민의 동선과 프라이버시, 채광과 조경까지
            고려한 단지 배치로 매일이 쾌적한 일상이 됩니다.
          </Reveal>
        </div>

        <div className="mp-grid">
          <Reveal as="figure" className="mp-fig">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/siteplan-3d.png" alt="상동역 롯데캐슬 단지 조감도" />
            <figcaption>단지 조감도 (CG)</figcaption>
          </Reveal>
          <div className="mp-side">
            <Reveal as="figure" className="mp-fig" delay={120}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/siteplan-top.png" alt="상동역 롯데캐슬 단지 배치도" />
              <figcaption>단지 배치도 (CG)</figcaption>
            </Reveal>
          </div>
        </div>

        <Reveal className="specs">
          {SPECS.map((spec) => (
            <div className="spec" key={spec.label}>
              <div className="v">
                <Counter value={spec.value} unit={spec.unit} />
              </div>
              <div className="l">{spec.label}</div>
            </div>
          ))}
        </Reveal>
        <p className="comm-cap" style={{ marginTop: 18 }}>
          ※ 층수·동수·세대수·주차대수는 자료 출처에 따라 차이가 있으며, 모든 수치는 관할 인허가 및
          입주자모집공고 기준으로 최종 확정됩니다.
        </p>

        {/* landscape */}
        <div className="land">
          <Reveal as="figure" className="land-fig">
            <Image
              src="/assets/landscape.jpg"
              alt="상동역 롯데캐슬 중앙광장 및 수경시설 조경 투시도"
              width={1160}
              height={1325}
              sizes="(max-width: 1024px) 100vw, 45vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Reveal>
          <div className="land-copy">
            <Reveal as="span" className="eyebrow">
              Landscape
            </Reveal>
            <Reveal as="h3" delay={80}>
              자연을 단지 안으로,
              <br />
              <b>도심 속 정원</b>을 누리다
            </Reveal>
            <Reveal as="p" delay={140}>
              콘크리트 도심 한가운데, 사계절 푸르른 조경이 일상의 쉼표가 됩니다. 넓은 잔디 광장과 물의
              정원이 입주민의 산책과 휴식, 아이들의 놀이를 품습니다.
            </Reveal>
            <div className="land-list">
              {LANDSCAPE.map((item, i) => (
                <Reveal className="li" key={item.n} delay={180 + i * 60}>
                  <span className="n">{item.n}</span>
                  <div>
                    <b>{item.title}</b>
                    <span>{item.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
