interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  areaServed: string[];
  serviceType: string[];
}

const localBusinessData: LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "3D Labs OKC LLC",
  description:
    "Professional 3D printing, 3D scanning, 3D modeling, and prototyping services in Oklahoma City.",
  url: "https://3dlabsokc.com",
  telephone: "+14055462228",
  email: "connect@3dlabsokc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10802 Quail Plaza Dr STE 120",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    postalCode: "73120",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.5946,
    longitude: -97.5637,
  },
  areaServed: [
    "Oklahoma City",
    "Edmond",
    "Norman",
    "Moore",
    "Yukon",
    "Midwest City",
  ],
  serviceType: [
    "3D Printing",
    "3D Scanning",
    "3D Modeling",
    "Rapid Prototyping",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  );
}
