import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <FadeUp>
          <SectionHeader label="Featured Project" title="Case study spotlight" />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Image */}
          <FadeUp>
            <div className="relative rounded-[20px] overflow-hidden h-[500px] group">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=700&fit=crop&crop=center"
                alt="Technician inspecting 3D printed parts in workshop"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f97316] text-white rounded-lg text-[0.75rem] font-bold tracking-wide uppercase">
                ⭐ Featured
              </div>
            </div>
          </FadeUp>

          {/* Text Content */}
          <FadeUp delay={200}>
            <div>
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                Reverse Engineering
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.15] text-[#0f172a] mb-6">
                Discontinued bracket — redesigned and&nbsp;improved
              </h2>
              <p className="text-[#64748b] text-[1.05rem] leading-[1.8] mb-8">
                A local OKC contractor came to us with a critical mounting
                bracket that had been discontinued by the manufacturer.
                Replacements weren&apos;t available anywhere — and the original
                had a known weak point that caused repeated failures.
              </p>

              {/* Before/After Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-6 bg-white rounded-[14px] border border-[#f1f5f9]">
                  <div className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[#94a3b8] mb-1.5">
                    The Problem
                  </div>
                  <p className="text-[0.88rem] text-[#475569] leading-[1.6]">
                    Discontinued part, 6+ week lead time from overseas
                    fabricators, original design prone to stress cracking at the
                    mounting hole.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-[14px] border border-[#f1f5f9]">
                  <div className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[#f97316] mb-1.5">
                    Our Solution
                  </div>
                  <p className="text-[0.88rem] text-[#475569] leading-[1.6]">
                    3D scanned the broken original, redesigned with reinforced
                    mounting points, printed in PETG for superior durability.
                    Delivered in 48 hours.
                  </p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex gap-10 flex-wrap py-6 border-t border-b border-[#f1f5f9]">
                <div>
                  <div className="text-[0.7rem] font-bold text-[#94a3b8] uppercase tracking-wide mb-0.5">
                    Material
                  </div>
                  <div className="text-[0.95rem] font-semibold text-[#1e293b]">
                    PETG
                  </div>
                </div>
                <div>
                  <div className="text-[0.7rem] font-bold text-[#94a3b8] uppercase tracking-wide mb-0.5">
                    Turnaround
                  </div>
                  <div className="text-[0.95rem] font-semibold text-[#1e293b]">
                    48 Hours
                  </div>
                </div>
                <div>
                  <div className="text-[0.7rem] font-bold text-[#94a3b8] uppercase tracking-wide mb-0.5">
                    Service
                  </div>
                  <div className="text-[0.95rem] font-semibold text-[#1e293b]">
                    Scan → Redesign → Print
                  </div>
                </div>
                <div>
                  <div className="text-[0.7rem] font-bold text-[#94a3b8] uppercase tracking-wide mb-0.5">
                    Outcome
                  </div>
                  <div className="text-[0.95rem] font-semibold text-[#1e293b]">
                    Zero failures since install
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
