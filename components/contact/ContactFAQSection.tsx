import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    question: "How much does 3D printing cost?",
    answer:
      "It depends on size, material, and complexity. A small functional part might be $15–$50; a larger multi-iteration prototype project might be $200–$1,000. We always provide a clear quote before starting.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept STL, OBJ, and STEP files. Don't have a 3D file? That's fine — send us a sketch, photo, or description and we'll handle the modeling.",
  },
  {
    question: "How fast can I get my part?",
    answer:
      "Most orders are designed, printed, and ready within 2–3 days. Rush orders are available for time-sensitive projects — just let us know when you reach out.",
  },
  {
    question: "Do you ship or is it pickup only?",
    answer:
      "Both! You can pick up from our Quail Plaza location or we'll ship anywhere in the US. Local pickup is free.",
  },
  {
    question: "What materials do you print with?",
    answer:
      "We print in PLA, PETG, ABS, TPU, ASA, Nylon, and more. We recommend the right material based on your part's real-world requirements — not just whatever's cheapest.",
  },
  {
    question: "Is there a minimum order?",
    answer:
      "Nope. We'll print one part or a thousand with the same attention to quality. No minimums, no setup fees.",
  },
];

export default function ContactFAQSection() {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="Common Questions"
            title="Before you reach out"
            description="Quick answers to the questions we hear most often."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={(index % 2) * 100}>
              <div className="bg-white rounded-2xl p-10 border border-[#f1f5f9] transition-all duration-300 hover:border-[#b9dfff] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-[3px]">
                <h3 className="font-serif text-[1.05rem] text-[#0f172a] mb-2.5 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-[0.88rem] text-[#64748b] leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
