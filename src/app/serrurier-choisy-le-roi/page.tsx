import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "choisy-le-roi" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage et vitrier urgence. Devis gratuit, intervention rapide. ${v.introHint}.`
      : `Serrurier Choisy-le-Roi (94600): ouverture de porte, changement de serrure, blindage et vitrier urgence. Devis gratuit, intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Choisy-le-Roi",
      cp: v?.cp ?? "94600",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

