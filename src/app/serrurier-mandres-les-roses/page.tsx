import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "mandres-les-roses" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Mandres-les-Roses"} (${v?.cp ?? "94520"}): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide 24h/24.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Mandres-les-Roses",
      cp: v?.cp ?? "94520",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

