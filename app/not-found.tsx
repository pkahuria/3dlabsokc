import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #0EA5E9 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] sm:text-[200px] font-serif font-bold text-accent/20 leading-none">
            404
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-white mb-4 -mt-16">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or doesn&apos;t exist.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-full transition-all"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-500 hover:border-accent text-white font-medium rounded-full transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm mb-4">
            Or try one of these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="text-slate-300 hover:text-accent transition-colors"
            >
              Services
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/portfolio"
              className="text-slate-300 hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/quote"
              className="text-slate-300 hover:text-accent transition-colors"
            >
              Request Quote
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/about"
              className="text-slate-300 hover:text-accent transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
