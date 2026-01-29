import "@/styles/globals.css";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SEO from "@/config/SEO.json";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <body className="overflow-x-hidden flex flex-col bg-black text-neutral-200 antialiased selection:bg-neutral-700 selection:text-white">
        <main className="min-h-screen flex flex-col relative">
          <NextTopLoader color="#FFFFFF" showSpinner={false} />
          <Toaster position="top-center" reverseOrder={false} />

          <Navbar title={SEO.default.title} logo={SEO.default.image} />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
