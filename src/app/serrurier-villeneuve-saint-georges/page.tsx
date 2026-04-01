import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "villeneuve-saint-georges" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Villeneuve-Saint-Georges"} (${v?.cp ?? "94190"}): ouverture de porte, changement de serrure, sécurisation après effraction et devis gratuit. Intervention rapide 24h/24.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Villeneuve-Saint-Georges",
      cp: v?.cp ?? "94190",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

