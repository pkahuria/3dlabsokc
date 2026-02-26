const trustItems = [
  { icon: "🏭", text: "On-Demand Print Farm" },
  { icon: "📐", text: "In-House Design Team" },
  { icon: "⚡", text: "Fast Local Turnaround" },
  { icon: "🎯", text: "Free Consultations" },
];

export default function TrustBar() {
  return (
    <section className="py-16 border-t border-b border-[#f1f5f9] bg-[#f8fafc]">
      <div className="section-container">
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-[#64748b]">
              <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-lg">
                {item.icon}
              </div>
              <span className="text-[0.9rem] font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
