import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  label: string;
  title: string;
  titleHighlight?: string; // Italic sky-colored portion
  titleEnd?: string; // Text after the highlight
  description: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHero({
  label,
  title,
  titleHighlight,
  titleEnd,
  description,
  breadcrumbs,
}: PageHeroProps) {
  // Render title with optional highlight
  const renderTitle = () => {
    if (titleHighlight) {
      return (
        <>
          {title}{" "}
          <em className="italic text-[#36a5ff]">{titleHighlight}</em>
          {titleEnd && <>&nbsp;{titleEnd}</>}
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative pt-[calc(72px+8rem)] pb-24 bg-[#0f172a] overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange Radial Glow */}
      <div
        className="absolute -top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-[700px]">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 mb-10 text-[0.82rem] text-[#64748b]"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-[#475569]">→</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#fb923c]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Label */}
          <span className="block text-[#fb923c] text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4">
            {label}
          </span>

          {/* Title */}
          <h1 className="text-white text-[clamp(2.4rem,4.5vw,3.5rem)] font-serif leading-[1.15] mb-6">
            {renderTitle()}
          </h1>

          {/* Description */}
          <p className="text-[#94a3b8] text-[1.15rem] leading-[1.8] max-w-[60ch]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
