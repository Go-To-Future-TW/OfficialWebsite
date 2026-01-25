import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "精選案例 | 邁向未來",
  description: "查看我們協助客戶打造的數位產品與成功案例。",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar title={SEO.About.title} logo={SEO.About.image} />

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
            <button className="px-6 py-2 rounded-md font-medium text-neutral-600 hover:bg-gray-100 transition">
              回首頁
            </button>
          </Link>
          <Link href="/quote">
            <button className="bg-[#0E0E0E] text-white px-6 py-2 rounded-md font-bold hover:bg-[#383434] transition">
              先去估價
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
