interface SectionHeadingProps {
  label?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  heading,
  subtext,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {label && (
        <p
          className={`font-medium text-sm uppercase tracking-wider mb-2 ${
            light ? "text-sky-300" : "text-accent"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-serif ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-slate-300" : "text-text-secondary"
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
