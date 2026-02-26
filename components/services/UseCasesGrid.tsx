import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

interface UseCase {
  icon: string;
  title: string;
  description: string;
}

interface UseCasesGridProps {
  label: string;
  title: string;
  description: string;
  useCases: UseCase[];
}

export default function UseCasesGrid({
  label,
  title,
  description,
  useCases,
}: UseCasesGridProps) {
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
            label={label}
            title={title}
            description={description}
            dark
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <FadeUp key={useCase.title} delay={index * 100}>
              <div className="p-10 rounded-[20px] bg-white/[0.04] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.07] hover:border-[rgba(249,115,22,0.3)] hover:-translate-y-1">
                <div className="text-[2rem] mb-4">{useCase.icon}</div>
                <h3 className="font-serif text-white text-[1.15rem] mb-2">
                  {useCase.title}
                </h3>
                <p className="text-[#94a3b8] text-[0.88rem] leading-[1.7]">
                  {useCase.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
