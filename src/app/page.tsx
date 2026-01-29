import type { Metadata } from "next";
import Link from "next/link";

import { Spotlight } from "@/components/ui/Spotlight";
import SEO from "@/config/SEO.json";

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

const items = [
  {
    title: "快速驗證想法",
    description: "提供 MVP 快速開發，讓您的點子迅速上線，搶佔市場先機。",
    className: "md:col-span-1",
  },
  {
    title: "預算完全透明",
    description: "拒絕報價黑箱。清晰的報價說明，預先掌握成本，絕無隱藏費用。",
    className: "md:col-span-1",
    link: "/quote",
  },
  {
    title: "交付後無憂",
    description: "專案交付只是開始。提供完整技術支援與代管，讓您專注業務。",
    className: "md:col-span-1",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-6 tracking-tight leading-[1.15]">
          您的技術合夥人
          <br className="md:hidden" />
          <br className="hidden md:block" />
          專解軟體開發的疑難雜症
        </h1>

        <p className="mt-8 font-normal text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          厭倦了昂貴又沒效率的軟體專案嗎？
          <br />
          我們提供透明、高效的開發服務，為您的事業創造實質價值。
        </p>

        <div className="flex justify-center mt-12">
          <Link href="/quote">
            <button
              type="button"
              className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-neutral-200 transition shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95"
            >
              立即免費估價
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.link || "#"}
              className={`
                  block p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:bg-neutral-900/60 hover:border-white/20 transition duration-300 group/bento cursor-default
                  ${item.link ? "cursor-pointer" : ""}
                `}
            >
              <h3 className="font-bold text-2xl text-neutral-100 mb-4 mt-2">
                {item.title}
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
