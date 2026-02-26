import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const reasons = [
  {
    number: "01",
    title: "Right material, every time",
    description:
      "Most print shops default to PLA. We match the material to the job — PETG for chemical resistance, ABS for heat tolerance, and beyond. Your parts actually perform.",
  },
  {
    number: "02",
    title: "Days, not weeks",
    description:
      "No minimum order quantities, no six-week lead times. Most projects are designed, printed, and ready for pickup within days — not months.",
  },
  {
    number: "03",
    title: "Design included",
    description:
      "Don't have a 3D file? No problem. Bring us a sketch, a broken part, or just an idea. We handle the CAD work so you can focus on your business.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why"
      className="relative py-32 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Gradient Backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(12, 140, 233, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="section-container relative z-10">
        <FadeUp>
          <SectionHeader
            label="Why 3D Labs OKC"
            title="Built for real-world results"
            description="We're not a hobby shop. We solve manufacturing problems for Oklahoma City businesses with engineering-grade materials and fast turnaround."
            dark
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <FadeUp key={reason.number} delay={index * 100}>
              <div className="p-10 rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[10px] transition-all duration-300 hover:bg-white/[0.07] hover:border-[rgba(249,115,22,0.3)] hover:-translate-y-1">
                <div className="font-serif text-[3rem] text-[#f97316] leading-none mb-4 opacity-60">
                  {reason.number}
                </div>
                <h3 className="font-serif text-white text-[clamp(1.4rem,2vw,1.75rem)] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#94a3b8] text-[0.92rem] leading-[1.7]">
                  {reason.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
