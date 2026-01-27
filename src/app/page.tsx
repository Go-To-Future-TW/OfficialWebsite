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
        您的技術合夥人
        <br className="md:hidden" />
        專解軟體開發的疑難雜症
      </h1>

      <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl leading-relaxed">
        厭倦了昂貴又沒效率的軟體專案嗎？
        <br />
        我們提供透明、高效的開發服務，為您的事業創造實質價值。
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/quote">
          <button
            type="button"
            className="bg-[#0E0E0E] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#383434] transition shadow-lg active:scale-95"
          >
            立即免費估價
          </button>
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-left">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">快速驗證想法</h3>
          <p className="text-neutral-600">
            提供 MVP 快速開發，讓您的點子迅速上線，搶佔市場先機。
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">預算完全透明</h3>
          <p className="text-neutral-600">
            拒絕報價黑箱，我們提供清晰的報價說明，讓您預先掌握成本，絕無隱藏費用。
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-2">交付後無憂</h3>
          <p className="text-neutral-600">
            專案交付只是開始，我們提供完整技術支援與代管，讓您專注業務。
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
