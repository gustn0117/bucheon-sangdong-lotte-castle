const EVENT_URL = "https://naver.me/F1rD83SZ";

export default function EventBanner() {
  return (
    <section className="event-banner" aria-label="관심고객 등록 이벤트">
      <div className="event-inner">
        <div className="event-text">
          <span className="event-tag">EVENT</span>
          <h2>
            상동역 롯데캐슬 <b>관심고객 등록 이벤트</b>
          </h2>
          <p>지금 사전 관심고객으로 등록하고, 분양 정보와 특별 혜택을 가장 먼저 받아보세요.</p>
        </div>
        <a className="event-btn" href={EVENT_URL} target="_blank" rel="noopener noreferrer">
          이벤트 참여하기 <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
