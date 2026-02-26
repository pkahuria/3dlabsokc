import Link from "next/link";

const servicesLinks = [
  { href: "/services/3d-printing", label: "3D Printing" },
  { href: "/services/3d-modeling", label: "3D Modeling" },
  { href: "/services/3d-scanning", label: "3D Scanning" },
  { href: "/services/reverse-engineering", label: "Reverse Engineering" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

const quickLinks = [
  { href: "/contact#quote", label: "Request a Quote" },
  {
    href: "https://instagram.com/3dlabsokc",
    label: "Instagram",
    external: true,
  },
  {
    href: "https://linkedin.com/company/3dlabsokc",
    label: "LinkedIn",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-[#94a3b8] pt-24 pb-6">
      <div className="section-container">
        {/* Gradient Accent Line */}
        <div className="h-[3px] bg-gradient-to-r from-[#f97316] to-[#0c8ce9] rounded-sm mb-24" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-[38px] h-[38px] bg-[#0f172a] rounded-[10px] flex items-center justify-center text-white font-serif text-lg border border-slate-700">
                3D
              </div>
              <div className="font-sans font-bold text-[1.05rem] text-white tracking-[-0.02em]">
                3D Labs <span className="text-[#0c8ce9]">OKC</span>
              </div>
            </Link>
            <p className="text-[0.9rem] leading-[1.7] mb-6 max-w-[300px]">
              Oklahoma City&apos;s trusted partner for 3D printing, scanning, and
              design. Turning ideas into real parts since day one.
            </p>
            <a
              href="tel:4055462228"
              className="flex items-center gap-2 text-[0.88rem] mb-2 hover:text-[#fb923c] transition-colors"
            >
              📞 (405) 546-2228
            </a>
            <a
              href="mailto:Connect@3dlabsokc.com"
              className="flex items-center gap-2 text-[0.88rem] mb-2 hover:text-[#fb923c] transition-colors"
            >
              ✉️ Connect@3dlabsokc.com
            </a>
            <a
              href="https://goo.gl/maps/4goZwH8NeJneP4VNA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.88rem] hover:text-[#fb923c] transition-colors"
            >
              📍 10802 Quail Plaza Dr, STE 120A, OKC 73120
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-sans font-semibold text-[0.85rem] tracking-[0.1em] uppercase mb-6">
              Services
            </h4>
            {servicesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[0.9rem] py-[0.3rem] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-sans font-semibold text-[0.85rem] tracking-[0.1em] uppercase mb-6">
              Company
            </h4>
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[0.9rem] py-[0.3rem] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-sans font-semibold text-[0.85rem] tracking-[0.1em] uppercase mb-6">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block text-[0.9rem] py-[0.3rem] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.82rem]">
          <span>© 2026 3D Labs OKC, LLC. All rights reserved.</span>
          <span>Oklahoma City, Oklahoma</span>
        </div>
      </div>
    </footer>
  );
}
