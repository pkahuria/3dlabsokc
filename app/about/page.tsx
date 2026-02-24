import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "About 3D Labs OKC | Oklahoma City 3D Printing Company",
  description:
    "Learn about 3D Labs OKC, a local Oklahoma City 3D printing and prototyping company helping businesses bring ideas to life.",
};

const values = [
  {
    title: "Precision",
    description:
      "Every project is approached with meticulous attention to detail. We don't cut corners—we print them accurately.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Collaboration",
    description:
      "We work alongside our clients, not just for them. Your input shapes every step of the process.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: "Innovation",
    description:
      "We stay at the forefront of 3D printing technology, continuously expanding what's possible for our clients.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
];

const equipment = [
  { name: "FDM 3D Printers", count: "Multiple" },
  { name: "3D Scanner", count: "Professional Grade" },
  { name: "CAD Workstations", count: "Dedicated" },
  { name: "Post-Processing Tools", count: "Full Suite" },
];

export default function AboutPage() {
  return (
    <>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
            About <span className="text-accent">3D Labs OKC</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            A local Oklahoma City company dedicated to helping businesses and
            individuals bring their ideas to life through professional 3D
            printing services.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-sm">Team Photo</p>
                <p className="text-xs opacity-75">Peter / 3D Labs OKC</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-serif text-text-primary mb-6">
                Building the Future, One Layer at a Time
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  3D Labs OKC was founded with a simple mission: to make
                  professional 3D printing services accessible to businesses and
                  individuals in Oklahoma City. What started as a passion for
                  additive manufacturing has grown into a full-service 3D
                  printing operation.
                </p>
                <p>
                  We believe that everyone should have access to the power of 3D
                  printing. Whether you&apos;re a startup prototyping your first
                  product, an engineer needing custom parts, or a hobbyist
                  bringing a creative project to life—we&apos;re here to help
                  make it happen.
                </p>
                <p>
                  Based in Oklahoma City, we take pride in serving our local
                  community while also working with clients across the region.
                  Our commitment to quality, fast turnaround, and personalized
                  service sets us apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Team"
            heading="Meet the People Behind 3D Labs"
          />

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              {/* Photo */}
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <svg
                    className="w-24 h-24 mx-auto mb-2 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-sm">Photo</p>
                </div>
              </div>

              {/* Bio */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif text-text-primary mb-1">
                  Peter
                </h3>
                <p className="text-accent font-medium mb-4">
                  Founder & Lead Technician
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  With a background in engineering and a passion for additive
                  manufacturing, Peter founded 3D Labs OKC to help local
                  businesses and makers access professional 3D printing
                  services. He oversees every project to ensure quality and
                  precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What Drives Us"
            heading="Our Core Values"
            subtext="The principles that guide everything we do."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-white rounded-xl border border-border"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Facility"
            heading="Equipment & Capabilities"
            subtext="Professional-grade equipment for professional results."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div
                key={item.name}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center"
              >
                <p className="text-2xl font-mono text-accent mb-2">
                  {item.count}
                </p>
                <p className="text-white font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Workspace Image Placeholder */}
          <div className="mt-12 aspect-[21/9] rounded-2xl bg-slate-800/30 border border-slate-700 flex items-center justify-center overflow-hidden">
            <div className="text-center text-slate-500">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-50"
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
              <p className="text-sm">Workspace / Print Farm Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to work with us?"
        subtext="Let's discuss your project and see how we can help bring your ideas to life."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
