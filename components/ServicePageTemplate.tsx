import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/services/ContentSection";
import UseCasesGrid from "@/components/services/UseCasesGrid";
import FAQGrid from "@/components/services/FAQGrid";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";
import { generateFAQSchema } from "@/lib/faq-schema";
import { ServiceData } from "@/lib/services-data";

interface ServicePageTemplateProps {
  service: ServiceData;
}

export default function ServicePageTemplate({
  service,
}: ServicePageTemplateProps) {
  const faqSchema = generateFAQSchema(service.faqs);

  // Service schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "3D Labs OKC LLC",
      url: "https://3dlabsokc.com",
      telephone: "+14055462228",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10802 Quail Plaza Dr STE 120A",
        addressLocality: "Oklahoma City",
        addressRegion: "OK",
        postalCode: "73120",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Oklahoma City",
    },
    url: `https://3dlabsokc.com/services/${service.slug}`,
  };

  // Split heroTitle for highlighting
  const getHeroTitleParts = () => {
    if (service.slug === "3d-printing") {
      return {
        title: "On-demand",
        highlight: "3D printing",
        end: "in Oklahoma City",
      };
    }
    if (service.slug === "3d-scanning") {
      return {
        title: "High-precision",
        highlight: "3D scanning",
        end: "in Oklahoma City",
      };
    }
    if (service.slug === "3d-modeling") {
      return {
        title: "Custom",
        highlight: "3D modeling",
        end: "& CAD design",
      };
    }
    return {
      title: service.title,
      highlight: undefined,
      end: undefined,
    };
  };

  const titleParts = getHeroTitleParts();

  // Map applications to use cases format
  const useCases = service.applications.slice(0, 3).map((app, index) => ({
    icon: ["🔧", "🏗️", "📦", "🎯"][index] || "✨",
    title: app.title,
    description: app.description,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        label={service.slug === "training" ? "Education" : "Service"}
        title={titleParts.title}
        titleHighlight={titleParts.highlight}
        titleEnd={titleParts.end}
        description={service.heroDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* What It Is Section */}
      <section className="py-32 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <FadeUp>
              <div>
                <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                  What It Is
                </span>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-[#0f172a] mb-6">
                  What is {service.shortTitle}?
                </h2>
                <p className="text-[#64748b] text-[1.05rem] leading-[1.8]">
                  {service.whatItIs}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div>
                <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                  Our Process
                </span>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-[#0f172a] mb-6">
                  How It Works
                </h2>
                <p className="text-[#64748b] text-[1.05rem] leading-[1.8]">
                  {service.howItWorks}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="section-container">
          <FadeUp>
            <SectionHeader
              label="Our Process"
              title="How we work with you"
              description="A straightforward process from start to finish."
            />
          </FadeUp>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Connecting Gradient Line (desktop only) */}
            <div
              className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-0.5"
              style={{
                background: "linear-gradient(90deg, #b9dfff, #fdba74, #b9dfff)",
              }}
            />

            {service.process.map((step, index) => (
              <FadeUp key={step.step} delay={index * 100}>
                <div className="text-center relative px-4 group">
                  {/* Step Number Circle */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#b9dfff] flex items-center justify-center mx-auto mb-6 font-serif text-[1.5rem] text-[#0c8ce9] relative z-10 transition-all duration-300 group-hover:bg-[#f97316] group-hover:text-white group-hover:border-[#f97316] group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.25)]">
                    {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[1.15rem] text-[#0f172a] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748b] text-[0.88rem] mx-auto max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        {/* Background Gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(12, 140, 233, 0.06) 0%, transparent 50%)",
          }}
        />

        <div className="section-container relative z-10">
          <FadeUp>
            <SectionHeader
              label="Technical Details"
              title="Specifications & Capabilities"
              dark
            />
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.specs.map((spec, index) => (
              <FadeUp key={spec.label} delay={(index % 3) * 100}>
                <div className="p-8 rounded-[20px] bg-white/[0.04] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.07] hover:border-[rgba(249,115,22,0.3)]">
                  <p className="text-[#94a3b8] text-[0.85rem] mb-1">
                    {spec.label}
                  </p>
                  <p className="text-white font-semibold text-[1.1rem]">
                    {spec.value}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Applications */}
      <UseCasesGrid
        label="Use Cases"
        title={`${service.shortTitle} applications`}
        description={`Discover how ${service.shortTitle.toLowerCase()} can help with your specific needs.`}
        useCases={useCases}
      />

      {/* FAQ */}
      <FAQGrid
        label={`${service.shortTitle} FAQ`}
        title="Common questions"
        faqs={service.faqs}
      />

      {/* CTA */}
      <CTASection
        headline={`Ready for ${service.shortTitle.toLowerCase()}?`}
        description="Tell us about your project and we'll provide a detailed quote — usually within hours."
      />
    </>
  );
}
