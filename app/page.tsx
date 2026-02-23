import Link from "next/link";
import { getLatestPosts } from "@/lib/blog";
import BlogCard from "@/components/ui/BlogCard";

export default function Home() {
  const latestPosts = getLatestPosts(3);
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary-dark overflow-hidden">
        {/* Dot Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #0EA5E9 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-slate-800" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Text Content - 60% */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
                Precision 3D Printing & Prototyping in{" "}
                <span className="text-accent">Oklahoma City</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl">
                From concept to physical product. We help businesses and
                individuals bring ideas to life with professional 3D printing,
                scanning, and design services.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-500 hover:border-accent text-white font-medium rounded-full transition-all duration-200 hover:bg-white/5"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder - 40% */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-secondary-accent/20 flex items-center justify-center border border-slate-700">
                <div className="text-center text-slate-400">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-50"
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
                  <p className="text-sm">Hero Image</p>
                  <p className="text-xs opacity-75">3D Printer Farm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center lg:justify-between gap-6 text-sm font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="text-accent">&#x25CF;</span>
                Serving OKC Since 2020
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">&#x25CF;</span>
                500+ Projects Completed
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">&#x25CF;</span>
                FDM 3D Printing
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">&#x25CF;</span>
                Fast Turnaround
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
              Our Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-text-primary">
              What We Do
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "3D Printing",
                description:
                  "Professional FDM 3D printing for prototypes, custom parts, and production runs with fast turnaround.",
                href: "/services/3d-printing",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                ),
              },
              {
                title: "3D Scanning",
                description:
                  "Capture complex objects in high-resolution digital 3D models for reverse engineering and replication.",
                href: "/services/3d-scanning",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                ),
              },
              {
                title: "3D Modeling",
                description:
                  "Custom CAD design and 3D modeling services to turn your ideas into print-ready files.",
                href: "/services/3d-modeling",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                ),
              },
              {
                title: "Training",
                description:
                  "Hands-on 3D printing training sessions for individuals and businesses looking to build in-house capabilities.",
                href: "/services/training",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
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
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      {latestPosts.length > 0 && (
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
                From Our Blog
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-text-primary">
                Latest Insights
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                View All Articles
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary-accent/10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6">
            Ready to bring your idea to life?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free quote for your 3D printing, scanning, or design project.
            Fast response guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Request a Quote
            </Link>
            <span className="text-slate-400">or call</span>
            <a
              href="tel:+14055462228"
              className="text-white font-medium hover:text-accent transition-colors"
            >
              (405) 546-2228
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
