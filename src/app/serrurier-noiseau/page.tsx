import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "noiseau" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Noiseau"} (${v?.cp ?? "94880"}): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide 24h/24.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Noiseau",
      cp: v?.cp ?? "94880",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

