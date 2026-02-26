import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import PeopleBand from "@/components/home/PeopleBand";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/CTASection";

// LocalBusiness structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://3dlabsokc.com",
  name: "3D Labs OKC",
  description:
    "Professional 3D printing, scanning, modeling, and reverse engineering services for businesses and individuals in Oklahoma City.",
  url: "https://3dlabsokc.com",
  telephone: "+1-405-546-2228",
  email: "Connect@3dlabsokc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10802 Quail Plaza Dr, STE 120A",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    postalCode: "73120",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.58,
    longitude: -97.57,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  image: "https://3dlabsokc.com/og-image.jpg",
  sameAs: [
    "https://instagram.com/3dlabsokc",
    "https://linkedin.com/company/3dlabsokc",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "3D Printing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Printing",
          description:
            "FDM 3D printing in PLA, PETG, ABS, TPU, and other materials",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Scanning",
          description:
            "Professional 3D scanning for reverse engineering and documentation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Modeling",
          description: "Custom CAD design and 3D modeling services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reverse Engineering",
          description:
            "Recreate discontinued or damaged parts with improvements",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <PeopleBand />
      <WhyUsSection />
      <ProcessSection />
      <ShowcaseSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
