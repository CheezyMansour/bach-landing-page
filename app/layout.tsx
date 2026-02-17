import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BACH Contracting | Quality Construction & Interior Design",
  description:
    "BACH is a licensed and insured contracting company specializing in renovations, new construction, roofing, electrical, plumbing, and painting. Get a free estimate today.",
  keywords: [
    "construction",
    "contracting",
    "interior design",
    "renovations",
    "roofing",
    "electrical",
    "plumbing",
    "painting",
  ],
  // Open Graph tags - controls how links look when shared on social media
  openGraph: {
    title: "BACH Contracting | Quality Construction & Interior Design",
    description:
      "Licensed and insured contracting company specializing in renovations, new construction, roofing, electrical, plumbing, and painting.",
    type: "website",
    locale: "en_US",
    siteName: "BACH Contracting",
    images: [
      {
        url: "/hero-image-luxury.avif", // The image shown in link previews
        width: 1200,
        height: 630,
        alt: "BACH Contracting - Luxury Interior Design",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
