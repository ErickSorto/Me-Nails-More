import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3002";

  return rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
}

const siteUrl = new URL(getSiteUrl());

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Me Nails & More | Pink Luxury Nail Studio",
  description:
    "A polished pink nail salon experience for manicures, pedicures, gel extensions, and custom nail art.",
  openGraph: {
    title: "Me Nails & More | Pink Luxury Nail Studio",
    description:
      "Brentwood nail studio for manicures, pedicures, Gel-X, lashes, custom nail art, and walk-ins.",
    siteName: "Me Nails & More",
    type: "website",
    url: "/",
    images: [
      {
        url: "/social/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Me Nails & More social preview with logo, nail art, and model showing pink nails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Me Nails & More | Pink Luxury Nail Studio",
    description:
      "Brentwood nail studio for manicures, pedicures, Gel-X, lashes, custom nail art, and walk-ins.",
    images: ["/social/twitter-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
