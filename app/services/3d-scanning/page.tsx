import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

const service = servicesData["3d-scanning"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function ThreeDScanningPage() {
  return <ServicePageTemplate service={service} />;
}
