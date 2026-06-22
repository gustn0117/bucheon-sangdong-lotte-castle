import Reveal from "./Reveal";
import RegisterForm from "./RegisterForm";
import { PROJECT } from "../content";

export default function Register() {
  return (
    <section className="sec cta" id="register">
      <div className="wrap cta-inner">
        <div className="cta-copy">
          <Reveal as="span" className="eyebrow">
            Priority Registration
          </Reveal>
          <Reveal as="h2" delay={80}>
            가장 먼저 받아보는
            <br />
            <b>특별한 혜택</b>의 시작
          </Reveal>
          <Reveal as="p" delay={140}>
            관심고객으로 등록하시면 분양가·청약 일정·견본주택 오픈 등 핵심 정보를 누구보다 먼저, 가장
            정확하게 안내해 드립니다. 사전 등록은 무료이며 어떤 의무도 발생하지 않습니다.
          </Reveal>
          <Reveal as="ul" className="cta-points" delay={200}>
            <li>분양가 · 분양 일정 우선 안내</li>
            <li>견본주택(모델하우스) 오픈 소식</li>
            <li>청약 자격 · 절차 안내</li>
          </Reveal>
          <Reveal as="div" className="cta-call" delay={260}>
            <div className="cc-info">
              <span className="cc-label">전화 상담 · 분양 문의</span>
              <a className="cc-num" href={`tel:${PROJECT.tel}`}>{PROJECT.tel}</a>
            </div>
            <a className="cc-btn" href={`tel:${PROJECT.tel}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
              전화하기
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <RegisterForm />
        </Reveal>
      </div>
    </section>
  );
}
