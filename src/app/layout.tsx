import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "HoonDev",
  description: "Hoon의 소개 페이지입니다.",
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
      <body>
        <Header />
        <main className="container px-10 py-24">{children}</main>
      </body>
    </html>
  );
}
