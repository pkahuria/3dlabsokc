import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: "400",
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3D Printing Services OKC | 3D Labs OKC",
    template: "%s | 3D Labs OKC",
  },
  description:
    "Professional 3D printing, scanning, and design services in Oklahoma City. Fast turnaround, competitive pricing. Request a free quote today.",
  keywords: [
    "3D printing OKC",
    "3D printing Oklahoma City",
    "3D scanning services",
    "rapid prototyping Oklahoma",
    "3D modeling services",
    "custom 3D printed parts",
    "3D printing near me",
    "prototype manufacturing Oklahoma",
  ],
  authors: [{ name: "3D Labs OKC LLC" }],
  creator: "3D Labs OKC LLC",
  publisher: "3D Labs OKC LLC",
  metadataBase: new URL("https://3dlabsokc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://3dlabsokc.com",
    siteName: "3D Labs OKC",
    title: "3D Printing Services OKC | 3D Labs OKC",
    description:
      "Professional 3D printing, scanning, and design services in Oklahoma City. Fast turnaround, competitive pricing.",
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
    title: "3D Printing Services OKC | 3D Labs OKC",
    description:
      "Professional 3D printing, scanning, and design services in Oklahoma City.",
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
  verification: {
    // Add these after setting up Google Search Console
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Analytics />
        <Header />
        <main className="page-transition">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
