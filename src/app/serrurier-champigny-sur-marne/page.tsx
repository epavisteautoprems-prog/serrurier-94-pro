import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "champigny-sur-marne" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage et vitrier urgence. Intervention rapide, devis gratuit. ${v.introHint}.`
      : `Serrurier Champigny-sur-Marne (94500): ouverture de porte, changement de serrure, blindage et vitrier urgence. Intervention rapide, devis gratuit.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Champigny-sur-Marne",
      cp: v?.cp ?? "94500",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

