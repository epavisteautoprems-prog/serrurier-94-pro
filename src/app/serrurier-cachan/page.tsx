import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "cachan" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, remplacement cylindre, sécurisation et devis gratuit. Intervention rapide. ${v.introHint}.`
      : `Serrurier Cachan (94230): ouverture de porte, remplacement cylindre, sécurisation et devis gratuit. Intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Cachan",
      cp: v?.cp ?? "94230",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

