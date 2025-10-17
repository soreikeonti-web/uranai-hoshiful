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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <body className={`${inter.className} h-full mystical-background`}>
        <main className="max-w-5xl mx-auto px-4 py-8 text-center relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
