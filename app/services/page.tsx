import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StickyServiceNav from "@/components/services/StickyServiceNav";
import ServiceSection from "@/components/services/ServiceSection";
import UseCasesSection from "@/components/services/UseCasesSection";
import MaterialsSection from "@/components/services/MaterialsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services — 3D Labs OKC | 3D Printing, Scanning & Design",
  description:
    "End-to-end 3D services including printing, scanning, modeling, and reverse engineering in Oklahoma City. From concept to finished part.",
  openGraph: {
    title: "Services — 3D Labs OKC | 3D Printing, Scanning & Design",
    description:
      "End-to-end 3D services including printing, scanning, modeling, and reverse engineering in Oklahoma City. From concept to finished part.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Everything you need, from"
        titleHighlight="concept"
        titleEnd="to finished part."
        description="We handle every step of the 3D workflow — modeling, printing, scanning, and reverse engineering. One team, one location, no handoffs between vendors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <StickyServiceNav />

      {/* 3D Printing Section */}
      <ServiceSection
        id="3d-printing"
        label="Core Service"
        title="3D Printing"
        description="Our on-demand FDM print farm turns your designs into physical parts — fast. Whether it's a single prototype or a batch of 500, we match the right material, settings, and post-processing to deliver parts that actually perform in the real world."
        specBadges={["PLA", "PETG", "ABS", "TPU", "ASA", "Nylon"]}
        features={[
          {
            title: "No minimum orders.",
            description: "One part or a thousand — same attention to detail.",
          },
          {
            title: "Material-matched.",
            description:
              "We choose the filament based on your part's real-world requirements — not whatever's cheapest.",
          },
          {
            title: "Most orders in 48 hours.",
            description:
              "Our multi-printer farm runs around the clock when demand calls for it.",
          },
          {
            title: "Accepts STL, OBJ, STEP.",
            description:
              "Not sure about file formats? We'll help you sort it out.",
          },
        ]}
        imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&h=800&fit=crop&crop=center"
        imageAlt="Technician operating 3D printers"
        detailIcon="🏭"
        detailTitle="Multi-Printer FDM Farm"
        detailDescription="Running multiple printers for fast batch output"
        ctaText="Get a Print Quote"
        secondaryCta={{ text: "View Materials", href: "#materials" }}
      />

      {/* 3D Modeling Section */}
      <ServiceSection
        id="3d-modeling"
        label="Design Service"
        title="3D Modeling"
        description="Don't have a 3D file? No problem. Our in-house team builds precise digital models from your sketches, drawings, photos, or even just a verbal description. Every model is optimized for FDM printing so there are no surprises when it's time to print."
        features={[
          {
            title: "From sketch to CAD.",
            description:
              "Hand-drawn napkin sketch? Photo of a broken part? We work with whatever you've got.",
          },
          {
            title: "Print-ready output.",
            description:
              "Models are designed with proper wall thickness, tolerances, and supports in mind.",
          },
          {
            title: "Iterate fast.",
            description:
              "See a 3D preview before we print. Request changes — we refine until it's right.",
          },
          {
            title: "Your file, your IP.",
            description:
              "You own the final 3D model. Use it for printing, manufacturing, or further development.",
          },
        ]}
        imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&h=800&fit=crop&crop=center"
        imageAlt="Engineer working on 3D design"
        detailIcon="📐"
        detailTitle="Precision CAD Modeling"
        detailDescription="Optimized for real-world FDM printing"
        ctaText="Start a Design Project"
        reversed
      />

      {/* 3D Scanning Section */}
      <ServiceSection
        id="3d-scanning"
        label="Capture Service"
        title="3D Scanning"
        description="Need a digital twin of a physical object? Our 3D scanning captures real-world geometry with high precision — creating editable 3D models for reproduction, modification, quality inspection, or archival documentation."
        features={[
          {
            title: "High-fidelity capture.",
            description:
              "Precise dimensional accuracy for engineering and manufacturing applications.",
          },
          {
            title: "Editable output.",
            description:
              "We deliver clean, usable mesh files — not just a point cloud you can't work with.",
          },
          {
            title: "Scan-to-print pipeline.",
            description:
              "We can scan an object and print a reproduction in one seamless workflow.",
          },
          {
            title: "On-site available.",
            description:
              "For objects that can't come to us, we can bring the scanner to you.",
          },
        ]}
        imageSrc="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&h=800&fit=crop&crop=center"
        imageAlt="Person performing quality inspection on components"
        detailIcon="📷"
        detailTitle="High-Precision 3D Scanning"
        detailDescription="From physical object to editable digital model"
        ctaText="Request a Scan"
      />

      {/* Reverse Engineering Section */}
      <ServiceSection
        id="reverse-engineering"
        label="Specialty Service"
        title="Reverse Engineering"
        description="When a part is discontinued, out of stock, or simply impossible to source — we reverse-engineer it. We scan the original (even if it's broken), rebuild it in CAD with improvements, and print a drop-in replacement that works as well or better than the original."
        features={[
          {
            title: "Works from broken originals.",
            description: "We can reconstruct from partial or damaged parts.",
          },
          {
            title: "Improved, not just copied.",
            description:
              "We can strengthen weak points, improve fit, and upgrade materials during the rebuild.",
          },
          {
            title: "Full documentation.",
            description:
              "You receive the 3D file so you can reorder anytime without starting over.",
          },
          {
            title: "End-to-end.",
            description:
              "Scan → Model → Print → Deliver. One team handles everything.",
          },
        ]}
        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&h=800&fit=crop&crop=center"
        imageAlt="Team discussing a reverse engineering project"
        detailIcon="🔧"
        detailTitle="Full Reverse Engineering"
        detailDescription="Scan, redesign, and reproduce discontinued parts"
        ctaText="Get a Replacement Part"
        reversed
      />

      <UseCasesSection />
      <MaterialsSection />

      <CTASection
        headline="Not sure which service you need?"
        description="That's what consultations are for. Tell us what you're trying to solve and we'll recommend the right approach — no charge, no pressure."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/contact#quote"
        secondaryButtonText="Call (405) 546-2228"
        secondaryButtonHref="tel:4055462228"
      />
    </>
  );
}
