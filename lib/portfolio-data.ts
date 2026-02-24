export interface PortfolioProject {
  id: string;
  title: string;
  category: "3D Printing" | "3D Scanning" | "3D Modeling" | "Training";
  description: string;
  imageUrl?: string;
  specs?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "custom-drone-mount",
    title: "Custom Drone Camera Mount",
    category: "3D Printing",
    description:
      "A custom-designed camera mount for a commercial drone, printed in PETG for durability and heat resistance.",
    imageUrl: "/portfolio/custom-drone-mount.jpg",
    specs: ["Material: PETG", "Turnaround: 3 days", "Post-processing: Sanding"],
  },
  {
    id: "vintage-car-part",
    title: "Vintage Car Part Reproduction",
    category: "3D Scanning",
    description:
      "Scanned and reproduced a discontinued interior trim piece for a classic car restoration project.",
    imageUrl: "/portfolio/vintage-car-part.jpg",
    specs: [
      "Original: Scanned",
      "Material: ABS",
      "Quantity: 2 pieces",
    ],
  },
  {
    id: "product-prototype",
    title: "Consumer Product Prototype",
    category: "3D Modeling",
    description:
      "Full CAD design and prototype production for a new consumer electronics enclosure.",
    imageUrl: "/portfolio/product-prototype.jpg",
    specs: [
      "Design: From scratch",
      "Iterations: 3 versions",
      "Final: Production-ready",
    ],
  },
  {
    id: "architectural-model",
    title: "Architectural Scale Model",
    category: "3D Printing",
    description:
      "Detailed scale model of a commercial building for a developer presentation.",
    imageUrl: "/portfolio/architectural-model.jpg",
    specs: [
      "Scale: 1:100",
      "Material: PLA",
      "Finish: Painted",
    ],
  },
  {
    id: "mechanical-assembly",
    title: "Mechanical Assembly Prototype",
    category: "3D Printing",
    description:
      "Multi-part mechanical prototype with moving components for fit and function testing.",
    imageUrl: "/portfolio/mechanical-assembly.jpg",
    specs: [
      "Parts: 12 components",
      "Material: PETG + TPU",
      "Assembly: Tested",
    ],
  },
  {
    id: "art-sculpture",
    title: "Artistic Sculpture Scan",
    category: "3D Scanning",
    description:
      "High-resolution scan of a clay sculpture for digital archiving and reproduction.",
    imageUrl: "/portfolio/art-sculpture.jpg",
    specs: [
      "Resolution: 0.1mm",
      "Output: STL + OBJ",
      "Texture: Captured",
    ],
  },
  {
    id: "custom-enclosure",
    title: "Custom Electronics Enclosure",
    category: "3D Modeling",
    description:
      "Designed a custom enclosure for a Raspberry Pi-based project with ventilation and mounting points.",
    imageUrl: "/portfolio/custom-enclosure.jpg",
    specs: [
      "Fit: Raspberry Pi 4",
      "Features: Vents + mounts",
      "Material: PLA",
    ],
  },
  {
    id: "replacement-gear",
    title: "Industrial Replacement Gear",
    category: "3D Printing",
    description:
      "Reverse-engineered and printed a replacement gear for legacy manufacturing equipment.",
    imageUrl: "/portfolio/replacement-gear.jpg",
    specs: [
      "Material: Nylon",
      "Tolerance: +/- 0.1mm",
      "Application: Industrial",
    ],
  },
  {
    id: "training-workshop",
    title: "Corporate Training Workshop",
    category: "Training",
    description:
      "Full-day hands-on training session for a manufacturing team on 3D printing fundamentals.",
    imageUrl: "/portfolio/training-workshop.jpg",
    specs: [
      "Duration: 8 hours",
      "Participants: 6",
      "Topics: FDM + Slicing",
    ],
  },
];
