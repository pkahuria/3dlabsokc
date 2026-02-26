import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import PhotoBand from "@/components/about/PhotoBand";
import NumbersSection from "@/components/about/NumbersSection";
import DifferentiatorsSection from "@/components/about/DifferentiatorsSection";
import LocationSection from "@/components/about/LocationSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us — 3D Labs OKC | Our Story & Mission",
  description:
    "We're a small team solving real manufacturing problems for businesses and individuals across Oklahoma City — one print at a time.",
  openGraph: {
    title: "About Us — 3D Labs OKC | Our Story & Mission",
    description:
      "We're a small team solving real manufacturing problems for businesses and individuals across Oklahoma City — one print at a time.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="The people behind your"
        titleHighlight="parts"
        titleEnd="."
        description="We're a small team solving real manufacturing problems for businesses and individuals across Oklahoma City — one print at a time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <StorySection />
      <ValuesSection />
      <PhotoBand />
      <NumbersSection />
      <DifferentiatorsSection />
      <LocationSection />

      <CTASection
        headline="Let's work together"
        description="Now that you know who we are — tell us what you need. Every project starts with a free, no-pressure conversation."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/contact#quote"
        secondaryButtonText="Call (405) 546-2228"
        secondaryButtonHref="tel:4055462228"
      />
    </>
  );
}
