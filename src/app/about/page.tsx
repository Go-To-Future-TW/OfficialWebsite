import type { Metadata } from "next";
import Link from "next/link";

import { Spotlight } from "@/components/ui/Spotlight";
import SEO from "@/config/SEO.json";

export const metadata: Metadata = {
  title: SEO.About.title,
  description: SEO.About.description,
  openGraph: {
    title: SEO.About.title,
    description: SEO.About.description,
    images: [SEO.About.image],
    type: "website",
  },
  twitter: {
    title: SEO.About.title,
    description: SEO.About.description,
    images: [SEO.About.image],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <main className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        {/* 標題區 */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 tracking-tight leading-tight">
            不僅是開發
            <br className="md:hidden" />
            <br className="hidden md:block" />
            更是為您解決商業問題
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            您的網站是否載入緩慢、系統時常崩潰，或覺得技術成本高昂卻不見成效？
            <br className="hidden md:block" />
            我們專注於解決這些問題，將技術轉化為您的核心競爭力。
          </p>
        </div>

        <div className="grid gap-8 mb-24">
          {/* Card 1 */}
          <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition duration-300 flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-white text-xl border border-neutral-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              1
            </div>
            <div>
              <h4 className="font-bold text-2xl text-neutral-100 mb-3">
                為您的業務痛點找解方
              </h4>
              <p className="text-lg text-neutral-400 leading-relaxed">
                網站太慢流失客戶？系統不穩影響營運？我們能針對您的問題，例如選用{" "}
                <span className="text-white font-semibold">Next.js</span>{" "}
                打造極速體驗、以{" "}
                <span className="text-white font-semibold">Python</span>{" "}
                整合數據，或用{" "}
                <span className="text-white font-semibold">Java</span>{" "}
                確保系統穩定，把錢花在刀口上。
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition duration-300 flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-white text-xl border border-neutral-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              2
            </div>
            <div>
              <h4 className="font-bold text-2xl text-neutral-100 mb-3">
                拒絕技術黑箱與失控的進度
              </h4>
              <p className="text-lg text-neutral-400 leading-relaxed">
                您是否曾對外包專案的進度一無所知？我們提供{" "}
                <span className="text-white font-semibold">透明的開發流程</span>{" "}
                與即時回報，讓您隨時掌握進度，確保專案如期交付，不再為不確定性而焦慮。
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition duration-300 flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-white text-xl border border-neutral-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              3
            </div>
            <div>
              <h4 className="font-bold text-2xl text-neutral-100 mb-3">
                交付的是可持續獲利的資產
              </h4>
              <p className="text-lg text-neutral-400 leading-relaxed">
                廉價的網站可能帶來無窮的維護惡夢。我們重視程式碼品質、SEO
                與資安，為您打造一個穩定、安全且能持續帶來流量的數位資產。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl p-10 md:p-16 text-center border border-white/10 bg-linear-to-b from-neutral-900/50 to-black relative overflow-hidden group">
          {/* 背景光暈動畫 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/10 transition duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              我們為何與眾不同？
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              我們堅持「深度客製化」，深入了解您的業務邏輯，打造真正符合需求的解決方案，而非提供一個功能冗餘、效能低落的通用模板。
            </p>
            <Link href="/quote">
              <button
                type="button"
                className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
              >
                開始解決您的問題
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
