import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Animate from "@/components/PageAnimate";

export const metadata: Metadata = {
  title: "HoonLog",
  description: "hoon의 개인 블로그입니다.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="container mx-auto">
        <Header />
        <Animate>
          <main className="px-10 py-32">{children}</main>
        </Animate>
      </body>
    </html>
  );
}
