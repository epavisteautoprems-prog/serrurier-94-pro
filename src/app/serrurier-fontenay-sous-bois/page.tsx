import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "fontenay-sous-bois" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, blindage et vitrier urgence. Devis gratuit, intervention rapide. ${v.introHint}.`
      : `Serrurier Fontenay-sous-Bois (94120): ouverture de porte, changement de serrure, blindage et vitrier urgence. Devis gratuit, intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Fontenay-sous-Bois",
      cp: v?.cp ?? "94120",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

