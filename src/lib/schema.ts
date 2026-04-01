import { SERVICES, SITE_CONFIG, type ServiceItem } from "./constants";

export type WithContext<T> = T & { "@context": "https://schema.org" };

export type JsonLd =
  | Record<string, unknown>
  | readonly Record<string, unknown>[];

export function localBusinessJsonLd(args?: {
  pageUrl?: string;
  areaName?: string;
  cityName?: string;
  postalCode?: string;
}): WithContext<Record<string, unknown>> {
  const areaName = args?.areaName ?? "Val-de-Marne";

  const offers = SERVICES.slice(0, 2).map((s) => offerForService(s));
  const url = args?.pageUrl ?? SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url.replace(/\/+$/, "")}/#business`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url,
    telephone: SITE_CONFIG.phone,
    priceRange: "€€",
    openingHours: ["Mo-Su 00:00-24:00"],
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaName,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: areaName,
      postalCode: args?.postalCode ?? "94",
      addressCountry: "FR",
      addressLocality: args?.cityName,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating.toFixed(1),
      reviewCount: String(SITE_CONFIG.reviewCount),
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Serrurerie 94",
      itemListElement: offers,
    },
  };
}

function offerForService(service: ServiceItem): Record<string, unknown> {
  const price = extractNumericPrice(service.prix);
  return {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.name },
    ...(price ? { price, priceCurrency: "EUR" } : {}),
  };
}

function extractNumericPrice(prix: string): string | null {
  const m = prix.match(/(\d+)(?:[.,](\d+))?/);
  if (!m) return null;
  return m[2] ? `${m[1]}.${m[2]}` : m[1];
}

export function websiteJsonLd(args?: { siteUrl?: string }) {
  const siteUrl = (args?.siteUrl ?? SITE_CONFIG.url).replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: SITE_CONFIG.name,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  } as const;
}

export function organizationJsonLd(args?: { siteUrl?: string }) {
  const base = (args?.siteUrl ?? SITE_CONFIG.url).replace(/\/+$/, "");
  const logoUrl = `${base}${SITE_CONFIG.logoPath}`;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: SITE_CONFIG.name,
    url: base,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    sameAs: SITE_CONFIG.sameAs.length ? [...SITE_CONFIG.sameAs] : undefined,
  } as const;
}

export function serviceJsonLd(args: {
  pageUrl: string;
  name: string;
  description: string;
  areaName?: string;
}): WithContext<Record<string, unknown>> {
  const areaName = args.areaName ?? "Val-de-Marne";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${args.pageUrl.replace(/\/+$/, "")}#service`,
    name: args.name,
    description: args.description,
    areaServed: { "@type": "AdministrativeArea", name: areaName },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.url.replace(/\/+$/, "")}/#business`,
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      url: SITE_CONFIG.url.replace(/\/+$/, ""),
    },
  };
}

export function breadcrumbJsonLd(items: readonly { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function faqPageJsonLd(
  qa: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  } as const;
}

export function articleJsonLd(args: {
  pageUrl: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  keywords?: readonly string[];
}) {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": args.pageUrl },
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { "@type": "Person", name: args.authorName },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: base,
    },
    keywords: args.keywords?.length ? args.keywords.join(", ") : undefined,
  } as const;
}

