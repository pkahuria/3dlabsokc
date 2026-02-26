import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

const stats = [
  { value: "500+", label: "Parts Produced", color: "orange" },
  { value: "4.9★", label: "Client Rating", color: "blue" },
  { value: "48hr", label: "Avg. Turnaround", color: "orange" },
  { value: "100%", label: "Free Consultations", color: "blue" },
];

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text & Stats */}
          <FadeUp>
            <div>
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                What We&apos;ve Built
              </span>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-[#0f172a] mb-6">
                Real parts solving real&nbsp;problems
              </h2>
              <p className="text-[#64748b] text-[1.05rem] leading-[1.8] mb-10">
                From discontinued appliance components to custom jigs that save
                production hours — our work goes beyond prototyping. We create
                functional parts that businesses and individuals rely on every
                day.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 bg-white rounded-[14px] border border-[#f1f5f9]"
                  >
                    <div
                      className={`font-serif text-[2rem] leading-none mb-1 ${
                        stat.color === "orange"
                          ? "text-[#f97316]"
                          : "text-[#0c8ce9]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[0.82rem] text-[#94a3b8] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 px-8 py-[0.9rem] bg-[#f97316] text-white font-semibold text-[0.95rem] rounded-[10px] transition-all duration-250 hover:bg-[#ea580c] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] group"
              >
                View Our Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeUp>

          {/* Right: Photo Collage */}
          <FadeUp delay={200}>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
              {/* Tall Left Photo */}
              <div className="row-span-2 rounded-2xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=700&fit=crop&crop=center"
                  alt="Person examining 3D printed components"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-white/[0.92] backdrop-blur-lg px-2.5 py-1 rounded-md text-[0.7rem] font-semibold text-[#334155]">
                  Quality inspection
                </div>
              </div>

              {/* Top Right Photo */}
              <div className="rounded-2xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=350&fit=crop&crop=center"
                  alt="3D printing production"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-white/[0.92] backdrop-blur-lg px-2.5 py-1 rounded-md text-[0.7rem] font-semibold text-[#334155]">
                  Batch production
                </div>
              </div>

              {/* Bottom Right Photo */}
              <div className="rounded-2xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=350&fit=crop&crop=center"
                  alt="Design collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-white/[0.92] backdrop-blur-lg px-2.5 py-1 rounded-md text-[0.7rem] font-semibold text-[#334155]">
                  Design review
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
