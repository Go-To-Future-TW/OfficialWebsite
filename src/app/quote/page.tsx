import type { Metadata } from "next";
import SEO from "@/config/SEO.json";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = {
  title: SEO.Quote.title,
  description: SEO.Quote.description,
  openGraph: {
    title: SEO.Quote.title,
    description: SEO.Quote.description,
    images: [SEO.Quote.image],
    type: "website",
  },
  twitter: {
    title: SEO.Quote.title,
    description: SEO.Quote.description,
    images: [SEO.Quote.image],
  },
};
export default function QuotePage() {
  return (
    <QuoteClient />
  );
}
