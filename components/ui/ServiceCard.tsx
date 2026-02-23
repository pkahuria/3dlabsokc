import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group p-6 bg-white rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div className="w-12 h-12 mb-4 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-serif text-text-primary mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center mt-4 text-sm font-medium text-accent">
        Learn More
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}
