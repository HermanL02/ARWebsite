import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ServiceArea from "@/components/ServiceArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora Software Solutions - Web Development Halifax | SEO & Marketing",
  description: "Professional Web Development Company in Halifax offering web design, SEO, and Marketing Services For Small Business. Serving Halifax, Dartmouth, Bedford & Nova Scotia.",
  keywords: "web development Halifax, web design Halifax, SEO Halifax, digital marketing Halifax, small business websites Nova Scotia",
  openGraph: {
    title: "Aurora Software Solutions - Web Development Halifax",
    description: "Professional Web Development Company in Halifax offering web design, SEO, and Marketing Services For Small Business.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ServiceArea />
      <Features />
      <Portfolio />
      <Contact />
    </>
  );
}
