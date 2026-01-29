import type { Metadata } from "next";
import Link from "next/link";

import { Spotlight } from "@/components/ui/Spotlight";
import SEO from "@/config/SEO.json";

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
    <div className="min-h-screen w-full bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <main className="max-w-7xl mx-auto px-6 py-32 relative z-10 text-center">
        <h1 className="text-7xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-linear-to-b from-neutral-50 to-neutral-700 opacity-50 select-none">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          這裡似乎是一片虛無
        </h2>

        <p className="text-xl text-neutral-400 mb-12 max-w-lg mx-auto leading-relaxed">
          別擔心，即使是在未知的領域，我們也能找到出路。
          <br />
          讓我們重新對焦，回到起點。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button
              type="button"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              返回首頁
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
