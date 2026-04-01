import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "alfortville" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, changement de serrure, dépannage urgence et devis gratuit. Intervention rapide. ${v.introHint}.`
      : `Serrurier Alfortville (94140): ouverture de porte, changement de serrure, dépannage urgence et devis gratuit. Intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Alfortville",
      cp: v?.cp ?? "94140",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

