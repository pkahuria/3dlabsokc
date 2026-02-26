"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[calc(72px+6rem)] pb-24 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 animate-[gridPulse_8s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 140, 233, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12, 140, 233, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft Gradient Orb */}
      <div
        className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, #e0efff 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left: Text Content */}
        <div className="animate-[slideInLeft_0.8s_ease-out] lg:order-1 order-2 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fff7ed] border border-[#fed7aa] rounded-full text-[0.8rem] font-semibold text-[#ea580c] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-[pulse_2s_ease-in-out_infinite]" />
            Oklahoma City&apos;s 3D Printing Partner
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.15] text-[#0f172a] mb-6">
            We turn your <em className="italic text-[#0c8ce9]">ideas</em> into
            real&nbsp;parts.
          </h1>

          {/* Description */}
          <p className="text-[1.15rem] text-[#64748b] leading-[1.8] mb-10 max-w-[60ch] mx-auto lg:mx-0">
            From a rough sketch to a finished product — 3D Labs OKC delivers
            fast, precise FDM printing, scanning, and design services for
            businesses and individuals across Oklahoma.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2.5 px-8 py-[0.9rem] bg-[#f97316] text-white font-semibold text-[0.95rem] rounded-[10px] transition-all duration-250 hover:bg-[#ea580c] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] group"
            >
              Request a Free Quote
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
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-[0.9rem] bg-transparent text-[#334155] font-semibold text-[0.95rem] border-[1.5px] border-[#e2e8f0] rounded-[10px] transition-all duration-250 hover:border-[#94a3b8] hover:bg-[#f8fafc] hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right: Photo Grid */}
        <div className="relative lg:order-2 order-1 animate-[fadeIn_1s_ease-out_0.3s_both]">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[520px] max-w-[500px] mx-auto lg:max-w-none lg:h-[520px]">
            {/* Tall Left Photo */}
            <div className="row-span-2 rounded-2xl overflow-hidden relative group">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=900&fit=crop&crop=center"
                alt="Engineer examining a precision part"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-white/[0.92] backdrop-blur-lg px-3 py-1.5 rounded-lg text-[0.72rem] font-semibold text-[#334155] tracking-wide">
                Precision engineering
              </div>
            </div>

            {/* Top Right Photo */}
            <div className="rounded-2xl overflow-hidden relative group">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop&crop=center"
                alt="3D printing technology in action"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-white/[0.92] backdrop-blur-lg px-3 py-1.5 rounded-lg text-[0.72rem] font-semibold text-[#334155] tracking-wide">
                FDM printing
              </div>
            </div>

            {/* Bottom Right Photo */}
            <div className="rounded-2xl overflow-hidden relative group">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=400&fit=crop&crop=center"
                alt="Team collaboration on a project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-white/[0.92] backdrop-blur-lg px-3 py-1.5 rounded-lg text-[0.72rem] font-semibold text-[#334155] tracking-wide">
                Collaborative design
              </div>
            </div>
          </div>

          {/* Floating Stat Card 1 */}
          <div className="absolute -top-2.5 -right-5 bg-white rounded-[14px] px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] z-20 animate-[float_5s_ease-in-out_infinite] hidden lg:block">
            <div className="font-serif text-[1.6rem] text-[#0f172a] leading-none mb-0.5">
              48<span className="text-[#f97316]">hr</span>
            </div>
            <div className="text-[0.75rem] text-[#94a3b8] font-medium">
              Avg. Turnaround
            </div>
          </div>

          {/* Floating Stat Card 2 */}
          <div className="absolute -bottom-2.5 -left-5 bg-white rounded-[14px] px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] z-20 animate-[float_7s_ease-in-out_infinite_0.5s] hidden lg:block">
            <div className="font-serif text-[1.6rem] text-[#0f172a] leading-none mb-0.5">
              FDM
            </div>
            <div className="text-[0.75rem] text-[#94a3b8] font-medium">
              Precision Printing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
