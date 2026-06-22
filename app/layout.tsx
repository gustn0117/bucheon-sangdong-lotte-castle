import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "상동역 롯데캐슬 | 부천 상동 7호선 초역세권 프리미엄 랜드마크",
  description:
    "7호선 상동역 초역세권, 롯데건설이 짓는 지상 최고 49층 초고층 랜드마크. 부천 상동 540-1 일원, 약 1,859세대 대단지. 관심고객 사전등록 안내.",
  openGraph: {
    title: "상동역 롯데캐슬 — 부천 상동의 새로운 기준",
    description: "7호선 상동역 초역세권 · 지상 최고 49층 · 약 1,859세대 · 롯데건설 시공",
    type: "website",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
