import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="overflow-x-auto min-h-screen flex flex-col">
        <NextTopLoader color="#17FFAC" showSpinner={false} />
        <Toaster position="top-center" reverseOrder={false} />

        <div id="responsive-wrapper" className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
