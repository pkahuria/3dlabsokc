import { Metadata } from "next";
import PortfolioPageClient from "@/components/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Our Work | 3D Printing Projects",
  description:
    "Browse our portfolio of completed 3D printing, scanning, and modeling projects in Oklahoma City.",
  openGraph: {
    title: "Our Work | 3D Printing Projects | 3D Labs OKC",
    description:
      "Browse our portfolio of completed 3D printing, scanning, and modeling projects in Oklahoma City.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
