import FadeUp from "@/components/FadeUp";
import QuoteForm from "./QuoteForm";
import QuoteSidebar from "./QuoteSidebar";

export default function QuoteSection() {
  return (
    <section id="quote" className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-24 items-start">
          {/* Form */}
          <FadeUp>
            <div className="bg-white rounded-3xl p-16 border border-[#f1f5f9] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-2">
                Free Quote
              </span>
              <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] text-[#0f172a] leading-[1.15] mb-2">
                Request a quote
              </h2>
              <p className="text-[#64748b] text-[0.95rem] mb-10">
                Fill out the form below and we&apos;ll get back to you within
                one business day — usually much sooner.
              </p>

              <QuoteForm />
            </div>
          </FadeUp>

          {/* Sidebar */}
          <QuoteSidebar />
        </div>
      </div>
    </section>
  );
}
