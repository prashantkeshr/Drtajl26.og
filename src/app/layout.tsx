import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Space_Grotesk,
  Noto_Sans,
  Noto_Sans_Devanagari,
  Noto_Sans_Bengali,
  Noto_Sans_Arabic,
  Noto_Sans_SC,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Sans_Thai,
  Noto_Sans_Tamil,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "700"],
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["400", "700"],
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
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
  sameAs: ["https://dhurta.com", "https://github.com/prashantkeshr/drtajl26.n"],
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
      className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${notoSans.variable} ${notoDevanagari.variable} ${notoBengali.variable} ${notoArabic.variable} ${notoSC.variable} ${notoJP.variable} ${notoKR.variable} ${notoThai.variable} ${notoTamil.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-navy text-white antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
