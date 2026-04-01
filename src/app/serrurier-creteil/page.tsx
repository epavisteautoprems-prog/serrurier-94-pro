import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "creteil" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage, vitrier urgence. Intervention rapide, devis gratuit, tarifs transparents. ${v.introHint}.`
      : `Serrurier Créteil (94000): ouverture de porte, changement de serrure, blindage, vitrier urgence. Intervention rapide, devis gratuit, tarifs transparents.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Créteil",
      cp: v?.cp ?? "94000",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

