import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema } from "@/lib/faq-schema";

export const metadata: Metadata = {
  title: "3D Printing & Prototyping Services",
  description:
    "End-to-end 3D services including printing, scanning, modeling, and training in Oklahoma City. From prototype to production.",
};

const services = [
  {
    title: "3D Printing",
    description:
      "Professional FDM 3D printing for prototypes, custom parts, and production runs. We use industrial-grade printers and a wide range of materials to deliver high-quality results for any project.",
    href: "/services/3d-printing",
    features: [
      "Industrial FDM printers",
      "Multiple material options",
      "Fast turnaround times",
      "Competitive pricing",
    ],
  },
  {
    title: "3D Scanning",
    description:
      "Capture complex objects in high-resolution digital 3D models. Perfect for reverse engineering, quality inspection, archiving, and creating digital twins of physical objects.",
    href: "/services/3d-scanning",
    features: [
      "High-resolution capture",
      "Reverse engineering",
      "Quality inspection",
      "Digital archiving",
    ],
  },
  {
    title: "3D Modeling",
    description:
      "Custom CAD design and 3D modeling services to turn your ideas into print-ready files. Whether you have a sketch, photo, or just an idea, we can create the 3D model you need.",
    href: "/services/3d-modeling",
    features: [
      "Custom CAD design",
      "Print optimization",
      "File repair & conversion",
      "Concept visualization",
    ],
  },
  {
    title: "Training",
    description:
      "Hands-on 3D printing training sessions for individuals and businesses. Learn to operate 3D printers, prepare files, troubleshoot issues, and build in-house capabilities.",
    href: "/services/training",
    features: [
      "Hands-on learning",
      "Custom curriculum",
      "Equipment training",
      "Ongoing support",
    ],
  },
];

const faqs = [
  {
    question: "What materials can you print with?",
    answer:
      "We offer a wide range of FDM materials including PLA, PETG, ABS, TPU (flexible), ASA, Nylon, and specialty materials like carbon fiber composites. The best material depends on your project requirements for strength, flexibility, heat resistance, and appearance.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Turnaround time depends on project complexity, size, and current queue. Simple prints can be completed in 24-48 hours, while larger or more complex projects may take a week or more. We always provide an estimated timeline with your quote.",
  },
  {
    question: "Do you offer rush services?",
    answer:
      "Yes! We understand that sometimes you need parts fast. Rush services are available for an additional fee. Contact us to discuss your urgent timeline needs.",
  },
  {
    question: "Can you work from my existing 3D files?",
    answer:
      "Absolutely. We accept most common 3D file formats including STL, OBJ, STEP, and 3MF. We'll review your file for printability and let you know if any modifications are needed.",
  },
];

export default function ServicesPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-slate-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #0EA5E9 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
            End-to-End <span className="text-accent">3D Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            From initial concept to finished product, we provide comprehensive
            3D printing, scanning, modeling, and training services to bring your
            ideas to life.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-border flex items-center justify-center overflow-hidden">
                    <div className="text-center text-slate-400 p-8">
                      <svg
                        className="w-20 h-20 mx-auto mb-4 opacity-50"
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
                      <p className="text-sm">{service.title} Image</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <h2 className="text-3xl font-serif text-text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-text-primary"
                      >
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    Learn more about {service.title}
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            heading="Frequently Asked Questions"
            subtext="Have questions about our services? Find answers to the most common questions below."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        heading="Ready to start your project?"
        subtext="Get a free quote for your 3D printing, scanning, or design project. We respond within 24 hours."
        primaryCTA={{ text: "Request a Quote", href: "/quote" }}
      />
    </>
  );
}
