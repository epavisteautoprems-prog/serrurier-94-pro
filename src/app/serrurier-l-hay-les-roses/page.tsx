import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "l-hay-les-roses" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage et urgence 24h/24. Devis gratuit. ${v.introHint}.`
      : `Serrurier L'Haÿ-les-Roses (94240): ouverture de porte, changement de serrure, blindage et urgence 24h/24. Devis gratuit.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "L'Haÿ-les-Roses",
      cp: v?.cp ?? "94240",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

