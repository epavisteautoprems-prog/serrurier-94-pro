import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { StickyTopBar } from "@/components/layout/StickyTopBar";
import { PriceBand } from "@/components/layout/PriceBand";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { ClientEnhancements } from "@/components/analytics/ClientEnhancements";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
} as const;

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Serrurier Val-de-Marne (94) | Intervention 20 min",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/icon", apple: "/apple-icon" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "fr_FR",
    url: SITE_CONFIG.url,
    title: "Serrurier Val-de-Marne (94) | Intervention 20 min",
    description: SITE_CONFIG.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_CONFIG.name} – serrurier 94` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serrurier Val-de-Marne (94) | Intervention 20 min",
    description: SITE_CONFIG.description,
    images: ["/twitter-image"],
  },
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-slate-900">
        <JsonLd data={localBusinessJsonLd({ pageUrl: SITE_CONFIG.url })} />
        <JsonLd data={websiteJsonLd({ siteUrl: SITE_CONFIG.url })} />
        <JsonLd data={organizationJsonLd({ siteUrl: SITE_CONFIG.url })} />
        <StickyTopBar />
        <PriceBand />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <ClientEnhancements />
      </body>
    </html>
  );
}
