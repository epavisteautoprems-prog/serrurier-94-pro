import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "ablon-sur-seine" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Ablon-sur-Seine"} (${v?.cp ?? "94480"}): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide 24h/24.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Ablon-sur-Seine",
      cp: v?.cp ?? "94480",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

