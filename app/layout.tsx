import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3D Labs OKC — 3D Printing, Scanning & Design Services",
    template: "%s — 3D Labs OKC",
  },
  description:
    "From a rough sketch to a finished product — 3D Labs OKC delivers fast, precise FDM printing, scanning, and design services for businesses and individuals across Oklahoma.",
  keywords: [
    "3D printing OKC",
    "3D printing Oklahoma City",
    "3D scanning services",
    "rapid prototyping Oklahoma",
    "3D modeling services",
    "custom 3D printed parts",
    "3D printing near me",
    "FDM printing OKC",
    "reverse engineering Oklahoma City",
  ],
  authors: [{ name: "3D Labs OKC, LLC" }],
  creator: "3D Labs OKC, LLC",
  publisher: "3D Labs OKC, LLC",
  metadataBase: new URL("https://3dlabsokc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://3dlabsokc.com",
    siteName: "3D Labs OKC",
    title: "3D Labs OKC — 3D Printing, Scanning & Design Services",
    description:
      "From a rough sketch to a finished product — 3D Labs OKC delivers fast, precise FDM printing, scanning, and design services for businesses and individuals across Oklahoma.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3D Labs OKC - Professional 3D Printing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Labs OKC — 3D Printing, Scanning & Design Services",
    description:
      "Fast, precise FDM printing, scanning, and design services for businesses and individuals across Oklahoma.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
