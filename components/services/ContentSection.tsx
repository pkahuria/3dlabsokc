import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

interface Feature {
  title: string;
  description: string;
}

interface ContentSectionProps {
  label: string;
  title: string;
  paragraphs: string[];
  features?: Feature[];
  specBadges?: string[];
  imageSrc: string;
  imageAlt: string;
  detailIcon: string;
  detailTitle: string;
  detailDescription: string;
  ctaText?: string;
  ctaHref?: string;
  reversed?: boolean;
  altBackground?: boolean;
}

export default function ContentSection({
  label,
  title,
  paragraphs,
  features,
  specBadges,
  imageSrc,
  imageAlt,
  detailIcon,
  detailTitle,
  detailDescription,
  ctaText,
  ctaHref = "/contact#quote",
  reversed = false,
  altBackground = false,
}: ContentSectionProps) {
  return (
    <section className={`py-32 ${altBackground ? "bg-[#f8fafc]" : "bg-white"}`}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text Content */}
          <FadeUp>
            <div className={reversed ? "lg:order-2" : ""}>
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                {label}
              </span>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-[#0f172a] mb-6">
                {title}
              </h2>

              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#64748b] text-[1.05rem] leading-[1.8] mb-6"
                >
                  {paragraph}
                </p>
              ))}

              {/* Spec Badges */}
              {specBadges && specBadges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {specBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-full text-[0.78rem] font-semibold text-[#475569] transition-all duration-200 hover:border-[#7cc4ff] hover:bg-[#f0f7ff] hover:text-[#006ec7]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36a5ff]" />
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Feature List */}
              {features && features.length > 0 && (
                <ul className="mb-8">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 py-2.5 border-b border-[#f1f5f9] last:border-b-0"
                    >
                      <span className="flex-shrink-0 w-[22px] h-[22px] rounded-md bg-[#f0f7ff] flex items-center justify-center mt-0.5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0c8ce9"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-[13px] h-[13px]"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-[0.95rem] text-[#475569]">
                        <strong className="text-[#0f172a]">
                          {feature.title}
                        </strong>{" "}
                        {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              {ctaText && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2.5 px-8 py-[0.9rem] bg-[#f97316] text-white font-semibold text-[0.95rem] rounded-[10px] transition-all duration-250 hover:bg-[#ea580c] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] group"
                >
                  {ctaText}
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
              )}
            </div>
          </FadeUp>

          {/* Image */}
          <FadeUp delay={200}>
            <div
              className={`relative rounded-[20px] overflow-hidden h-[440px] group ${
                reversed ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 to-transparent pointer-events-none" />

              {/* Detail Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-[12px] rounded-[14px] p-4 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#fff7ed] flex items-center justify-center flex-shrink-0 text-xl">
                  {detailIcon}
                </div>
                <div>
                  <h4 className="font-bold text-[0.88rem] text-[#0f172a] leading-tight">
                    {detailTitle}
                  </h4>
                  <p className="text-[0.78rem] text-[#64748b] mt-0.5">
                    {detailDescription}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
