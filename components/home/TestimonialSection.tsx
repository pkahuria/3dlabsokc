import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function TestimonialSection() {
  return (
    <section className="py-32 bg-white">
      <div className="section-container">
        <FadeUp>
          <div className="max-w-[800px] mx-auto text-center">
            {/* Avatar */}
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Client photo"
              width={72}
              height={72}
              className="rounded-full object-cover mx-auto mb-6 border-[3px] border-[#fed7aa]"
            />

            {/* Stars */}
            <div className="text-[#fb923c] text-[1.1rem] tracking-[2px] mb-2">
              ★ ★ ★ ★ ★
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-[clamp(1.3rem,2.5vw,1.8rem)] text-[#1e293b] leading-[1.5] mb-6">
              <span className="text-[#fb923c]">&ldquo;</span>
              We needed a discontinued bracket reproduced fast. 3D Labs OKC
              scanned the original, redesigned it for better strength, and had
              it printed in two days. Saved us weeks of downtime.
              <span className="text-[#fb923c]">&rdquo;</span>
            </blockquote>

            {/* Author */}
            <div className="font-semibold text-[#334155] text-[0.95rem]">
              Client Name
            </div>
            <div className="text-[#94a3b8] text-[0.85rem]">
              Oklahoma City Business Owner
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
