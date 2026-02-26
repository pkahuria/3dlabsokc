import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    quote:
      "They scanned our broken bracket, redesigned it stronger, and had it in our hands in two days. Saved us weeks of downtime and thousands in lost productivity.",
    name: "Client Name",
    role: "Contractor, OKC",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "I came in with a rough sketch and an idea. They walked me through the whole process and I left with a prototype I could actually show investors. Incredible service.",
    name: "Client Name",
    role: "Entrepreneur, Norman",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "We order custom jigs and fixtures regularly now. The turnaround is fast, the quality is consistent, and they actually understand manufacturing. Not just a print shop.",
    name: "Client Name",
    role: "Machine Shop Owner, OKC",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="Client Feedback"
            title="What our clients say"
            description="The best proof is the people we've helped. Here's what they have to say."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeUp key={index} delay={index * 100}>
              <div className="bg-white rounded-[18px] p-10 border border-[#f1f5f9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                {/* Stars */}
                <div className="text-[#fb923c] text-[0.95rem] tracking-[2px] mb-4">
                  ★ ★ ★ ★ ★
                </div>

                {/* Quote */}
                <p className="text-[#475569] text-[0.95rem] leading-[1.7] italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover border-2 border-[#ffedd5]"
                  />
                  <div>
                    <div className="font-bold text-[0.88rem] text-[#1e293b]">
                      {testimonial.name}
                    </div>
                    <div className="text-[0.78rem] text-[#94a3b8]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
