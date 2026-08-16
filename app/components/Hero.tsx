import HeroCarousel from "./HeroCarousel";
import { HERO_SLIDES } from "../content";

export default function Hero() {
  return (
    <HeroCarousel slides={HERO_SLIDES} intervalMs={4000}>
      <div className="hero-content wrap">
        <span className="hero-badge">
          <i className="dot" aria-hidden="true" />
          8월 중 오픈 예정
        </span>
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
        </div>
      </div>
    </HeroCarousel>
  );
}
