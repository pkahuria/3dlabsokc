import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  headline = "Ready to build something?",
  description = "Whether it's a single replacement part or a full production run — we'll give you an honest assessment and a fast, free quote.",
  primaryButtonText = "Request a Free Quote",
  primaryButtonHref = "/contact#quote",
  secondaryButtonText = "Call (405) 546-2228",
  secondaryButtonHref = "tel:4055462228",
}: CTASectionProps) {
  return (
    <section className="py-32 pb-24">
      <div className="section-container">
        <div className="max-w-[900px] mx-auto px-16 py-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[28px] text-center relative overflow-hidden">
          {/* Gradient Glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(249, 115, 22, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(12, 140, 233, 0.1) 0%, transparent 50%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-white font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-4">
              {headline}
            </h2>
            <p className="text-[#94a3b8] text-[1.1rem] mx-auto mb-10 max-w-[50ch]">
              {description}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center gap-2.5 px-8 py-[0.9rem] bg-[#f97316] text-white font-semibold text-[0.95rem] rounded-[10px] transition-all duration-250 hover:bg-[#ea580c] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)]"
              >
                {primaryButtonText}
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
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 px-8 py-[0.9rem] bg-transparent text-white font-semibold text-[0.95rem] border-[1.5px] border-white/20 rounded-[10px] transition-all duration-250 hover:border-white/50 hover:bg-white/5 hover:-translate-y-0.5"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
