import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO.Index.title,
  description: SEO.Index.description,
  openGraph: {
    title: SEO.Index.title,
    description: SEO.Index.description,
    images: [SEO.Index.image],
    type: "website",
  },
  twitter: {
    title: SEO.Index.title,
    description: SEO.Index.description,
    images: [SEO.Index.image],
  },
};

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center pt-32 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1A1A1A] tracking-tight leading-tight">
        邁向未來的
        <br className="md:hidden" />
        軟體開發解決方案
      </h1>

      <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl leading-relaxed">
        我們專注於打造高效能的網站與系統。
        <br />
        無論是微型維護還是大型平台，都能為您提供專業的技術支援。
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/quote">
          <button type="button" className="bg-[#0E0E0E] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#383434] transition shadow-lg active:scale-95">
            立即免費估價
          </button>
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-left">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">快速交付</h3>
          <p className="text-neutral-600">
            針對 MVP 與形象官網提供快速開發方案，讓您的服務即刻上線。
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">預算透明</h3>
          <p className="text-neutral-600">
            提供明確的預算參考區間，讓您在諮詢前就能掌握開發成本，拒絕漫天喊價與隱藏費用。
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">專業維護</h3>
          <p className="text-neutral-600">
            提供完整的售後技術支援與伺服器代管，讓您無後顧之憂。
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
