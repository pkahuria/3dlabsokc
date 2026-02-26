import Image from "next/image";
import FadeUp from "@/components/FadeUp";

const differentiators = [
  {
    icon: "💪",
    title: "Material matched to the application",
    description:
      "Most shops default to PLA for everything. We select PETG, ABS, TPU, or other materials based on what your part actually needs to withstand — heat, chemicals, impact, or flex.",
  },
  {
    icon: "📐",
    title: "Design is part of the service",
    description:
      "You don't need to show up with a perfect 3D file. A sketch, a photo, a broken sample, or even just a description — we handle the CAD work so you don't have to.",
  },
  {
    icon: "🔧",
    title: "We improve, not just reproduce",
    description:
      "When we reverse-engineer a part, we don't just copy the original flaw for flaw. We reinforce weak points, improve fitment, and upgrade materials for a better result.",
  },
  {
    icon: "🏙️",
    title: "Local and accountable",
    description:
      "We're right here in Oklahoma City. You can visit the shop, talk to the person printing your part, and pick up your order in person. No anonymous overseas fulfillment.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Text Content */}
          <FadeUp>
            <div>
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                What Makes Us Different
              </span>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-[#0f172a] leading-[1.15] mb-6">
                We&apos;re not your average print&nbsp;shop
              </h2>
              <p className="text-[#64748b] text-[1.05rem] leading-[1.8] mb-10">
                The 3D printing industry is full of shops that&apos;ll run any
                file in the cheapest material and call it done. That&apos;s not
                what we do.
              </p>

              <ul className="space-y-0">
                {differentiators.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-6 py-6 border-b border-[#f1f5f9] last:border-b-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#fff7ed] flex items-center justify-center text-[1.3rem] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[0.95rem] text-[#1e293b] mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[0.88rem] text-[#64748b] leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Photo */}
          <FadeUp delay={200}>
            <div className="relative rounded-[20px] overflow-hidden h-full min-h-[500px] group">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop&crop=face"
                alt="Professional ready to help with your project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
