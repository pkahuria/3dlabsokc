import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

const service = servicesData["reverse-engineering"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
  },
};

export default function ReverseEngineeringPage() {
  return <ServicePageTemplate service={service} />;
}
