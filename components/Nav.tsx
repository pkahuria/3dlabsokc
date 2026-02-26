"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#process", label: "How It Works" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/3d-printing", label: "3D Printing" },
  { href: "/services/3d-modeling", label: "3D Modeling" },
  { href: "/services/3d-scanning", label: "3D Scanning" },
  { href: "/services/reverse-engineering", label: "Reverse Engineering" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isServicePage = pathname.startsWith("/services");

  return (
    <>
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#f97316] focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 h-[72px] z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-[20px] border-b border-slate-200/60 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-white/95 backdrop-blur-[20px] border-b border-slate-200/60"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-[38px] h-[38px] bg-slate-900 rounded-[10px] flex items-center justify-center text-white font-serif text-lg transition-transform duration-200 group-hover:scale-105">
              3D
            </div>
            <div className="font-sans font-bold text-[1.05rem] text-slate-900 tracking-[-0.02em]">
              3D Labs <span className="text-[#0c8ce9]">OKC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10 list-none">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`text-[0.9rem] font-medium transition-colors duration-200 relative py-2 ${
                    isActive(link.href)
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#f97316] rounded-sm transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                {/* Services Dropdown */}
                {link.href === "/services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 p-2 min-w-[200px]">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block px-4 py-2.5 rounded-lg text-[0.88rem] font-medium transition-colors ${
                            pathname === service.href
                              ? "bg-[#fff7ed] text-[#f97316]"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                      <div className="border-t border-slate-100 mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 rounded-lg text-[0.88rem] font-medium text-[#0c8ce9] hover:bg-[#f0f7ff]"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-[1.4rem] py-[0.6rem] bg-[#f97316] text-white rounded-lg font-semibold text-[0.85rem] transition-all duration-250 hover:bg-[#ea580c] hover:-translate-y-px hover:shadow-[0_4px_15px_rgba(249,115,22,0.3)] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2"
              >
                Get a Free Quote
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-700 transition-transform duration-200"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed top-[72px] left-0 right-0 bottom-0 bg-white z-[95] lg:hidden transition-all duration-300 ease-out overflow-y-auto ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="p-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.href === "/services" ? (
                <>
                  {/* Services with submenu */}
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full flex items-center justify-between text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                      isServicePage
                        ? "text-slate-900 bg-slate-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                    aria-expanded={isServicesOpen}
                  >
                    <span>Services</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* Services Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isServicesOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block py-2.5 px-4 rounded-lg text-[0.95rem] transition-colors ${
                            pathname === service.href
                              ? "text-[#f97316] bg-[#fff7ed] font-medium"
                              : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block py-2.5 px-4 rounded-lg text-[0.95rem] text-[#0c8ce9] font-medium hover:bg-[#f0f7ff]"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`block text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "text-slate-900 bg-slate-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact#quote"
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#f97316] text-white rounded-xl font-semibold text-base transition-all hover:bg-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2"
          >
            Get a Free Quote
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          {/* Contact Info in Mobile Menu */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <div className="space-y-1">
              <a
                href="tel:4055462228"
                className="flex items-center gap-3 text-slate-600 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-[#f97316] transition-colors"
              >
                <span className="text-lg">📞</span>
                <span className="font-medium">(405) 546-2228</span>
              </a>
              <a
                href="mailto:Connect@3dlabsokc.com"
                className="flex items-center gap-3 text-slate-600 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-[#f97316] transition-colors"
              >
                <span className="text-lg">✉️</span>
                <span className="font-medium">Connect@3dlabsokc.com</span>
              </a>
              <a
                href="https://goo.gl/maps/4goZwH8NeJneP4VNA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-[#f97316] transition-colors"
              >
                <span className="text-lg">📍</span>
                <span className="font-medium">Quail Plaza, OKC 73120</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-6 p-4 bg-slate-50 rounded-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Hours
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-700">Mon–Fri:</span> 9am – 5pm
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-700">Sat:</span> By appointment
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
