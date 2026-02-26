import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQGridProps {
  label: string;
  title: string;
  faqs: FAQ[];
}

export default function FAQGrid({ label, title, faqs }: FAQGridProps) {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <FadeUp>
          <SectionHeader label={label} title={title} />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={(index % 2) * 100}>
              <div className="bg-white rounded-2xl p-10 border border-[#f1f5f9] transition-all duration-300 hover:border-[#b9dfff] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5">
                <h3 className="font-serif text-[1.05rem] text-[#0f172a] leading-[1.3] mb-2.5">
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
