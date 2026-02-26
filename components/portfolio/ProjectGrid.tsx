"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "printing", label: "3D Printing" },
  { id: "scanning", label: "3D Scanning" },
  { id: "reverse", label: "Reverse Engineering" },
  { id: "modeling", label: "3D Modeling" },
  { id: "batch", label: "Batch Production" },
];

const projects = [
  {
    id: 1,
    title: "HVAC Mounting Bracket",
    description:
      "Reproduced a discontinued bracket with improved mounting points. Delivered in 2 days.",
    category: "reverse printing",
    primaryTag: "Reverse Engineering",
    secondaryTag: "PETG",
    type: "Reverse Engineering",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&h=800&fit=crop&crop=center",
    tall: true,
  },
  {
    id: 2,
    title: "Branded Display Stands",
    description:
      "Custom batch of 200 branded product display stands for a local retailer's launch event.",
    category: "batch printing",
    primaryTag: "Batch Production",
    secondaryTag: "PLA",
    type: "Batch Production",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=400&fit=crop&crop=center",
    tall: false,
  },
  {
    id: 3,
    title: "Product Enclosure Prototype",
    description:
      "Three iterations of a custom electronics enclosure, refined from sketch to production-ready design.",
    category: "modeling printing",
    primaryTag: "Prototype",
    secondaryTag: "ABS",
    type: "Modeling + Printing",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop&crop=center",
    tall: false,
  },
  {
    id: 4,
    title: "Dishwasher Rack Clips",
    description:
      "Reproduced discontinued dishwasher tine clips in PETG — heat and water resistant unlike PLA alternatives.",
    category: "scanning reverse",
    primaryTag: "Replacement Part",
    secondaryTag: "PETG",
    type: "Replacement Part",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop&crop=center",
    tall: false,
  },
  {
    id: 5,
    title: "Alignment Jig — Machine Shop",
    description:
      "Custom alignment jig reduced per-part setup time from 20 minutes to 2. Printed in ABS for heat tolerance.",
    category: "printing modeling",
    primaryTag: "Custom Jig",
    secondaryTag: "ABS",
    type: "Custom Tooling",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=800&fit=crop&crop=center",
    tall: true,
  },
  {
    id: 6,
    title: "Legacy Equipment Digitization",
    description:
      "Scanned and modeled 15 legacy components for a manufacturer transitioning to digital archives.",
    category: "scanning",
    primaryTag: "3D Scan",
    secondaryTag: "Documentation",
    type: "3D Scanning",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=400&fit=crop&crop=center",
    tall: false,
  },
  {
    id: 7,
    title: "Cable Management Clips",
    description:
      "Batch of 500 custom cable management clips for a data center installation project.",
    category: "batch printing",
    primaryTag: "Batch Run",
    secondaryTag: "PETG",
    type: "Batch Production",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&h=400&fit=crop&crop=top",
    tall: false,
  },
  {
    id: 8,
    title: "Vintage Appliance Knob Set",
    description:
      "Reverse-engineered and reproduced a full set of oven knobs for a 1970s range no longer supported.",
    category: "reverse printing",
    primaryTag: "Replacement",
    secondaryTag: "ABS",
    type: "Reverse Engineering",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop&crop=center",
    tall: false,
  },
  {
    id: 9,
    title: "Inventor Prototype — Consumer Product",
    description:
      "Helped a local inventor go from hand-drawn sketch to functional prototype across 4 design iterations.",
    category: "modeling printing",
    primaryTag: "Prototype",
    secondaryTag: "PLA + PETG",
    type: "Design + Print",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop&crop=face",
    tall: false,
  },
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section className="py-32 bg-white">
      <div className="section-container">
        <FadeUp>
          <SectionHeader
            label="All Projects"
            title="Browse our portfolio"
            description="Filter by project type to find work similar to what you need."
          />
        </FadeUp>

        {/* Filter Pills */}
        <FadeUp>
          <div className="flex justify-center gap-2 mb-24 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-[1.1rem] py-[0.45rem] rounded-full border-[1.5px] text-[0.82rem] font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-[#0f172a] border-[#0f172a] text-white"
                    : "bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#94a3b8] hover:text-[#334155]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={(index % 3) * 50}>
              <div
                className={`relative rounded-[18px] overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group ${
                  project.tall ? "md:row-span-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={project.tall ? 590 : 280}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    project.tall ? "h-[590px]" : "h-[280px]"
                  }`}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/10 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1.5 flex-wrap mb-2">
                    <span className="px-2.5 py-1 bg-[rgba(249,115,22,0.6)] border border-[rgba(249,115,22,0.7)] rounded-md text-[0.68rem] font-semibold text-white/90 tracking-wide uppercase">
                      {project.primaryTag}
                    </span>
                    <span className="px-2.5 py-1 bg-white/15 border border-white/20 rounded-md text-[0.68rem] font-semibold text-white/85 tracking-wide uppercase">
                      {project.secondaryTag}
                    </span>
                  </div>
                  <h3 className="font-serif text-white text-[1.2rem] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-[0.82rem] leading-[1.5]">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Info Bar (visible by default, hidden on hover) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-[12px] px-6 py-3 flex justify-between items-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2.5">
                  <span className="font-bold text-[0.88rem] text-[#1e293b]">
                    {project.title}
                  </span>
                  <span className="text-[0.75rem] font-semibold text-[#f97316]">
                    {project.type}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
