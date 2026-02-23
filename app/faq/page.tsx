import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema } from "@/lib/faq-schema";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about 3D printing, scanning, and design services at 3D Labs OKC.",
};

const generalFaqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive 3D services including FDM 3D printing, 3D scanning and reverse engineering, CAD design and 3D modeling, and hands-on training. Whether you need a prototype, custom part, or help bringing an idea to life, we can help.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're located at 10802 Quail Plaza Dr STE 120, Oklahoma City, OK 73120. We primarily serve the Oklahoma City metro area including Edmond, Norman, Moore, Yukon, and Midwest City.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can request a quote through our online form, call us at (405) 546-2228, or email connect@3dlabsokc.com. For the fastest response, please include details about your project, any 3D files you have, and your timeline.",
  },
  {
    question: "What are your business hours?",
    answer:
      "We're open Monday through Friday, 9:00 AM to 5:00 PM. Weekend appointments are available by request. Contact us to schedule a time outside regular hours.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer:
      "Yes! You can pick up completed projects at our OKC location, or we can ship items directly to you. Local delivery may be available for larger orders—contact us to discuss options.",
  },
];

const printingFaqs = [
  {
    question: "What materials can you print with?",
    answer:
      "We offer a wide range of FDM materials including PLA, PETG, ABS, TPU (flexible), ASA, Nylon, and specialty materials like carbon fiber composites. The best material depends on your project requirements for strength, flexibility, heat resistance, and appearance.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept STL, OBJ, STEP, 3MF, and most other common 3D file formats. If you're unsure about your file, send it to us and we'll let you know if it's compatible or if any modifications are needed.",
  },
  {
    question: "How much does 3D printing cost?",
    answer:
      "Pricing depends on the size, material, complexity, and quantity of your parts. Most small to medium parts range from $20-$100. We provide free quotes for all projects—send us your file or project details for an accurate estimate.",
  },
  {
    question: "What's the largest object you can print?",
    answer:
      "Our largest build volume is 300 x 300 x 400 mm. For objects larger than this, we can often split the design into multiple parts that assemble together. Contact us to discuss your specific requirements.",
  },
  {
    question: "How long does printing take?",
    answer:
      "Turnaround depends on project complexity, size, and our current queue. Simple prints can be completed in 24-48 hours, while larger or more complex projects may take a week or more. Rush services are available for urgent needs.",
  },
  {
    question: "Do you offer post-processing?",
    answer:
      "Yes! We offer support removal, sanding, painting, vapor smoothing (for ABS), and assembly services. Let us know what finish you need when requesting a quote.",
  },
];

const scanningFaqs = [
  {
    question: "What objects can be scanned?",
    answer:
      "Most solid objects can be scanned, from small parts (a few centimeters) to items up to 2 meters. Shiny, transparent, or very dark objects may require preparation with a temporary matte spray coating, which we can apply and remove.",
  },
  {
    question: "How accurate is 3D scanning?",
    answer:
      "Our scanning technology achieves accuracy up to 0.05mm, which is sufficient for most reverse engineering, quality inspection, and replication applications.",
  },
  {
    question: "Can you scan and then print the result?",
    answer:
      "Absolutely! This is a common workflow. We can scan your object, clean up the model, and print an exact replica or a modified version. This is perfect for replacing broken parts or creating duplicates.",
  },
  {
    question: "What file formats do you provide?",
    answer:
      "We can export scanned models in STL, OBJ, PLY, STEP, and IGES formats. Let us know what format works best for your intended use.",
  },
];

const designFaqs = [
  {
    question: "I don't have a 3D file. Can you create one from a sketch?",
    answer:
      "Yes! We regularly create 3D models from hand sketches, photos, verbal descriptions, or reference images. The more detail you can provide, the faster we can create your model.",
  },
  {
    question: "Can you modify an existing 3D file?",
    answer:
      "Absolutely. We can modify, repair, resize, or completely redesign existing 3D files. Send us your file and let us know what changes you need.",
  },
  {
    question: "How much does 3D modeling cost?",
    answer:
      "Modeling costs depend on complexity and detail level. Simple parts might be $50-100, while complex mechanical designs could be $200-500+. We provide detailed quotes before starting any work.",
  },
];

export default function FAQPage() {
  const allFaqs = [...generalFaqs, ...printingFaqs, ...scanningFaqs, ...designFaqs];
  const faqSchema = generateFAQSchema(allFaqs);

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
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Find answers to common questions about our services. Can&apos;t find
            what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* General */}
          <div>
            <SectionHeading
              heading="General Questions"
              centered={false}
            />
            <FAQAccordion items={generalFaqs} />
          </div>

          {/* 3D Printing */}
          <div>
            <SectionHeading
              heading="3D Printing"
              centered={false}
            />
            <FAQAccordion items={printingFaqs} />
          </div>

          {/* 3D Scanning */}
          <div>
            <SectionHeading
              heading="3D Scanning"
              centered={false}
            />
            <FAQAccordion items={scanningFaqs} />
          </div>

          {/* 3D Modeling */}
          <div>
            <SectionHeading
              heading="3D Modeling & Design"
              centered={false}
            />
            <FAQAccordion items={designFaqs} />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif text-text-primary mb-4">
            Still have questions?
          </h2>
          <p className="text-text-secondary mb-8">
            We&apos;re here to help. Reach out and we&apos;ll get back to you as
            soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-full transition-all"
            >
              Contact Us
            </Link>
            <a
              href="tel:+14055462228"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-border hover:border-accent text-text-primary font-medium rounded-full transition-all"
            >
              Call (405) 546-2228
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to get started?"
        subtext="Request a free quote for your project today."
        primaryCTA={{ text: "Request a Quote", href: "/quote" }}
      />
    </>
  );
}
