import { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogCard from "@/components/ui/BlogCard";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "3D Printing Blog | Tips & Insights",
  description:
    "Expert insights on 3D printing, prototyping, materials, and design from the 3D Labs OKC team.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #0EA5E9 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
            3D Printing <span className="text-accent">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Tips, guides, and insights to help you get the most out of 3D
            printing technology.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-full">
                All Posts
              </span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-white text-text-secondary text-sm font-medium rounded-full border border-border"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-surface flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-serif text-text-primary mb-2">
                Coming Soon
              </h2>
              <p className="text-text-secondary">
                We&apos;re working on some great content. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif text-text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-text-secondary mb-8">
            Want to learn more about 3D printing? Follow us for the latest tips,
            project showcases, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://facebook.com/3dlabsokc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-border rounded-full text-text-primary hover:border-accent transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
            <a
              href="https://instagram.com/3dlabsokc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-border rounded-full text-text-primary hover:border-accent transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to start your project?"
        subtext="Get a free quote for your 3D printing, scanning, or design project."
        primaryCTA={{ text: "Request a Quote", href: "/quote" }}
      />
    </>
  );
}
