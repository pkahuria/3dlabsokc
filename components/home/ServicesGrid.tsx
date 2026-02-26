import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[26px] h-[26px]"
      >
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5" />
        <path d="M12 12v9" />
        <path d="M12 12L4 7.5" />
      </svg>
    ),
    title: "3D Modeling",
    description:
      "We build precise digital models from your sketches, drawings, or ideas — ready for printing or visualization.",
    href: "/services/3d-modeling",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[26px] h-[26px]"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 6v12" />
        <path d="M2 12h20" />
        <path d="M6 6v12" />
        <path d="M18 6v12" />
      </svg>
    ),
    title: "3D Printing",
    description:
      "Fast, reliable FDM printing in PLA, PETG, ABS, and more. From single prototypes to batch production runs.",
    href: "/services/3d-printing",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[26px] h-[26px]"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4" />
        <path d="M12 19v4" />
        <path d="M1 12h4" />
        <path d="M19 12h4" />
        <path d="M4.22 4.22l2.83 2.83" />
        <path d="M16.95 16.95l2.83 2.83" />
        <path d="M4.22 19.78l2.83-2.83" />
        <path d="M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "3D Scanning",
    description:
      "Capture real-world objects as precise digital models for reproduction, modification, or archival.",
    href: "/services/3d-scanning",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[26px] h-[26px]"
      >
        <path d="M4 20h16" />
        <path d="M4 20V10l4-4" />
        <path d="M20 20V10l-4-4" />
        <path d="M8 6h8" />
        <path d="M12 6v14" />
        <circle cx="12" cy="13" r="2" />
      </svg>
    ),
    title: "Reverse Engineering",
    description:
      "Discontinued or hard-to-source parts? We scan, model, and reproduce components that are no longer available.",
    href: "/services/reverse-engineering",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="What We Do"
            title="End-to-end 3D services"
            description="Whether you need a concept modeled, a part printed, or an object reverse-engineered — we handle the entire workflow under one roof."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 100}>
              <Link href={service.href} className="block group">
                <div className="relative p-10 rounded-[20px] bg-white border border-[#f1f5f9] transition-all duration-400 overflow-hidden hover:border-[#b9dfff] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(12,140,233,0.08)]">
                  {/* Gradient Top Border (hidden by default) */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c8ce9] to-[#fb923c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-[14px] bg-[#f0f7ff] flex items-center justify-center mb-6 text-[#0c8ce9] transition-all duration-300 group-hover:bg-[#0c8ce9] group-hover:text-white group-hover:scale-105">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[1.3rem] text-[#0f172a] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748b] text-[0.92rem] leading-[1.7] mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-[#f97316] transition-all duration-200 group-hover:gap-3">
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
