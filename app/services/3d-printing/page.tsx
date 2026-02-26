import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

const service = servicesData["3d-printing"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
  },
};

export default function ThreeDPrintingPage() {
  return <ServicePageTemplate service={service} />;
}
