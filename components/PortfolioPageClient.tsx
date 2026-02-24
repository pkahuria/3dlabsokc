"use client";

import { useState } from "react";
import { portfolioProjects, PortfolioProject } from "@/lib/portfolio-data";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

const categories = [
  "All",
  "3D Printing",
  "3D Scanning",
  "3D Modeling",
  "Training",
] as const;

type Category = (typeof categories)[number];

function ProjectModal({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text-primary transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="text-center text-slate-400">
            <svg
              className="w-16 h-16 mx-auto mb-2 opacity-50"
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
            <p className="text-sm">Project Image</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4">
            {project.category}
          </span>
          <h2 className="text-2xl font-serif text-text-primary mb-4">
            {project.title}
          </h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            {project.description}
          </p>

          {project.specs && (
            <div>
              <h3 className="text-sm font-medium text-text-primary mb-3">
                Project Details
              </h3>
              <ul className="space-y-2">
                {project.specs.map((spec, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-600 to-sky-700" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #0EA5E9 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Browse our completed projects and see the quality and variety of
            work we deliver for our clients.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-white text-text-secondary hover:text-accent border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-border hover:border-accent/50 transition-all duration-300 text-left"
              >
                {/* Image Placeholder */}
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

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full w-fit mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-serif text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Category Tag (always visible) */}
                <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-white/90 text-text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Have a project in mind?"
        subtext="Let's discuss how we can help bring your idea to life with the same quality you see here."
        primaryCTA={{ text: "Request a Quote", href: "/quote" }}
      />

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
