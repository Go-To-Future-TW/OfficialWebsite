import type { Metadata } from "next";
import Link from "next/link";

import { Spotlight } from "@/components/ui/Spotlight";
// import SEO from "@/config/SEO.json";

export const metadata: Metadata = {
  title: "精選案例 | Bityo Development",
  description: "查看我們協助客戶成功轉型的數位案例。",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen w-full bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col items-center justify-center">
      {/* 聚光燈特效 */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <main className="max-w-7xl mx-auto px-6 py-32 relative z-10 text-center">
        {/* 裝飾圖示 (資料夾/整理中) */}
        <div className="mb-10 flex justify-center">
          <div className="w-24 h-24 bg-neutral-900/50 rounded-3xl flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-neutral-400"
            >
              <title>案例整理中</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
          精選案例整理中
        </h1>

        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          我們正在梳理過去協助客戶轉型的成功故事。
          <br />
          高品質的專案細節值得等待，敬請期待。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button
              type="button"
              className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              返回首頁
            </button>
          </Link>
          <Link href="/quote">
            <button
              type="button"
              className="bg-transparent text-white border border-white/20 px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              直接諮詢
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
