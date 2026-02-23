import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

const service = servicesData["training"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function TrainingPage() {
  return <ServicePageTemplate service={service} />;
}
