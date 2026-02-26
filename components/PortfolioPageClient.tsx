"use client";

import PageHero from "@/components/PageHero";
import StatsBanner from "@/components/portfolio/StatsBanner";
import FeaturedCaseStudy from "@/components/portfolio/FeaturedCaseStudy";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import ProcessTeaser from "@/components/portfolio/ProcessTeaser";
import TestimonialsGrid from "@/components/portfolio/TestimonialsGrid";
import CTASection from "@/components/CTASection";

export default function PortfolioPageClient() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Real parts, real"
        titleHighlight="results"
        titleEnd="."
        description="Every project here solved a real problem for a real business or individual. Explore what we've built — and imagine what we can build for you."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work" },
        ]}
      />

      <StatsBanner />
      <FeaturedCaseStudy />
      <ProjectGrid />
      <ProcessTeaser />
      <TestimonialsGrid />

      <CTASection
        headline="Your project could be next"
        description="Every project in this portfolio started with a simple conversation. Tell us what you need — we'll tell you how we can help."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact#quote"
      />
    </>
  );
}
