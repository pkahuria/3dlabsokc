interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-24 ${className}`}>
      {label && (
        <span
          className={`block text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 ${
            dark ? "text-[#fb923c]" : "text-[#f97316]"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-6 ${
          dark ? "text-white" : "text-[#0f172a]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto text-[1.1rem] max-w-[60ch] ${
            dark ? "text-[#94a3b8]" : "text-[#64748b]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
