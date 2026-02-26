import Image from "next/image";
import FadeUp from "@/components/FadeUp";

const expectations = [
  {
    text: (
      <>
        <strong>Response within hours</strong> — not days. We typically reply
        same-day.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Honest assessment</strong> — we&apos;ll tell you if 3D printing
        is the right approach.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Clear pricing</strong> — no hidden fees, no surprise charges.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Material recommendation</strong> — we&apos;ll suggest the right
        filament for your use case.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>No obligation</strong> — asking is free, and there&apos;s zero
        pressure.
      </>
    ),
  },
];

export default function QuoteSidebar() {
  return (
    <div className="space-y-6">
      {/* Photo Card */}
      <FadeUp>
        <div className="relative rounded-[20px] overflow-hidden h-[220px]">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=300&fit=crop&crop=face"
            alt="Friendly team member ready to help"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="font-bold text-[0.95rem]">
              Real people, real conversations
            </h4>
            <p className="text-[0.78rem] text-white/80">
              You&apos;ll hear back from someone who actually does the work.
            </p>
          </div>
        </div>
      </FadeUp>

      {/* What to Expect */}
      <FadeUp delay={100}>
        <div className="bg-white rounded-[20px] p-10 border border-[#f1f5f9]">
          <h3 className="font-serif text-[1.2rem] text-[#0f172a] mb-4">
            What to expect
          </h3>
          <ul className="space-y-0">
            {expectations.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 py-2.5"
              >
                <div className="w-6 h-6 rounded-[7px] bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0 text-[0.75rem] mt-0.5">
                  ✓
                </div>
                <p className="text-[0.88rem] text-[#475569] leading-snug">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>

      {/* Hours */}
      <FadeUp delay={150}>
        <div className="bg-white rounded-[20px] p-10 border border-[#f1f5f9]">
          <h3 className="font-serif text-[1.2rem] text-[#0f172a] mb-4">
            Hours
          </h3>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.88rem]">
            <span className="font-semibold text-[#334155]">
              Monday – Friday
            </span>
            <span className="text-[#64748b]">9:00 AM – 5:00 PM</span>
            <span className="font-semibold text-[#334155]">Saturday</span>
            <span className="text-[#64748b]">By appointment</span>
            <span className="font-semibold text-[#334155]">Sunday</span>
            <span className="text-[#94a3b8] italic">Closed</span>
          </div>
        </div>
      </FadeUp>

      {/* Don't have a file? */}
      <FadeUp delay={200}>
        <div className="bg-white rounded-[20px] p-10 border border-[#f1f5f9]">
          <h3 className="font-serif text-[1.2rem] text-[#0f172a] mb-4">
            Don&apos;t have a 3D file?
          </h3>
          <p className="text-[0.9rem] text-[#64748b] leading-[1.7]">
            No problem — most of our clients don&apos;t. Just describe what you
            need or upload a photo, sketch, or drawing. We&apos;ll take it from
            there.
          </p>
        </div>
      </FadeUp>
    </div>
  );
}
