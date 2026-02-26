import FadeUp from "@/components/FadeUp";

const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    content: (
      <a
        href="https://goo.gl/maps/4goZwH8NeJneP4VNA"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors"
      >
        10802 Quail Plaza Dr, STE 120A
        <br />
        Oklahoma City, OK 73120
      </a>
    ),
  },
  {
    icon: "📞",
    label: "Phone",
    content: (
      <a
        href="tel:4055462228"
        className="text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors"
      >
        (405) 546-2228
      </a>
    ),
  },
  {
    icon: "✉️",
    label: "Email",
    content: (
      <a
        href="mailto:Connect@3dlabsokc.com"
        className="text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors"
      >
        Connect@3dlabsokc.com
      </a>
    ),
  },
  {
    icon: "🌐",
    label: "Online",
    content: (
      <a
        href="https://3dlabsokc.com"
        className="text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors"
      >
        3dlabsokc.com
      </a>
    ),
  },
];

export default function LocationSection() {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <FadeUp>
            <div>
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                Visit Us
              </span>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-[#0f172a] leading-[1.15] mb-6">
                Find us at Quail&nbsp;Plaza
              </h2>
              <p className="text-[#64748b] text-[1.05rem] leading-[1.8] mb-10">
                We&apos;re conveniently located in northwest Oklahoma City, easy
                to access from anywhere in the metro. Walk-ins welcome — but
                scheduling ahead guarantees face time with our team.
              </p>

              <ul className="space-y-0">
                {contactDetails.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 py-3 border-b border-[#e2e8f0] last:border-b-0"
                  >
                    <div className="w-9 h-9 rounded-[10px] bg-white flex items-center justify-center text-[1rem] flex-shrink-0 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[0.88rem] text-[#1e293b]">
                        {item.label}
                      </h4>
                      <div className="text-[0.85rem] text-[#64748b] leading-snug">
                        {item.content}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Map */}
          <FadeUp delay={200}>
            <div className="rounded-[20px] overflow-hidden h-[420px] bg-[#e2e8f0]">
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
        </div>
      </div>
    </section>
  );
}
