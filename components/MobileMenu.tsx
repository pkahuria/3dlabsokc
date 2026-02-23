"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

interface Service {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  services: Service[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  services,
}: MobileMenuProps) {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-primary-dark/50 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-xl font-serif text-primary-dark">
            3D Labs <span className="text-accent">OKC</span>
          </span>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                      className="flex items-center justify-between w-full py-3 text-lg text-text-primary hover:text-accent transition-colors"
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isServicesExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Services Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isServicesExpanded ? "max-h-64" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 pb-2 space-y-1">
                        <li>
                          <Link
                            href="/services"
                            onClick={onClose}
                            className="block py-2 text-text-secondary hover:text-accent transition-colors"
                          >
                            All Services
                          </Link>
                        </li>
                        {services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.href}
                              onClick={onClose}
                              className="block py-2 text-text-secondary hover:text-accent transition-colors"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 text-lg text-text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-surface">
          <Link
            href="/quote"
            onClick={onClose}
            className="flex items-center justify-center w-full px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-full transition-all duration-200"
          >
            Request a Quote
          </Link>
          <div className="mt-4 text-center">
            <a
              href="tel:+14055462228"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              (405) 546-2228
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
