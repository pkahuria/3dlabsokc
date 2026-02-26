import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

export default function MapSection() {
  return (
    <section className="py-32 bg-white">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="Our Location"
            title="Come see us at Quail Plaza"
            description="We're in northwest Oklahoma City, easy to access from anywhere in the metro. Walk-ins welcome — scheduling ahead is even better."
          />
        </FadeUp>

        <FadeUp delay={100}>
          <div className="rounded-3xl overflow-hidden h-[400px] border border-[#e2e8f0] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.2!2d-97.57!3d35.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM0JzQ4LjAiTiA5N8KwMzQnMTIuMCJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="3D Labs OKC Location"
            />
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <div className="flex justify-center items-center gap-16 mt-10 flex-wrap">
            <div className="flex items-center gap-2 text-[0.9rem] text-[#475569]">
              📍{" "}
              <a
                href="https://goo.gl/maps/4goZwH8NeJneP4VNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors"
              >
                10802 Quail Plaza Dr, STE 120A, Oklahoma City, OK 73120
              </a>
            </div>
            <div className="flex items-center gap-2 text-[0.9rem] text-[#475569]">
              📞{" "}
              <a
                href="tel:4055462228"
                className="text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors"
              >
                (405) 546-2228
              </a>
            </div>
            <div className="flex items-center gap-2 text-[0.9rem] text-[#475569]">
              ✉️{" "}
              <a
                href="mailto:Connect@3dlabsokc.com"
                className="text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors"
              >
                Connect@3dlabsokc.com
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
