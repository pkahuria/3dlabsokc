import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Tell us what you need",
    description:
      "Submit a quote request with your file, sketch, or description. It's free — no commitment.",
  },
  {
    number: "2",
    title: "We design it",
    description:
      "Our team creates or refines your 3D model, optimized for printing and real-world performance.",
  },
  {
    number: "3",
    title: "We print it",
    description:
      "Your part is printed on our FDM farm with the right material, layer height, and infill for the job.",
  },
  {
    number: "4",
    title: "Pick up or ship",
    description:
      "Grab it from our Quail Plaza location or we ship it to you. Most orders ready in days.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-white">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="How It Works"
            title="From idea to object in four steps"
            description="We keep it simple. Here's what working with us looks like."
          />
        </FadeUp>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0">
          {/* Connecting Gradient Line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-0.5"
            style={{
              background:
                "linear-gradient(90deg, #b9dfff, #fdba74, #b9dfff)",
            }}
          />

          {steps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 100}>
              <div className="text-center relative px-4 group">
                {/* Step Number Circle */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#b9dfff] flex items-center justify-center mx-auto mb-6 font-serif text-[1.5rem] text-[#0c8ce9] relative z-10 transition-all duration-300 group-hover:bg-[#f97316] group-hover:text-white group-hover:border-[#f97316] group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.25)]">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="font-serif text-[1.15rem] text-[#0f172a] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748b] text-[0.88rem] mx-auto max-w-[220px]">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
