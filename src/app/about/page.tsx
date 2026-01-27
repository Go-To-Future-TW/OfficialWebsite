import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Link from "next/link";

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
    <div className="bg-white">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-6 text-[#1A1A1A]">
            不僅是開發，更是為您解決商業問題
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            您的網站是否載入緩慢、系統時常崩潰，或覺得技術成本高昂卻不見成效？
            <br className="hidden md:block" />
            我們專注於解決這些問題，將技術轉化為您的核心競爭力。
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            我們如何解決您的問題？
          </h2>
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">為您的業務痛點找解方</h4>
                <p className="text-neutral-600 leading-relaxed">
                  網站太慢流失客戶？系統不穩影響營運？我們能針對您的問題，例如選用{" "}
                  <strong>Next.js</strong> 打造極速體驗、以{" "}
                  <strong>Python</strong> 整合數據，或用 <strong>Java</strong>{" "}
                  確保系統穩定，把錢花在刀口上。
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">
                  拒絕技術黑箱與失控的進度
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  您是否曾對外包專案的進度一無所知？我們提供{" "}
                  <strong>透明的開發流程</strong>
                  與即時回報，讓您隨時掌握進度，確保專案如期交付，不再為不確定性而焦慮。
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">
                  交付的是可持續獲利的資產
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  廉價的網站可能帶來無窮的維護惡夢。我們重視程式碼品質、SEO
                  與資安，為您打造一個穩定、安全且能持續帶來流量的數位資產。
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-[#0E0E0E] text-white rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">我們為何與眾不同？</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              在模板與 AI
              工具氾濫的時代，許多方案看似便宜，卻無法真正解決您的獨特問題。
              <br />
              <br />
              我們堅持「深度客製化」，深入了解您的業務邏輯，打造真正符合需求的解決方案，而非提供一個功能冗餘、效能低落的通用模板。
            </p>
            <Link href="/quote">
              <button
                type="button"
                className="bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition"
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
