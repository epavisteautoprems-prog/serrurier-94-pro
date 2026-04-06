import type { MetadataRoute } from "next";
import { SITE_CONFIG, VILLES_94 } from "@/lib/constants";
import { getAllPostSlugs } from "@/lib/blog";

const STATIC_ROUTES: readonly { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/urgence-serrurier", priority: 0.98 },
  { path: "/ouverture-porte", priority: 0.95 },
  { path: "/changement-serrure", priority: 0.95 },
  { path: "/blindage-porte", priority: 0.95 },
  { path: "/rideau-metallique", priority: 0.95 },
  { path: "/depannage-vitrier", priority: 0.95 },
  { path: "/volet-roulant", priority: 0.9 },
  { path: "/tarifs", priority: 0.8 },
  { path: "/faq", priority: 0.8 },
  { path: "/contact", priority: 0.75 },
  { path: "/a-propos", priority: 0.6 },
  { path: "/mentions-legales", priority: 0.2 },
  { path: "/blog", priority: 0.7 },
  { path: "/serrurier-pas-cher-94", priority: 0.88 },
  { path: "/serrurier-urgence-94", priority: 0.88 },
  { path: "/ouverture-porte-sans-casse-94", priority: 0.88 },
  { path: "/serrurier-agree-94", priority: 0.88 },
  { path: "/serrurier-artisan-94", priority: 0.88 },
  { path: "/faux-serruriers", priority: 0.85 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.path === "/" ? "weekly" : "monthly",
    priority: r.priority,
  }));

  const cityUrls: MetadataRoute.Sitemap = VILLES_94.map((v) => ({
    url: `${base}/serrurier-${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogPostUrls: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...cityUrls, ...blogPostUrls];
}

