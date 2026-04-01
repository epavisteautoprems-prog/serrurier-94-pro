import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "charenton-le-pont" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage et urgence 24h/24. Devis gratuit, intervention rapide. ${v.introHint}.`
      : `Serrurier Charenton-le-Pont (94220): ouverture de porte, changement de serrure, blindage et urgence 24h/24. Devis gratuit, intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Charenton-le-Pont",
      cp: v?.cp ?? "94220",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

