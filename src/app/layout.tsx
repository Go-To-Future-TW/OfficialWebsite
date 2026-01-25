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
    <html lang="zh-TW">
      <body className="overflow-x-auto flex flex-col">
        <main className="min-h-screen flex flex-col">
          <NextTopLoader color="#17FFAC" showSpinner={false} />
          <Toaster position="top-center" reverseOrder={false} />

          <div className="bg-white">
            <Navbar title={SEO.default.title} logo={SEO.default.image} />
            {children}
          </div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
