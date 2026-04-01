import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "le-kremlin-bicetre" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide. ${v.introHint}.`
      : `Serrurier Le Kremlin-Bicêtre (94270): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Le Kremlin-Bicêtre",
      cp: v?.cp ?? "94270",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

