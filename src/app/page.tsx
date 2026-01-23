import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: SEO.About.title,
  description: SEO.About.description,
  openGraph: {
    title: SEO.About.title,
    description: SEO.About.description,
    images: [SEO.About.image],
    type: "website",
  },
  twitter: {
    title: SEO.About.title,
    description: SEO.About.description,
    images: [SEO.About.image],
  },
};

const Home = () => {
  return (
    <div>
      <Navbar title={SEO.About.title} logo={SEO.About.image} />
      <h1 className="text-2xl font-bold">邁向未來歡迎您！</h1>
    </div>
  );
};

export default Home;