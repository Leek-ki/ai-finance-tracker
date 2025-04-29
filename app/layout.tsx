import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ClientLayout from './components/ClientLayout'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: "AI Finance Tracker",
  description: "AI 기반 개인 재무 관리 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
