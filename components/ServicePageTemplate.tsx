import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
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
        streetAddress: "10802 Quail Plaza Dr STE 120",
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-600 to-sky-700" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #0EA5E9 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300">
              {service.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* What It Is / How It Works */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif text-text-primary mb-4">
                What is {service.shortTitle}?
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {service.whatItIs}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-text-primary mb-4">
                How It Works
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {service.howItWorks}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Use Cases"
            heading="Applications"
            subtext={`Discover how ${service.shortTitle.toLowerCase()} can help with your specific needs.`}
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {service.applications.map((app) => (
              <div
                key={app.title}
                className="p-6 bg-white rounded-xl border border-border"
              >
                <h3 className="text-lg font-serif text-text-primary mb-2">
                  {app.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            heading="How We Work"
            subtext="A straightforward process from start to finish."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-serif text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Technical Details"
            heading="Specifications & Capabilities"
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.specs.map((spec) => (
              <div
                key={spec.label}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700"
              >
                <p className="text-slate-400 text-sm mb-1">{spec.label}</p>
                <p className="text-white font-medium font-mono">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            heading={`${service.shortTitle} Projects`}
            subtext="Examples of our recent work."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-slate-100 border border-border flex items-center justify-center"
              >
                <div className="text-center text-slate-400">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Project Image {i}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              View Full Portfolio
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Questions"
            heading={`${service.shortTitle} FAQ`}
            subtext="Common questions about our service."
          />
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading={`Get a quote for ${service.shortTitle.toLowerCase()}`}
        subtext="Tell us about your project and we'll provide a detailed quote within 24 hours."
        primaryCTA={{ text: "Request a Quote", href: "/quote" }}
      />
    </>
  );
}
