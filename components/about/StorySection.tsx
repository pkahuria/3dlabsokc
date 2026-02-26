import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function StorySection() {
  return (
    <section className="py-32 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Photo */}
          <FadeUp>
            <div className="relative rounded-[20px] overflow-hidden h-[540px] group">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&h=750&fit=crop&crop=center"
                alt="Workshop with 3D printers running"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 to-transparent" />

              {/* Location Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-[12px] rounded-[14px] p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fff7ed] flex items-center justify-center text-[1.4rem] flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-[0.9rem] text-[#1e293b] leading-tight">
                    Quail Plaza, Oklahoma City
                  </h4>
                  <p className="text-[0.78rem] text-[#64748b] leading-snug mt-0.5">
                    Serving OKC and surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Text Content */}
          <FadeUp delay={100}>
            <div>
              <span className="block text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#f97316] mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-[#0f172a] leading-[1.15] mb-6">
                Built to solve problems, not sell&nbsp;gadgets
              </h2>
              <p className="text-[#64748b] text-[1.15rem] leading-[1.8] mb-6">
                3D Labs OKC was founded on a simple observation: most people who
                need 3D printing aren&apos;t hobbyists — they&apos;re business
                owners, contractors, and individuals with a real problem that
                needs a real solution.
              </p>
              <p className="text-[#475569] text-[1rem] leading-[1.8] mb-6">
                A contractor with a discontinued bracket that&apos;s holding up
                a job. A manufacturer who needs a custom jig by Friday. A
                homeowner whose appliance part hasn&apos;t been made in 20
                years. These are the problems we exist to solve.
              </p>
              <p className="text-[#475569] text-[1rem] leading-[1.8] mb-8">
                We&apos;re not a print-on-demand shop running whatever file you
                upload in whatever material is cheapest. We&apos;re a service
                company that happens to use 3D printers. That means we consult
                with you on the right approach, choose the right material for
                the job, and make sure the end result actually works.
              </p>

              {/* Highlight Quote */}
              <div className="p-6 bg-[#fff7ed] border-l-[3px] border-[#fb923c] rounded-r-xl">
                <p className="text-[1.05rem] text-[#334155] italic leading-[1.7]">
                  &ldquo;We don&apos;t just print parts. We solve problems — and
                  the 3D printer is the tool we use to do it.&rdquo;
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
