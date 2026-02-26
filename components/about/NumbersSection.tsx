import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  {
    value: "500+",
    label: "Parts Delivered",
    detail: "Across prototypes, replacement parts, and batch runs",
    color: "orange",
  },
  {
    value: "48hr",
    label: "Average Turnaround",
    detail: "Most projects designed, printed, and ready in two days",
    color: "blue",
  },
  {
    value: "4.9★",
    label: "Client Rating",
    detail: "Consistent 5-star feedback from businesses and individuals",
    color: "orange",
  },
  {
    value: "100%",
    label: "Free Consultations",
    detail: "Every project starts with honest, no-obligation guidance",
    color: "blue",
  },
];

export default function NumbersSection() {
  return (
    <section className="relative py-32 bg-[#0f172a] overflow-hidden">
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 50%, rgba(249, 115, 22, 0.07) 0%, transparent 50%), radial-gradient(circle at 85% 50%, rgba(12, 140, 233, 0.07) 0%, transparent 50%)",
        }}
      />

      <div className="section-container relative z-10">
        <FadeUp>
          <SectionHeader
            label="By the Numbers"
            title="What we've accomplished so far"
            description="We let our track record speak for itself."
            dark
          />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeUp key={index} delay={index * 100}>
              <div className="text-center p-10 bg-white/[0.04] border border-white/[0.08] rounded-[20px] transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1">
                <div
                  className={`font-serif text-[3rem] leading-none mb-1 ${
                    stat.color === "orange"
                      ? "text-[#f97316]"
                      : "text-[#36a5ff]"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-[0.85rem] font-semibold text-[#94a3b8] tracking-[0.02em]">
                  {stat.label}
                </div>
                <div className="text-[0.78rem] text-[#64748b] mt-1 leading-snug">
                  {stat.detail}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
