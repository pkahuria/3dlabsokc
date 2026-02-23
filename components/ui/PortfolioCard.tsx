"use client";

import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

export default function PortfolioCard({
  title,
  category,
  description,
  imageUrl,
  onClick,
}: PortfolioCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-border hover:border-accent/50 transition-all duration-300 text-left w-full"
    >
      {/* Image or Placeholder */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full w-fit mb-2">
          {category}
        </span>
        <h3 className="text-lg font-serif text-white mb-1">{title}</h3>
        <p className="text-sm text-slate-300 line-clamp-2">{description}</p>
      </div>

      {/* Category Tag (always visible) */}
      <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
        <span className="inline-block px-3 py-1 bg-white/90 text-text-primary text-xs font-medium rounded-full">
          {category}
        </span>
      </div>
    </button>
  );
}
