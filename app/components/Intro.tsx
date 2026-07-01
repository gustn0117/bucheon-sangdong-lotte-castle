import Image from "next/image";
import Reveal from "./Reveal";
import Zoom from "./Zoom";

// 공식 브랜드 콘텐츠 (lottecastle.co.kr · 브랜드 아이덴티티)
const PILLARS = [
  {
    en: "Brand Concept",
    ko: "Live Classic",
    desc: "고유한 정체성, 흔들리지 않는 신념과 철학, 오랜 시간을 거쳐 높이 평가받는 가치, 그리고 독보적인 존재감. 그것을 우리는 ‘클래식’이라 부릅니다. 지금도 살아 숨쉬는 나만의 클래식.",
  },
  {
    en: "Brand Philosophy",
    ko: "Build Home, Beyond House",
    desc: "아파트라는 건축물을 넘어, 입주민에게 마음의 안식처를 제공합니다. 집을 짓는 것을 넘어 삶의 가치를 짓는 롯데캐슬의 약속입니다.",
  },
];

export default function Intro() {
  return (
    <section className="intro sec">
      <div className="wrap intro-grid">
        <div className="intro-copy">
          <Reveal as="span" className="eyebrow">
            Live Classic
          </Reveal>
          <Reveal as="h2" delay={80}>
            지금도 살아 숨쉬는
            <br />
            <b>나만의 클래식</b>,
            <br />
            상동에서 깨어납니다.
          </Reveal>
          <Reveal as="p" delay={160}>
            고유한 정체성과 흔들리지 않는 철학, 오랜 시간 높이 평가받는 가치와 독보적인 존재감. 롯데캐슬은
            그 가치를 ‘클래식’이라 부르며, 당신의 클래식을 이곳에서 깨웁니다.
          </Reveal>
          <Reveal as="p" delay={220}>
            ‘Build Home, Beyond House’ — 아파트라는 건축물을 넘어 마음의 안식처를 제공해온 롯데캐슬이, 부천
            상동의 중심에서 입주민의 라이프 스타일을 고려한 자연친화적 단지로 들어섭니다.
          </Reveal>
          <Reveal as="div" className="brand-badge" delay={280}>
            대한민국 프리미엄 주거 브랜드, LOTTE CASTLE
          </Reveal>
        </div>
        <Reveal as="figure" className="intro-fig fig-frame" delay={120}>
          <Zoom full="/assets/entrance-gate.jpg" caption="단지 문주 (CG)">
            <Image
              src="/assets/entrance-gate.jpg"
              alt="상동역 롯데캐슬 시그니처 단지 출입구 문주 투시도"
              width={1160}
              height={826}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Zoom>
          <figcaption>단지 문주 (CG)</figcaption>
        </Reveal>
      </div>

      <div className="wrap brand-pillars">
        {PILLARS.map((pl) => (
          <Reveal className="pillar" key={pl.en}>
            <span className="pillar-en">{pl.en}</span>
            <h3>{pl.ko}</h3>
            <p>{pl.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
