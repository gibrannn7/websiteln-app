import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const fontOutfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontGeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "websiteln | Premium Digital Solutions & Automation Platform",
  description:
    "Jasa pembuatan website premium, otomatisasi proses bisnis Python enterprise, integrasi kecerdasan buatan (RAG/Chatbot), serta langganan pemeliharaan elit bulanan.",
  openGraph: {
    title: "websiteln | Premium Digital Solutions & Automation Platform",
    description:
      "Jasa pembuatan website premium, otomatisasi proses bisnis Python enterprise, integrasi kecerdasan buatan (RAG/Chatbot), serta langganan pemeliharaan elit bulanan.",
    url: "https://websiteln.com",
    siteName: "websiteln",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "websiteln",
  "image": "https://websiteln.com/logo.png",
  "priceRange": "$$$",
  "telephone": "+6281774952006",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kota Serang",
    "addressLocality": "Serang",
    "addressRegion": "Banten",
    "addressCountry": "ID",
  },
  "areaServed": "Indonesia",
  "description":
    "Layanan rekayasa perangkat lunak instan, modernisasi sistem legacy, otomasi Python & AI, serta pemeliharaan elite bulanan.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "lowPrice": "2500000",
    "highPrice": "22500000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fontOutfit.variable} ${fontGeistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
