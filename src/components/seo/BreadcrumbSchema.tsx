import { SITE_CONFIG } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export type BreadcrumbItem = { name: string; path: string };

function abs(path: string): string {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function BreadcrumbSchema({ items }: { items: readonly BreadcrumbItem[] }) {
  const withHome = [{ name: "Accueil", path: "/" }, ...items];
  const json = breadcrumbJsonLd(withHome.map((i) => ({ name: i.name, url: abs(i.path) })));
  return <JsonLd data={json} />;
}

