import Emblem from "./Emblem";
import { PROJECT, DISCLAIMER } from "../content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <Emblem />
              <span className="brand-txt">
                <b>LOTTE CASTLE</b>
                <span>Sangdong Station</span>
              </span>
            </a>
            <p>
              부천 상동의 새로운 기준, 상동역 롯데캐슬. 7호선 초역세권에 들어서는 초고층 프리미엄
              랜드마크입니다.
            </p>
          </div>
          <div className="foot-meta">
            <div>
              분양 문의 · <b>{PROJECT.tel}</b>
            </div>
            <div>경기도 부천시 원미구 상동 540-1 일원</div>
            <div>시공 · {PROJECT.builder}</div>
          </div>
        </div>
        <p className="disclaimer">※ {DISCLAIMER}</p>
        <p className="copy">
          © 2026 Sangdong Station Lotte Castle. 본 페이지는 홍보용으로 제작된 비공식 랜딩페이지입니다.
        </p>
      </div>
    </footer>
  );
}
