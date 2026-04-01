import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "joinville-le-pont" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide. ${v.introHint}.`
      : `Serrurier Joinville-le-Pont (94340): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Joinville-le-Pont",
      cp: v?.cp ?? "94340",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

