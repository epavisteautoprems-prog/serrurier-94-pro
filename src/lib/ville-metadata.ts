import type { Metadata } from "next";
import { getVilleBySlug, SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, type SeoPage } from "@/lib/seo";

/** Mot-clé principal en tête de title pour les requêtes « serrurier + ville ». */
export function buildVilleSeoPage(slug: string): SeoPage {
  const v = getVilleBySlug(slug);
  if (!v) {
    return {
      title: "Serrurier Val-de-Marne",
      description: SITE_CONFIG.description,
      path: `/serrurier-${slug}`,
    };
  }

  const delai = v.delai ?? SITE_CONFIG.delai;
  const hint = v.introHint ? ` ${v.introHint}.` : "";

  const title = `Serrurier ${v.name} 94 (${v.cp}) · Urgence 24h/24`;
  const description = `Serrurier à ${v.name} (${v.cp}) dans le Val-de-Marne : ouverture de porte, changement de serrure, blindage, vitrier. Intervention en ${delai} en moyenne.${hint} Devis gratuit · ☎ ${SITE_CONFIG.phone}`;

  const keywords = [
    `serrurier ${v.name}`,
    `serrurier ${v.name} 94`,
    `serrurier ${v.cp}`,
    `dépannage serrure ${v.name}`,
    `urgence serrurier ${v.name}`,
    `ouverture de porte ${v.name}`,
    `serrurier Val-de-Marne ${v.name}`,
  ];

  return {
    title,
    description,
    path: `/serrurier-${slug}`,
    keywords,
  };
}

export function metadataForVilleSlug(slug: string): Metadata {
  return buildMetadata(buildVilleSeoPage(slug));
}
