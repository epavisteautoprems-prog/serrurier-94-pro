import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "marolles-en-brie" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Marolles-en-Brie"} (${v?.cp ?? "94440"}): ouverture de porte, changement de serrure, blindage et devis gratuit. Intervention rapide Val-de-Marne.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Marolles-en-Brie",
      cp: v?.cp ?? "94440",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

