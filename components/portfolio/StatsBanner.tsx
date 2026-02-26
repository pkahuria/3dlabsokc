const stats = [
  { value: "500+", label: "Parts Delivered", color: "orange" },
  { value: "48hr", label: "Avg. Turnaround", color: "blue" },
  { value: "4.9★", label: "Client Rating", color: "orange" },
  { value: "12+", label: "Industries Served", color: "blue" },
];

export default function StatsBanner() {
  return (
    <section className="bg-white border-b border-[#f1f5f9] py-10 -mt-px">
      <div className="section-container">
        <div className="flex justify-center items-center gap-24 flex-wrap">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-24">
              <div className="text-center">
                <div
                  className={`font-serif text-[2.2rem] leading-none mb-0.5 ${
                    stat.color === "orange"
                      ? "text-[#f97316]"
                      : "text-[#0c8ce9]"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-[0.8rem] font-semibold text-[#94a3b8] tracking-wide">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-[#e2e8f0]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
