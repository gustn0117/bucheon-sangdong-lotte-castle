// ============================================================
// 상동역 롯데캐슬 — verified content / facts
// Bold emphasis is written with **double asterisks** and rendered
// by <Rich/>. Unconfirmed figures are framed as "추후 공개".
// ============================================================

export const PROJECT = {
  name: "상동역 롯데캐슬",
  enName: "Sangdong Station · Lotte Castle",
  tel: "1588-8378", // 대표번호
  address: "경기도 부천시 원미구 상동 540-1번지 일원 (구 홈플러스 상동점 부지)",
  builder: "롯데건설(주)",
};

export const NAV = [
  { href: "#location", label: "입지환경" },
  { href: "#masterplan", label: "단지안내" },
  { href: "#plans", label: "세대평면" },
  { href: "#community", label: "커뮤니티" },
  { href: "#info", label: "분양안내" },
];

export type HeroStat = { value?: number; text?: string; label: string };
export const HERO_STATS: HeroStat[] = [
  { value: 7, label: "상동역 초역세권 직결" },
  { value: 49, label: "지상 최고 49층 초고층" },
  { value: 1859, label: "세대 규모 대단지" },
  { text: "롯데건설", label: "프리미엄 브랜드 시공" },
];

export const TICKER = [
  "7호선 상동역 초역세권",
  "지상 최고 49층 랜드마크",
  "롯데건설 시공",
  "현대백화점 중동 도보권",
  "상동호수공원 인접",
  "캐슬리안센터 커뮤니티",
  "비규제지역 청약",
];

export const METRO = {
  stops: [
    { name: "상동", sub: "본 단지", hi: true },
    { name: "부천종합운동장", sub: "서해선 · GTX-B(예정)" },
    { name: "가산디지털단지", sub: "G밸리" },
    { name: "이수", sub: "4호선 환승" },
    { name: "고속터미널", sub: "3·9호선" },
    { name: "강남구청", sub: "강남권" },
    { name: "청담", sub: "강남 도심" },
  ],
};

export type IconName =
  | "transit"
  | "shopping"
  | "park"
  | "education"
  | "trend"
  | "premium";

export type InfraCard = {
  icon: IconName;
  kicker: string;
  title: string;
  items: string[];
};

export const INFRA: InfraCard[] = [
  {
    icon: "transit",
    kicker: "Transit",
    title: "광역 교통",
    items: [
      "**7호선 상동역** 초역세권 직결",
      "**소풍 종합터미널** 도보 약 3분 (고속·시외)",
      "수도권제1순환 **중동·송내IC** 인접",
      "경인고속도로 진입 용이",
    ],
  },
  {
    icon: "shopping",
    kicker: "Shopping",
    title: "생활 인프라",
    items: [
      "**현대백화점 중동점** · 롯데백화점 중동점",
      "**이마트** · 뉴코아아울렛 · 세이브존",
      "상동 카페거리 · 먹자골목",
      "부천 최중심급 쇼핑 클러스터 도보권",
    ],
  },
  {
    icon: "park",
    kicker: "Park",
    title: "힐링 그린",
    items: [
      "**상동호수공원** 도보권 (약 18.2만㎡)",
      "부천8경 제4경, 일상 산책·휴식",
      "중동중앙공원 등 도심 녹지",
      "마당처럼 누리는 그린 라이프",
    ],
  },
  {
    icon: "education",
    kicker: "Education",
    title: "교육 환경",
    items: [
      "**상동초 · 상일초** 도보 통학권",
      "**상일중** · 상동중 · 부인중 인근",
      "상동역 일대 **메이저 학원가** 밀집",
      "청담·폴리 등 어학원 입점",
    ],
  },
  {
    icon: "trend",
    kicker: "Future Value",
    title: "미래 가치",
    items: [
      "**부천종합운동장역** 서해선 환승",
      "**GTX-B** 등 광역급행철도 예정 호재",
      "구 홈플러스 부지 개발 도심 재생",
      "서울 인접 핵심 생활권",
    ],
  },
  {
    icon: "premium",
    kicker: "Premium",
    title: "청약 프리미엄",
    items: [
      "**비규제지역** (조정·투기과열 미지정)",
      "서울 인접 비규제 청약 메리트",
      "초고층 주상복합 희소성",
      "롯데캐슬 브랜드 가치",
    ],
  },
];

export type Spec = { value: number; unit?: string; label: string };
export const SPECS: Spec[] = [
  { value: 49, unit: "F", label: "지상 최고 층수" },
  { value: 7, unit: "개동", label: "단지 규모" },
  { value: 1859, unit: "세대", label: "아파트+오피스텔" },
  { value: 3455, unit: "대", label: "주차 (법정 초과)" },
];

export const LANDSCAPE = [
  { n: "01", title: "중앙 광장", desc: "가족과 이웃이 함께 누리는 넓은 잔디 커뮤니티 공간" },
  { n: "02", title: "수경 시설", desc: "물의 흐름이 만드는 정적인 휴식과 사계의 정취" },
  { n: "03", title: "자연친화적 동선", desc: "입주민 라이프 스타일을 고려한 쾌적한 단지 구성" },
];

export type PlanType = {
  key: "84" | "128";
  tab: string;
  ptype: string;
  title: string;
  unit: string;
  img: string;
  desc: string;
  feats: { k: string; v: string }[];
  rooms: string[];
};

export const PLANS: PlanType[] = [
  {
    key: "84",
    tab: "84 TYPE",
    ptype: "Unit A · Standard",
    title: "84",
    unit: " TYPE",
    img: "/assets/plan-84.jpg",
    desc: "방 3개와 욕실 2개를 갖춘 4인 가족 최적의 국민평형. 안방 드레스룸과 다용도실, 복도 펜트리까지 더해 수납과 동선을 모두 잡은 판상형 평면입니다.",
    feats: [
      { k: "침실", v: "3 BED" },
      { k: "욕실", v: "2 BATH" },
      { k: "구조", v: "드레스룸+α" },
      { k: "특화", v: "복도 펜트리" },
    ],
    rooms: ["안방", "침실1", "침실2", "거실", "주방/식당", "드레스룸", "다용도실", "복도펜트리", "실외기실", "발코니", "대피공간"],
  },
  {
    key: "128",
    tab: "128 TYPE",
    ptype: "Unit · Large",
    title: "128",
    unit: " TYPE",
    img: "/assets/plan-128.jpg",
    desc: "방 4개에 알파룸까지 더한 대형 평면. 넓은 거실을 중심으로 가족 각자의 공간을 충분히 확보하고, 드레스룸·현관창고·다용도실로 풍부한 수납을 완성했습니다.",
    feats: [
      { k: "침실", v: "4 BED" },
      { k: "욕실", v: "2 BATH" },
      { k: "구조", v: "+ 알파룸" },
      { k: "특화", v: "현관창고" },
    ],
    rooms: ["안방", "침실1", "침실2", "침실3", "알파룸", "거실", "주방/식당", "드레스룸", "다용도실", "현관창고", "발코니", "대피공간"],
  },
];

export const COMMUNITY_FLOORS = [
  {
    fl: "B1F · Castlean Center",
    title: "캐슬리안센터",
    desc: "L-라운지, 피트니스클럽, 실내골프클럽(스크린골프), 퍼팅그린, GX룸, 멀티스포츠룸, 샤워·탈의실, 북카페, 독서실, 1인 독서실(남·여)",
  },
  {
    fl: "1F · Care & Kids",
    title: "시니어클럽 · 어린이집",
    desc: "시니어클럽과 어린이집을 단지 내에 배치해 노년의 여유와 아이의 안전한 보육을 한 단지 안에서 함께 누립니다. 키즈룸·코인세탁실 등 생활편의 시설도 완비.",
  },
  {
    fl: "2F · Care Center",
    title: "다함께 돌봄센터 · 관리사무소",
    desc: "맞벌이 가정을 위한 다함께 돌봄센터와 체계적인 단지 관리를 위한 관리사무소를 갖춰, 입주민의 일상을 세심하게 지원합니다.",
  },
];

export type InfoRow = { dt: string; dd: string; badge?: string };
export const INFO_ROWS: InfoRow[] = [
  { dt: "단지명", dd: "상동역 롯데캐슬", badge: "정식명 추후확정" },
  { dt: "위치", dd: "경기도 부천시 원미구 상동 540-1번지 일원 (구 홈플러스 상동점 부지)" },
  { dt: "시공사", dd: "**롯데건설(주)**" },
  { dt: "규모", dd: "지하 ~ 지상 최고 49층 · 7개동 (초고층 주상복합)" },
  { dt: "세대수", dd: "약 1,859세대 (아파트 + 오피스텔)" },
  { dt: "주택형", dd: "전용 84㎡ · 128㎡ 등 (타입 구성은 모집공고 확정)" },
  { dt: "주차대수", dd: "약 3,455대 (법정대수 초과)" },
  { dt: "규제", dd: "**비규제지역** (조정대상지역·투기과열지구 미지정)" },
  { dt: "분양가", dd: "추후 공개", badge: "관심고객 등록 시 안내" },
  { dt: "입주예정", dd: "추후 공개 (준공 목표 2029~2030년)", badge: "모집공고 확정" },
];

export type TimelineItem = { t: string; title: string; desc: string; now?: boolean };
export const TIMELINE: TimelineItem[] = [
  { t: "Now Open", title: "관심고객 사전 등록", desc: "가장 빠르고 정확한 분양 정보를 위한 사전 등록을 받고 있습니다.", now: true },
  { t: "Coming Soon", title: "견본주택(모델하우스) 그랜드 오픈", desc: "견본주택 위치 및 오픈 일정 준비 중 — 등록 고객께 우선 안내." },
  { t: "Upcoming", title: "입주자모집공고 · 청약", desc: "청약 일정 및 1순위 조건은 청약홈(applyhome.co.kr) 공고 기준." },
  { t: "2029–2030", title: "준공 및 입주 예정", desc: "정식 입주예정일은 입주자모집공고로 최종 확정됩니다." },
];

export const PLAN_OPTIONS = [
  { value: "84", label: "84 TYPE" },
  { value: "128", label: "128 TYPE" },
  { value: "undecided", label: "미정 / 상담희망" },
];

export const DISCLAIMER =
  "본 홈페이지는 분양 홍보를 위해 제작된 광고물로, 실제와 차이가 있을 수 있습니다. 단지명 ‘상동역 롯데캐슬’은 가칭이며, 정식 분양명·세대수·층수·동수·주차대수·평형 및 면적 구성·분양가·청약 일정·견본주택 위치·입주예정일 등 모든 세부 사항은 관할 인허가 및 입주자모집공고(청약홈 applyhome.co.kr 게재)를 기준으로 최종 확정됩니다. 분양가·청약일정·입주일 등 미확정 항목은 ‘추후 공개’ 단계이며, 본 자료의 수치는 출처에 따라 차이가 있을 수 있으니 반드시 정식 입주자모집공고를 확인하시기 바랍니다. 평면도·투시도·조감도 등 모든 이미지(CG)는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다. 청약 시 자격·규제 사항을 반드시 확인하시기 바랍니다.";
