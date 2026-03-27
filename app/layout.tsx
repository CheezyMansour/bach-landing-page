import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Playfair Display — editorial serif for hero headline
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
});

// Inter — clean sans-serif for body text, nav, subtext
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bach-contracting.com"),
  title: "BACH | Construction Engineering Across Nigeria & West Africa",
  description:
    "Batch Project Limited — multi-disciplinary construction engineering firm delivering civil, structural, electrical, and solar projects end-to-end across Nigeria and West Africa.",
  keywords: [
    "construction engineering",
    "civil engineering Nigeria",
    "building construction",
    "electrical services",
    "solar energy",
    "estate development",
    "project management",
    "Abuja contractor",
  ],
  openGraph: {
    title: "BACH | Construction Engineering Across Nigeria & West Africa",
    description:
      "Multi-disciplinary construction engineering — civil, structural, electrical, and solar projects delivered end-to-end.",
    type: "website",
    locale: "en_US",
    siteName: "BACH",
    images: [
      {
        url: "/hero-image2.jpg",
        width: 1200,
        height: 630,
        alt: "BACH — Engineering. Construction. Delivered.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
