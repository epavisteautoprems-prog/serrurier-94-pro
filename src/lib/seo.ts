import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  canonical?: string;
  noindex?: boolean;
  /** Mots-clés ciblés (pages locales, guides) — utile pour certains moteurs / partages */
  keywords?: readonly string[];
};

function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function buildMetadata(page: SeoPage): Metadata {
  const url = absoluteUrl(page.canonical ?? page.path);
  const title = page.title.includes(SITE_CONFIG.name)
    ? page.title
    : `${page.title} | ${SITE_CONFIG.name}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title,
    description: page.description,
    ...(page.keywords?.length ? { keywords: [...page.keywords] } : {}),
    alternates: { canonical: url },
    robots: page.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_CONFIG.name,
      title,
      description: page.description,
      locale: "fr_FR",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_CONFIG.name} – serrurier 94` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: ["/twitter-image"],
    },
  };
}

export function serviceMeta(opts: {
  slug: string;
  title: string;
  description: string;
}): SeoPage {
  return {
    title: opts.title,
    description: opts.description,
    path: `/${opts.slug}`,
  };
}

export function villeMeta(opts: {
  ville: string;
  cp: string;
  slug: string;
  description: string;
}): SeoPage {
  return {
    title: `Serrurier ${opts.ville} (${opts.cp})`,
    description: opts.description,
    path: `/serrurier-${opts.slug}`,
  };
}

