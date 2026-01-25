import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO.Portfolio.title,
  description: SEO.Portfolio.description,
  openGraph: {
    title: SEO.Portfolio.title,
    description: SEO.Portfolio.description,
    images: [SEO.Portfolio.image],
    type: "website",
  },
  twitter: {
    title: SEO.Portfolio.title,
    description: SEO.Portfolio.description,
    images: [SEO.Portfolio.image],
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-white">

      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1A1A1A]">
          精選案例整理中
        </h1>

        <p className="text-lg text-neutral-500 mb-8 max-w-md mx-auto">
          我們正在整理過去的專案成果與技術文件。
          <br />
          近期將會上線，敬請期待。
        </p>

        <div className="flex gap-4">
          <Link href="/">
            <button type="button" className="px-6 py-2 rounded-md font-medium text-neutral-600 hover:bg-gray-100 transition">
              回首頁
            </button>
          </Link>
          <Link href="/quote">
            <button type="button" className="bg-[#0E0E0E] text-white px-6 py-2 rounded-md font-bold hover:bg-[#383434] transition">
              先去估價
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
