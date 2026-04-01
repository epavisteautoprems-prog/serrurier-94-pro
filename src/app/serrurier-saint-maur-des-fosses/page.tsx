import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "saint-maur-des-fosses" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, serrure A2P, blindage et dépannage urgence 24h/24. Devis gratuit, intervention rapide. ${v.introHint}.`
      : `Serrurier Saint-Maur-des-Fossés (94100): ouverture de porte, serrure A2P, blindage et dépannage urgence 24h/24. Devis gratuit, intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Saint-Maur-des-Fossés",
      cp: v?.cp ?? "94100",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

