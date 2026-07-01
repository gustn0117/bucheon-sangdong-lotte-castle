import Image from "next/image";
import Counter from "./Counter";
import { HERO_STATS } from "../content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <Image
          src="/assets/hero-towers.jpg"
          alt="상동역 롯데캐슬 시그니처 초고층 트윈 타워 조감도"
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className="hero-content wrap">
        <span className="eyebrow hero-eyebrow">Bucheon Sangdong · Lotte Castle</span>
        <h1>
          <span className="l1">7호선 상동역 초역세권, 도심 속 여유를 누리는</span>
          <span className="l2">
            상동역 <em>롯데캐슬 시그니처</em>
          </span>
        </h1>
        <p className="hero-sub">
          부천 상동의 중심에 들어서는 <b>지상 최고 49층</b> 초고층 랜드마크.
          롯데건설이 짓는 약 <b>1,859세대</b> 대단지가 도시의 새로운 기준을 세웁니다.
        </p>

        <div className="hero-cta-row">
          <a className="hero-btn primary" href="#register">
            관심고객 등록 →
          </a>
          <a className="hero-btn ghost" href="#location">
            단지 둘러보기
          </a>
        </div>

        <div className="hero-stats">
          {HERO_STATS.map((stat, i) => (
            <div className="st" key={i}>
              <b className={typeof stat.value === "number" ? undefined : "st-text"}>
                {typeof stat.value === "number" ? <Counter value={stat.value} /> : stat.text}
              </b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a className="hero-scroll" href="#location" aria-label="아래로 스크롤">
        <span>SCROLL</span>
        <svg viewBox="0 0 24 24">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
