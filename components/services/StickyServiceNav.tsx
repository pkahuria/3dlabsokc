"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const serviceLinks = [
  { id: "3d-printing", label: "3D Printing" },
  { id: "3d-modeling", label: "3D Modeling" },
  { id: "3d-scanning", label: "3D Scanning" },
  { id: "reverse-engineering", label: "Reverse Engineering" },
];

export default function StickyServiceNav() {
  const [activeSection, setActiveSection] = useState("3d-printing");

  useEffect(() => {
    const sections = document.querySelectorAll(".service-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[72px] z-50 bg-white border-b border-[#f1f5f9] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="section-container overflow-x-auto">
        <div className="flex items-center gap-0">
          {serviceLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`flex-shrink-0 px-6 py-4 text-[0.88rem] font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                activeSection === link.id
                  ? "text-[#f97316] border-[#f97316]"
                  : "text-[#94a3b8] border-transparent hover:text-[#334155]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
