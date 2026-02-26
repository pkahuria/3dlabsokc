import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const materials = [
  {
    name: "PLA",
    fullName: "Polylactic Acid",
    icon: "🎯",
    description:
      "Ideal for prototypes, display models, and visual projects. Excellent surface finish at low cost.",
    properties: ["Prototyping", "Low cost", "Biodegradable"],
    colorClass: "pla",
    bgColor: "bg-[#f0f7ff]",
    accentColor: "bg-[#36a5ff]",
  },
  {
    name: "PETG",
    fullName: "Polyethylene Terephthalate Glycol",
    icon: "💪",
    description:
      "Our go-to for functional parts. Strong, slightly flexible, excellent chemical and moisture resistance.",
    properties: ["Functional parts", "Chemical resistant", "Durable"],
    colorClass: "petg",
    bgColor: "bg-[#fff7ed]",
    accentColor: "bg-[#f97316]",
  },
  {
    name: "ABS",
    fullName: "Acrylonitrile Butadiene Styrene",
    icon: "🔥",
    description:
      "High heat tolerance and impact strength. Perfect for automotive, enclosures, and temperature exposure.",
    properties: ["Heat resistant", "Impact tough", "Automotive"],
    colorClass: "abs",
    bgColor: "bg-[#fef2f2]",
    accentColor: "bg-[#ef4444]",
  },
  {
    name: "TPU",
    fullName: "Thermoplastic Polyurethane",
    icon: "🌀",
    description:
      "Flexible and rubber-like. Ideal for gaskets, seals, vibration dampeners, and parts that need to bend.",
    properties: ["Flexible", "Shock absorbing", "Seals"],
    colorClass: "tpu",
    bgColor: "bg-[#f5f3ff]",
    accentColor: "bg-[#8b5cf6]",
  },
  {
    name: "ASA",
    fullName: "Acrylonitrile Styrene Acrylate",
    icon: "☀️",
    description:
      "UV-resistant alternative to ABS. Great for outdoor applications that see direct sunlight and weather.",
    properties: ["UV stable", "Outdoor use", "Weather resistant"],
    colorClass: "asa",
    bgColor: "bg-[#ecfdf5]",
    accentColor: "bg-[#10b981]",
  },
  {
    name: "Nylon",
    fullName: "Polyamide",
    icon: "⚙️",
    description:
      "High wear resistance and self-lubricating. Excellent for gears, bearings, and high-friction applications.",
    properties: ["Wear resistant", "Self-lubricating", "Mechanical"],
    colorClass: "nylon",
    bgColor: "bg-[#f8fafc]",
    accentColor: "bg-[#475569]",
  },
];

export default function PrintingMaterialsGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="Materials We Print"
            title="The right filament for the job"
            description="Most shops default to PLA for everything. We choose the material based on what your part actually needs to do."
          />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <FadeUp key={material.name} delay={(index % 3) * 100}>
              <div className="relative p-10 rounded-[20px] border border-[#f1f5f9] bg-white text-center transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] group">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] rounded-b-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${material.accentColor}`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-[14px] ${material.bgColor} flex items-center justify-center mx-auto mb-6 text-[1.4rem]`}
                >
                  {material.icon}
                </div>

                {/* Name */}
                <h3 className="font-serif text-[1.2rem] text-[#0f172a] mb-0.5">
                  {material.name}
                </h3>
                <div className="text-[0.75rem] text-[#94a3b8] font-medium mb-4">
                  {material.fullName}
                </div>

                {/* Description */}
                <p className="text-[0.85rem] text-[#64748b] leading-[1.6] mb-4">
                  {material.description}
                </p>

                {/* Properties */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {material.properties.map((prop) => (
                    <span
                      key={prop}
                      className="px-2.5 py-1 bg-[#f8fafc] rounded-md text-[0.7rem] font-semibold text-[#64748b]"
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
