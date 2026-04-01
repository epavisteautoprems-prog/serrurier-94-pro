import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "vincennes" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage et sécurisation. Devis gratuit, intervention rapide. ${v.introHint}.`
      : `Serrurier Vincennes (94300): ouverture de porte, changement de serrure, blindage et sécurisation. Devis gratuit, intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Vincennes",
      cp: v?.cp ?? "94300",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

