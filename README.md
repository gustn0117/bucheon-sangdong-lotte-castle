# 상동역 롯데캐슬 — 분양 홍보 랜딩페이지

부천 상동역(7호선) 초역세권 프리미엄 주거 랜드마크 **상동역 롯데캐슬** 분양 홍보용 원페이지 랜딩페이지입니다.

## 기술 스택

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- 글로벌 CSS 디자인 시스템 (미드나잇 네이비 + 샴페인 골드 + 웜 아이보리)
- 폰트: Hahmlet(명조) · Cormorant Garamond · Pretendard
- 인터랙션: 스크롤 리빌 · 카운터 · 히어로 패럴럭스 · 평면 탭 · 관심고객 등록 폼
- 이미지 최적화: `next/image`
- 셀프호스팅 배포: `output: "standalone"` + Docker

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 (standalone)
```

## 구조

```
app/
  layout.tsx        # 루트 레이아웃 · 메타데이터 · 폰트
  page.tsx          # 섹션 조립
  globals.css       # 디자인 토큰 + 전체 스타일
  content.ts        # 검증된 분양 정보(타입 지정 데이터)
  components/        # 섹션 · 재사용 컴포넌트
public/assets/      # 조감도 · 평면도 · 커뮤니티 등 이미지
```

> ⚠️ 단지명·세대수·층수·분양가·일정 등 일부 수치는 가칭/추정이며, 모든 세부 사항은 정식
> 입주자모집공고(청약홈) 기준으로 확정됩니다. 이미지(CG)는 이해를 돕기 위한 것입니다.
