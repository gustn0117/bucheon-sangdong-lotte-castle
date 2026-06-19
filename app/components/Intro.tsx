import Image from "next/image";
import Reveal from "./Reveal";
import Emblem from "./Emblem";

export default function Intro() {
  return (
    <section className="intro sec">
      <div className="wrap intro-grid">
        <div className="intro-copy">
          <Reveal as="span" className="eyebrow">
            Live Classic
          </Reveal>
          <Reveal as="h2" delay={80}>
            시간이 지나도 변치 않는
            <br />
            <b>클래식의 품격</b>으로,
            <br />
            상동의 격을 새로 씁니다.
          </Reveal>
          <Reveal as="p" delay={160}>
            1999년, 대한민국 최초의 아파트 브랜드로 출발한 롯데캐슬은 ‘Build Home, Beyond House’라는
            철학 아래 단순한 집을 넘어선 삶의 가치를 지어왔습니다. 날개를 활짝 편 독수리 엠블럼은
            입주민을 향한 자부심과 보호를 상징합니다.
          </Reveal>
          <Reveal as="p" delay={220}>
            부천 상동, 모든 인프라가 모이는 도심의 중심에 입주민의 라이프 스타일을 고려한 자연친화적
            단지가 들어섭니다. 쾌적함과 품격을 동시에 누리는 일상이 이곳에서 시작됩니다.
          </Reveal>
          <Reveal as="div" className="brand-badge" delay={280}>
            <Emblem />
            대한민국 프리미엄 주거 브랜드, LOTTE CASTLE
          </Reveal>
        </div>
        <Reveal as="figure" className="intro-fig fig-frame" delay={120}>
          <Image
            src="/assets/entrance-gate.jpg"
            alt="상동역 롯데캐슬 단지 출입구 문주 투시도"
            width={1160}
            height={826}
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>단지 문주 (CG)</figcaption>
        </Reveal>
      </div>
    </section>
  );
}
