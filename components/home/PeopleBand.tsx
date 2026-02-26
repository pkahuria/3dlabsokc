import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function PeopleBand() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&h=500&fit=crop&crop=center"
        alt="Engineers collaborating in a modern workspace"
        fill
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/70 to-[#0f172a]/30 flex items-center justify-center">
        <FadeUp>
          <div className="text-center text-white max-w-[600px] px-6">
            <div className="w-[60px] h-[3px] bg-[#f97316] rounded mx-auto mb-6" />
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.15] mb-4">
              People-first manufacturing
            </h2>
            <p className="text-white/80 text-[1.1rem] mx-auto">
              Behind every printed part is a real conversation. We listen to
              your challenge, design the right solution, and deliver results you
              can hold in your hand.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
