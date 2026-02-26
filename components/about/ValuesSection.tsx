import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const values = [
  {
    icon: "🎯",
    iconBg: "orange",
    title: "Function over flash",
    description:
      "We focus on parts that actually work in the real world. Proper material selection, correct tolerances, and designs optimized for performance — not just appearance.",
  },
  {
    icon: "⚡",
    iconBg: "blue",
    title: "Speed with integrity",
    description:
      "Fast turnaround doesn't mean cutting corners. Most orders ship in days because we've built efficient systems — not because we're rushing your part out the door.",
  },
  {
    icon: "🤝",
    iconBg: "orange",
    title: "Honest guidance",
    description:
      "If 3D printing isn't the right fit for your project, we'll tell you. We'd rather earn your trust than your money on a job that won't deliver the result you need.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="What Drives Us"
            title="Our values in action"
            description="These aren't slogans on a wall. They're how we make decisions every day — from material selection to client communication."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <FadeUp key={index} delay={index * 100}>
              <div className="relative p-10 bg-white rounded-[20px] border border-[#f1f5f9] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] group">
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c8ce9] to-[#fb923c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-[1.5rem] mb-6 ${
                    value.iconBg === "orange" ? "bg-[#fff7ed]" : "bg-[#f0f7ff]"
                  }`}
                >
                  {value.icon}
                </div>

                <h3 className="font-serif text-[1.25rem] text-[#0f172a] mb-2.5">
                  {value.title}
                </h3>
                <p className="text-[#64748b] text-[0.92rem] leading-[1.7]">
                  {value.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
