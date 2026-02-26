import Image from "next/image";
import FadeUp from "@/components/FadeUp";

const steps = [
  {
    number: "01",
    title: "You share your need",
    description: "File, sketch, or just a description",
  },
  {
    number: "02",
    title: "We design & quote",
    description: "Free consultation, no obligation",
  },
  {
    number: "03",
    title: "We print it",
    description: "Right material, right settings",
  },
  {
    number: "04",
    title: "You pick up or we ship",
    description: "Most orders ready in days",
  },
];

export default function ProcessTeaser() {
  return (
    <section className="relative py-32 bg-[#0f172a] overflow-hidden">
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(12, 140, 233, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <FadeUp>
            <div>
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                How We Work
              </span>
              <h2 className="font-serif text-white text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-6">
                Your project follows a proven process
              </h2>
              <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8] mb-10">
                Every project in our portfolio started the same way — a
                conversation. Here&apos;s the simple path from idea to finished
                part.
              </p>

              {/* Mini Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="p-6 bg-white/[0.04] border border-white/[0.08] rounded-[14px] transition-all duration-300 hover:bg-white/[0.07] hover:border-[rgba(249,115,22,0.3)] hover:-translate-y-0.5"
                  >
                    <div className="font-serif text-[1.5rem] text-[#f97316] opacity-60 mb-1">
                      {step.number}
                    </div>
                    <h4 className="font-bold text-white text-[0.9rem] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[#94a3b8] text-[0.8rem] leading-[1.5]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Photo */}
          <FadeUp delay={200}>
            <div className="relative rounded-[20px] overflow-hidden h-[440px]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&crop=face"
                alt="Friendly professional ready to help"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/30 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
