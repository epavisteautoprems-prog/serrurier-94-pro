import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "limeil-brevannes" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Limeil-Brévannes"} (${v?.cp ?? "94450"}): ouverture de porte, changement de serrure, blindage et devis gratuit. Intervention rapide Val-de-Marne.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Limeil-Brévannes",
      cp: v?.cp ?? "94450",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

