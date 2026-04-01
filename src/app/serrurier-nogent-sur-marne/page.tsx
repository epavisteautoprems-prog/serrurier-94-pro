import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "nogent-sur-marne" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage et urgence 24h/24. Devis gratuit. ${v.introHint}.`
      : `Serrurier Nogent-sur-Marne (94130): ouverture de porte, changement de serrure, blindage et urgence 24h/24. Devis gratuit.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Nogent-sur-Marne",
      cp: v?.cp ?? "94130",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

