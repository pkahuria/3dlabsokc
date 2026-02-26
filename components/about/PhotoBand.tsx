import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function PhotoBand() {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&h=500&fit=crop&crop=center"
        alt="Team working together in modern workspace"
        fill
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/65 to-[#0f172a]/25 flex items-center justify-center">
        <FadeUp>
          <div className="text-center text-white max-w-[650px] px-6">
            <div className="w-[60px] h-[3px] bg-[#f97316] rounded-sm mx-auto mb-6" />
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-4">
              Small team, big capabilities
            </h2>
            <p className="text-white/80 text-[1.1rem] max-w-[550px] mx-auto">
              We keep our team lean so every client gets direct access to the
              people doing the actual work — no layers, no runarounds.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
