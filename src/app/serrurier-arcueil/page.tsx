import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "arcueil" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Arcueil"} (${v?.cp ?? "94110"}): ouverture de porte, changement de serrure, blindage et devis gratuit. Intervention rapide Val-de-Marne.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Arcueil",
      cp: v?.cp ?? "94110",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

