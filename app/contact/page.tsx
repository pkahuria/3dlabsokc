import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactMethodsStrip from "@/components/contact/ContactMethodsStrip";
import QuoteSection from "@/components/contact/QuoteSection";
import MapSection from "@/components/contact/MapSection";
import ContactFAQSection from "@/components/contact/ContactFAQSection";

export const metadata: Metadata = {
  title: "Contact & Request a Quote — 3D Labs OKC",
  description:
    "Get in touch with 3D Labs OKC. Request a free quote for 3D printing, scanning, modeling, or reverse engineering. Call (405) 546-2228 or visit us in Oklahoma City.",
  openGraph: {
    title: "Contact & Request a Quote — 3D Labs OKC",
    description:
      "Get in touch with 3D Labs OKC. Request a free quote for 3D printing, scanning, modeling, or reverse engineering. Call (405) 546-2228 or visit us in Oklahoma City.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Let's build something"
        titleHighlight="together"
        titleEnd="."
        description="Whether you have a file ready to print or just an idea you're exploring — reach out. Every project starts with a free, no-pressure conversation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact & Quote" },
        ]}
      />

      <ContactMethodsStrip />
      <QuoteSection />
      <MapSection />
      <ContactFAQSection />
    </>
  );
}
