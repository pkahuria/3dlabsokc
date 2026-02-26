import { Metadata } from "next";
import PortfolioPageClient from "@/components/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Our Work — 3D Labs OKC | Portfolio & Case Studies",
  description:
    "Real parts, real results. Browse our portfolio of completed 3D printing, scanning, and reverse engineering projects in Oklahoma City.",
  openGraph: {
    title: "Our Work — 3D Labs OKC | Portfolio & Case Studies",
    description:
      "Real parts, real results. Browse our portfolio of completed 3D printing, scanning, and reverse engineering projects in Oklahoma City.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
