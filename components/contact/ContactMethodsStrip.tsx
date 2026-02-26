import FadeUp from "@/components/FadeUp";

const methods = [
  {
    icon: "📞",
    label: "Call Us",
    value: "(405) 546-2228",
    href: "tel:4055462228",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "Connect@3dlabsokc.com",
    href: "mailto:Connect@3dlabsokc.com",
  },
  {
    icon: "📍",
    label: "Visit Us",
    value: "10802 Quail Plaza Dr, STE 120A, OKC",
    href: "https://goo.gl/maps/4goZwH8NeJneP4VNA",
    external: true,
  },
];

export default function ContactMethodsStrip() {
  return (
    <section className="bg-white py-16 border-b border-[#f1f5f9] -mt-px">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <FadeUp key={index} delay={index * 50}>
              <a
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 px-10 py-6 bg-[#f8fafc] rounded-2xl border border-[#f1f5f9] transition-all duration-300 hover:border-[#fed7aa] hover:bg-[#fff7ed] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="w-[52px] h-[52px] rounded-[14px] bg-white flex items-center justify-center text-[1.4rem] flex-shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  {method.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[0.9rem] text-[#1e293b] mb-0.5">
                    {method.label}
                  </h4>
                  <p className="text-[0.88rem] text-[#f97316] font-semibold">
                    {method.value}
                  </p>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
