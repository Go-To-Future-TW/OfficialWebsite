import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Navbar from "@/components/Navbar/Navbar";
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
    <div className="min-h-screen bg-white">
      <Navbar title={SEO.About.title} logo={SEO.About.image} />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-6 text-[#1A1A1A]">
            讓技術成為你的商業護城河
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            邁向未來 是一個專注於現代化網頁技術的開發團隊。
            <br className="hidden md:block" />
            我們不只寫程式，更在乎系統如何為您的業務創造價值。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-xl mb-3">多元技術整合</h3>
            <p className="text-neutral-600 leading-relaxed">
              我們不被單一語言侷限。結合 <strong>Next.js</strong> 的極速體驗、
              <strong>Python</strong> 的數據處理能力，與 <strong>Java</strong>{" "}
              生態系的穩健架構，為您選擇最適合的技術方案。
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-xl mb-3">透明溝通</h3>
            <p className="text-neutral-600 leading-relaxed">
              沒有聽不懂的技術術語。我們建立<strong>透明的開發流程</strong>
              與即時進度回報，讓您隨時掌握專案狀況，拒絕黑箱作業。
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-xl mb-3">品質承諾</h3>
            <p className="text-neutral-600 leading-relaxed">
              除了美觀的前端，我們更重視程式碼品質、SEO
              優化與資安防護，打造穩健的數位資產。
            </p>
          </div>
        </div>

        <div className="bg-[#0E0E0E] text-white rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">我們的開發哲學</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              在這個 AI 與 No-Code
              氾濫的時代，我們相信「深度客製化」依然是品牌脫穎而出的關鍵。
              <br />
              <br />
              邁向未來 成立於 2025
              年，我們是一群對技術有潔癖的開發者。我們不套用廉價的模板，而是為每個客戶量身打造最適合的數位解決方案。
            </p>
            <Link href="/quote">
              <button type="button" className="bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition">
                與我們合作
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
