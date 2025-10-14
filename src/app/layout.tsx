import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "自動占いサイト",
  description: "AIが生成する今日の運勢",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      {/* ★★★ bodyにクラスを追加し、背景を全体に適用 ★★★ */}
      <body className={`${inter.className} h-full mystical-background`}>
        {children}
      </body>
    </html>
  );
}