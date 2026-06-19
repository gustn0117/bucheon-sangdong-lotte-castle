import Image from "next/image";
import Counter from "./Counter";
import { HERO_STATS } from "../content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner wrap">
        <span className="eyebrow hero-eyebrow">Bucheon Sangdong · Lotte Castle</span>
        <h1>
          <span className="l1">7호선 상동역 초역세권, 도심 속 여유를 누리는</span>
          <span className="l2">
            상동역 <em>롯데캐슬</em>
          </span>
        </h1>
        <p className="hero-sub">
          부천 상동의 중심, 구 홈플러스 상동점 부지에 들어서는 <b>지상 최고 49층</b> 초고층 랜드마크.
          롯데건설이 짓는 약 <b>1,853세대</b> 대단지가 도시의 새로운 기준을 세웁니다.
        </p>

        <div className="hero-figure">
          <Image
            src="/assets/hero-towers.jpg"
            alt="상동역 롯데캐슬 초고층 트윈 타워 조감도"
            width={1540}
            height={876}
            priority
            sizes="(max-width: 1240px) 100vw, 1240px"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="hero-stats">
          {HERO_STATS.map((stat, i) => (
            <div className="st" key={i}>
              <b>{typeof stat.value === "number" ? <Counter value={stat.value} /> : stat.text}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
