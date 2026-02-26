import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const useCases = [
  {
    tag: "Manufacturing",
    title: "Custom jigs & fixtures",
    description:
      "Save production hours with custom alignment tools, guides, and workholding solutions.",
    imageSrc:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&h=400&fit=crop&crop=top",
    imageAlt: "Manufacturing environment",
  },
  {
    tag: "Business",
    title: "Branded promotional items",
    description:
      "Custom batch runs of branded products, displays, and unique giveaways for your company.",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=400&fit=crop&crop=center",
    imageAlt: "Business professional",
  },
  {
    tag: "Home & Repair",
    title: "Replacement parts",
    description:
      "Discontinued appliance knobs, broken hardware, obsolete brackets — we reproduce them.",
    imageSrc:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop&crop=center",
    imageAlt: "Home repair",
  },
];

export default function UseCasesSection() {
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
        <FadeUp>
          <SectionHeader
            label="Who We Serve"
            title="Built for businesses and individuals"
            description="From machine shops to homeowners with a broken appliance part — our services solve real problems across industries."
            dark
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <FadeUp key={useCase.title} delay={index * 100}>
              <div className="relative rounded-[20px] overflow-hidden h-[320px] group cursor-default">
                <Image
                  src={useCase.imageSrc}
                  alt={useCase.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/20 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-flex self-start px-2.5 py-1 bg-[#f97316] text-white rounded-md text-[0.7rem] font-bold tracking-[0.06em] uppercase mb-2.5">
                    {useCase.tag}
                  </span>
                  <h3 className="font-serif text-white text-[1.3rem] mb-1.5">
                    {useCase.title}
                  </h3>
                  <p className="text-white/70 text-[0.85rem] leading-[1.5]">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
