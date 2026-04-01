import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "le-perreux-sur-marne" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Le Perreux-sur-Marne"} (${v?.cp ?? "94170"}): ouverture de porte, changement de serrure, blindage et devis gratuit. Intervention rapide, urgence 24h/24.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Le Perreux-sur-Marne",
      cp: v?.cp ?? "94170",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

