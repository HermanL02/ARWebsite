import Breadcrumb from "@/components/Common/Breadcrumb";
import ClientsSection from "@/components/Clients";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Aurora Rangers Ltd - Enterprise Development Team",
  description: "Discover how we've helped leading companies like GSuite Toronto and ALM Construction Group optimize their business processes through automation solutions.",
  // other metadata
};

const ClientsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Clients"
        description="We partner with industry leaders to deliver innovative automation solutions that drive efficiency and growth."
      />
      <ClientsSection />
    </>
  );
};

export default ClientsPage; 