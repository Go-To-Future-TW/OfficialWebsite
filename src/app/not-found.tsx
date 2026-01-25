import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO.NotFound.title,
  description: SEO.NotFound.description,
  openGraph: {
    title: SEO.NotFound.title,
    description: SEO.NotFound.description,
    images: [SEO.NotFound.image],
    type: "website",
  },
  twitter: {
    title: SEO.NotFound.title,
    description: SEO.NotFound.description,
    images: [SEO.NotFound.image],
  },
};

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center pt-32 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1A1A1A] tracking-tight leading-tight">
        404 NOT-FOUND
      </h1>

      <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl leading-relaxed">
        找不到頁面
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <button type="button" className="bg-[#0E0E0E] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#383434] transition shadow-lg active:scale-95">
            回到首頁
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
