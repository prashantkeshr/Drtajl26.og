import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Space_Grotesk,
  Noto_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EcosystemBanner from "@/components/layout/EcosystemBanner";
import CursorGlow from "@/components/ui/CursorGlow";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteDescription =
  "DHURTA is a privacy-first technology group from India — makers of Dhurta Browser (the zero-telemetry open-source web browser), Dhurta Connect (serverless end-to-end encrypted P2P chat, calls & file sharing), and Dhurta Setu (a curated web index). Built on Trust, Technology & Culture — Dhurta is Sanskrit for clever.";

export const metadata: Metadata = {
  title: {
    default: "DHURTA — Privacy-First Technology Group | Browser, Connect & Setu",
    template: "%s | DHURTA",
  },
  description: siteDescription,
  metadataBase: new URL("https://dhurta.org"),
  keywords: [
    "Dhurta",
    "Dhurta Browser",
    "privacy browser",
    "zero telemetry browser",
    "open source browser",
    "Dhurta Connect",
    "end-to-end encrypted chat",
    "P2P messaging",
    "serverless chat",
    "Dhurta Setu",
    "curated web index",
    "privacy-first software",
    "Dhurta group",
    "digital transformation",
    "Sanskrit clever",
  ],
  alternates: { canonical: "https://dhurta.org" },
  verification: {
    other: { "msvalidate.01": "E50EBC1ACA98B59E247E744077DA0EF8" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DHURTA — Privacy-First Technology Group",
    description: siteDescription,
    url: "https://dhurta.org",
    siteName: "DHURTA",
    type: "website",
    locale: "en_US",
    images: [{ url: "/dhurta-logo.png", width: 384, height: 384, alt: "Dhurta emblem" }],
  },
  twitter: {
    card: "summary",
    title: "DHURTA — Privacy-First Technology Group",
    description:
      "Makers of Dhurta Browser (zero telemetry), Dhurta Connect (E2E-encrypted P2P chat) and Dhurta Setu. Trust · Technology · Culture.",
    images: ["/dhurta-logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DHURTA",
  alternateName: "The Dhurta Group",
  url: "https://dhurta.org",
  logo: "https://dhurta.org/dhurta-logo.png",
  description: siteDescription,
  email: "contact@dhurta.org",
  slogan: "The Clever Choice — Trust, Technology, Culture",
  sameAs: ["https://dhurta.com", "https://dhurta.in", "https://github.com/prashantkeshr/drtajl26.n"],
  brand: [
    {
      "@type": "Brand",
      name: "Dhurta Browser",
      description:
        "Flagship open-source, privacy-first web browser with zero telemetry.",
      url: "https://github.com/prashantkeshr/drtajl26.n",
    },
    {
      "@type": "Brand",
      name: "Dhurta Connect",
      description:
        "Zero-server, end-to-end encrypted peer-to-peer chat, calls and file sharing.",
    },
    {
      "@type": "Brand",
      name: "Dhurta Setu",
      description: "A hand-curated web index — an information bridge to the useful internet.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${notoSans.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Arabic:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&family=Noto+Sans+Thai:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy text-white antialiased overflow-x-hidden">
        <CursorGlow />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <EcosystemBanner />
        <Navbar />
        <main className="flex-1 pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
