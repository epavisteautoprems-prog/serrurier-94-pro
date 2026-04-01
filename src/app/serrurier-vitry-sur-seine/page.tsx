import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "vitry-sur-seine" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage, rideau métallique et vitrier urgence. Intervention rapide, devis gratuit. ${v.introHint}.`
      : `Serrurier Vitry-sur-Seine (94400): ouverture de porte, changement de serrure, blindage, rideau métallique et vitrier urgence. Intervention rapide, devis gratuit.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Vitry-sur-Seine",
      cp: v?.cp ?? "94400",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

