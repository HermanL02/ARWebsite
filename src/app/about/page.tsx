import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aurora Software Solutions - Halifax Web Development Team",
  description: "Meet our Halifax-based team of web developers and digital marketing experts. We help small businesses across Nova Scotia succeed online with professional websites, SEO, and marketing services.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We're a Halifax-based web development company passionate about helping small businesses in Nova Scotia grow their online presence through professional websites, SEO, and digital marketing."
      />
      <AboutSectionTwo />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
