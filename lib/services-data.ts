export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  whatItIs: string;
  howItWorks: string;
  applications: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceData> = {
  "3d-printing": {
    slug: "3d-printing",
    title: "3D Printing Services",
    shortTitle: "3D Printing",
    metaTitle: "3D Printing Services in Oklahoma City",
    metaDescription:
      "Professional FDM 3D printing services in OKC. Custom parts, prototypes, and production runs with fast turnaround and competitive pricing.",
    heroDescription:
      "Professional FDM 3D printing for prototypes, custom parts, and production runs. We bring your designs to life with precision and speed.",
    whatItIs:
      "3D printing, also known as additive manufacturing, creates three-dimensional objects by building them layer by layer from digital files. Our FDM (Fused Deposition Modeling) printers use industrial-grade materials to produce durable, functional parts that meet your exact specifications.",
    howItWorks:
      "The process starts with a 3D model file. Our team reviews the file for printability, optimizes print settings for your specific requirements, and then prints your parts using the most appropriate material. After printing, we perform quality checks and any necessary post-processing before delivery.",
    applications: [
      {
        title: "Prototyping",
        description:
          "Quickly test and iterate on product designs before committing to expensive tooling or manufacturing processes.",
      },
      {
        title: "Custom Parts",
        description:
          "Create one-of-a-kind parts, replacement components, or specialized tools that aren't available off-the-shelf.",
      },
      {
        title: "Small Production Runs",
        description:
          "Produce small batches of parts cost-effectively without the overhead of traditional manufacturing setup.",
      },
      {
        title: "Architectural Models",
        description:
          "Build detailed scale models of buildings, landscapes, and urban planning projects for presentations.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Submit Your Design",
        description:
          "Send us your 3D file (STL, OBJ, STEP, or 3MF) or describe your project. We'll review it and provide a quote.",
      },
      {
        step: 2,
        title: "Review & Optimize",
        description:
          "Our team checks your file for printability and optimizes settings for the best results with your chosen material.",
      },
      {
        step: 3,
        title: "Print & Quality Check",
        description:
          "We print your parts on our industrial FDM printers, then inspect each piece for quality and accuracy.",
      },
      {
        step: 4,
        title: "Deliver",
        description:
          "Pick up your finished parts at our OKC location or have them shipped directly to you.",
      },
    ],
    specs: [
      { label: "Technology", value: "FDM (Fused Deposition Modeling)" },
      { label: "Build Volume", value: "Up to 300 x 300 x 400 mm" },
      { label: "Layer Height", value: "0.1mm - 0.3mm" },
      { label: "Materials", value: "PLA, PETG, ABS, TPU, ASA, Nylon, CF" },
      { label: "Tolerance", value: "+/- 0.2mm typical" },
      { label: "Turnaround", value: "24 hours - 2 weeks" },
    ],
    faqs: [
      {
        question: "What file formats do you accept?",
        answer:
          "We accept STL, OBJ, STEP, 3MF, and most other common 3D file formats. If you're unsure about your file, send it to us and we'll let you know if it's compatible.",
      },
      {
        question: "How much does 3D printing cost?",
        answer:
          "Pricing depends on the size, material, complexity, and quantity of your parts. We provide free quotes for all projects. Most small to medium parts range from $20-$100.",
      },
      {
        question: "What's the strongest material you offer?",
        answer:
          "For maximum strength, we recommend PETG or ABS for general applications, or Nylon and carbon fiber composites for high-stress parts. We'll help you choose the right material for your specific needs.",
      },
      {
        question: "Can you print in color?",
        answer:
          "We can print in a variety of solid colors depending on filament availability. For multi-color prints or specific color matching, contact us to discuss options.",
      },
      {
        question: "Do you offer post-processing?",
        answer:
          "Yes! We offer support removal, sanding, painting, and assembly services. Let us know what finish you need when requesting a quote.",
      },
    ],
  },

  "3d-scanning": {
    slug: "3d-scanning",
    title: "3D Scanning Services",
    shortTitle: "3D Scanning",
    metaTitle: "3D Scanning Services OKC | Reverse Engineering",
    metaDescription:
      "Professional 3D scanning and reverse engineering in Oklahoma City. Capture complex objects in high-resolution digital 3D models.",
    heroDescription:
      "Capture complex objects in high-resolution digital 3D models. Perfect for reverse engineering, quality inspection, and digital archiving.",
    whatItIs:
      "3D scanning uses advanced optical technology to capture the precise geometry of physical objects and convert them into digital 3D models. The resulting files can be used for reverse engineering, quality inspection, replication, or digital archiving.",
    howItWorks:
      "Our scanning process captures millions of data points from your object's surface using structured light technology. This point cloud data is then processed into a clean, usable 3D mesh that can be exported in various formats for CAD work, 3D printing, or visualization.",
    applications: [
      {
        title: "Reverse Engineering",
        description:
          "Recreate parts when original drawings or CAD files are unavailable. Perfect for legacy equipment or discontinued parts.",
      },
      {
        title: "Quality Inspection",
        description:
          "Compare manufactured parts against CAD models to identify deviations and ensure quality standards are met.",
      },
      {
        title: "Digital Archiving",
        description:
          "Preserve artifacts, art, or important objects as detailed digital files for documentation or future reproduction.",
      },
      {
        title: "Custom Fitting",
        description:
          "Scan existing objects to design parts that fit perfectly, like custom cases, mounts, or enclosures.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description:
          "Tell us about your project and what you need from the scan. We'll determine the best approach for your object.",
      },
      {
        step: 2,
        title: "Scanning",
        description:
          "We scan your object from multiple angles to capture complete surface geometry with high accuracy.",
      },
      {
        step: 3,
        title: "Processing",
        description:
          "Raw scan data is cleaned, aligned, and converted into a usable 3D mesh or solid model.",
      },
      {
        step: 4,
        title: "Delivery",
        description:
          "Receive your 3D files in your preferred format (STL, OBJ, STEP, etc.) ready for your intended use.",
      },
    ],
    specs: [
      { label: "Technology", value: "Structured Light Scanning" },
      { label: "Accuracy", value: "Up to 0.05mm" },
      { label: "Object Size", value: "1cm to 2m" },
      { label: "Output Formats", value: "STL, OBJ, STEP, PLY, IGES" },
      { label: "Texture Capture", value: "Available on select scans" },
      { label: "Turnaround", value: "1-5 business days" },
    ],
    faqs: [
      {
        question: "What objects can be scanned?",
        answer:
          "Most solid objects can be scanned, from small parts to items up to 2 meters in size. Shiny, transparent, or very dark objects may require preparation with a temporary spray coating.",
      },
      {
        question: "How accurate is 3D scanning?",
        answer:
          "Our scanning technology achieves accuracy up to 0.05mm, which is sufficient for most reverse engineering and quality inspection applications.",
      },
      {
        question: "Can you scan and then 3D print the result?",
        answer:
          "Absolutely! This is a common workflow. We can scan your object, clean up the model, and print an exact replica or a modified version.",
      },
      {
        question: "Do I need to bring the object to you?",
        answer:
          "Most scanning is done at our facility. For very large objects or on-site requirements, we may be able to arrange mobile scanning. Contact us to discuss.",
      },
    ],
  },

  "3d-modeling": {
    slug: "3d-modeling",
    title: "3D Modeling & CAD Design Services",
    shortTitle: "3D Modeling",
    metaTitle: "3D Modeling & CAD Design Services",
    metaDescription:
      "Custom 3D modeling and CAD design services in Oklahoma City. We turn your ideas into print-ready 3D files.",
    heroDescription:
      "Turn your ideas into reality with professional 3D modeling and CAD design. From sketches to print-ready files, we create the models you need.",
    whatItIs:
      "3D modeling is the process of creating a mathematical representation of a three-dimensional object using specialized software. Whether you have a rough sketch, a photo, or just an idea in your head, we can create a precise 3D model ready for printing, visualization, or manufacturing.",
    howItWorks:
      "Our designers work with you to understand your vision and requirements. We then create a 3D model using professional CAD software, ensuring it's optimized for your intended use. Throughout the process, we share previews and make revisions until you're completely satisfied.",
    applications: [
      {
        title: "Product Design",
        description:
          "Bring new product concepts to life with detailed 3D models ready for prototyping and manufacturing.",
      },
      {
        title: "Print Preparation",
        description:
          "Convert 2D drawings, photos, or concepts into print-ready 3D files optimized for 3D printing.",
      },
      {
        title: "File Repair",
        description:
          "Fix broken or unprintable 3D files, fill holes, repair meshes, and optimize models for printing.",
      },
      {
        title: "Visualization",
        description:
          "Create detailed 3D models for presentations, marketing materials, or concept validation.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Share Your Vision",
        description:
          "Provide sketches, photos, measurements, or a description of what you want to create.",
      },
      {
        step: 2,
        title: "Initial Design",
        description:
          "We create a preliminary 3D model and share screenshots or renders for your review.",
      },
      {
        step: 3,
        title: "Revisions",
        description:
          "We refine the model based on your feedback until it meets your exact specifications.",
      },
      {
        step: 4,
        title: "Final Delivery",
        description:
          "Receive your finished 3D model in print-ready or CAD-native formats as needed.",
      },
    ],
    specs: [
      { label: "Software", value: "Fusion 360, SolidWorks, Blender" },
      { label: "Output Formats", value: "STL, STEP, OBJ, 3MF, native CAD" },
      { label: "Design Types", value: "Mechanical, Organic, Artistic" },
      { label: "Revisions", value: "Included until satisfied" },
      { label: "Rush Available", value: "Yes, with priority pricing" },
      { label: "Turnaround", value: "3-10 business days typical" },
    ],
    faqs: [
      {
        question: "I don't have a 3D file. Can you create one from a sketch?",
        answer:
          "Yes! We regularly create 3D models from hand sketches, photos, verbal descriptions, or reference images. The more detail you can provide, the faster we can create your model.",
      },
      {
        question: "Can you modify an existing 3D file?",
        answer:
          "Absolutely. We can modify, repair, resize, or completely redesign existing 3D files. Send us your file and let us know what changes you need.",
      },
      {
        question: "How much does 3D modeling cost?",
        answer:
          "Modeling costs depend on complexity and detail level. Simple parts might be $50-100, while complex mechanical designs could be $200-500+. We provide detailed quotes before starting work.",
      },
      {
        question: "Will the model be ready for 3D printing?",
        answer:
          "Yes, we optimize all models for 3D printing by default. This includes ensuring proper wall thickness, support considerations, and export in print-ready formats.",
      },
    ],
  },

  training: {
    slug: "training",
    title: "3D Printing Training",
    shortTitle: "Training",
    metaTitle: "3D Printing Training & Education | 3D Labs OKC",
    metaDescription:
      "Hands-on 3D printing training in Oklahoma City. Learn to operate printers, prepare files, and build in-house 3D printing capabilities.",
    heroDescription:
      "Hands-on training to help you or your team master 3D printing. From beginners to advanced users, we build the skills you need.",
    whatItIs:
      "Our training programs teach individuals and teams how to effectively use 3D printing technology. Whether you're just getting started or looking to optimize your existing workflow, we provide practical, hands-on education tailored to your goals.",
    howItWorks:
      "We assess your current knowledge and goals, then design a training program that fits your needs. Sessions combine hands-on practice with conceptual learning, ensuring you leave with practical skills you can apply immediately.",
    applications: [
      {
        title: "Business Implementation",
        description:
          "Help your team adopt 3D printing for prototyping, manufacturing, or product development.",
      },
      {
        title: "Beginner Introduction",
        description:
          "Learn the fundamentals of 3D printing, from file preparation to successful prints.",
      },
      {
        title: "Skill Development",
        description:
          "Advance your existing skills with training on advanced materials, multi-part assemblies, or complex designs.",
      },
      {
        title: "Equipment Training",
        description:
          "Learn to operate, maintain, and troubleshoot specific 3D printer models.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We discuss your goals, current experience, and what you want to achieve with 3D printing.",
      },
      {
        step: 2,
        title: "Curriculum Design",
        description:
          "We create a custom training plan focused on the skills and knowledge most relevant to you.",
      },
      {
        step: 3,
        title: "Hands-On Training",
        description:
          "Learn by doing with guided, practical sessions using real equipment and projects.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "After training, we remain available to answer questions and help troubleshoot issues.",
      },
    ],
    specs: [
      { label: "Format", value: "In-person or Remote" },
      { label: "Group Size", value: "1-10 participants" },
      { label: "Duration", value: "2 hours - Full day" },
      { label: "Location", value: "Our facility or your site" },
      { label: "Materials", value: "Included" },
      { label: "Certificate", value: "Available upon request" },
    ],
    faqs: [
      {
        question: "Do I need any prior experience?",
        answer:
          "No prior experience is necessary. We customize training to your skill level, whether you're a complete beginner or looking to advance existing skills.",
      },
      {
        question: "Can you train my whole team?",
        answer:
          "Yes! We offer group training for teams up to 10 people. Larger groups can be accommodated with multiple sessions.",
      },
      {
        question: "Do you provide training on specific printer models?",
        answer:
          "We can provide training on most FDM printer brands. If you have specific equipment, let us know and we'll tailor the training accordingly.",
      },
      {
        question: "Is remote training available?",
        answer:
          "Yes, we offer virtual training sessions for topics that don't require hands-on equipment access, such as file preparation, slicing software, and design principles.",
      },
    ],
  },
};
