import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "orly" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, sécurisation et urgence 24h/24. Devis gratuit. ${v.introHint}.`
      : `Serrurier Orly (94310): ouverture de porte, changement de serrure, sécurisation et urgence 24h/24. Devis gratuit.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Orly",
      cp: v?.cp ?? "94310",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

