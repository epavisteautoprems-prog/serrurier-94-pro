import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "ivry-sur-seine" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, serrure A2P, sécurisation après effraction et devis gratuit. Intervention rapide. ${v.introHint}.`
      : `Serrurier Ivry-sur-Seine (94200): ouverture de porte, serrure A2P, sécurisation après effraction et devis gratuit. Intervention rapide.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Ivry-sur-Seine",
      cp: v?.cp ?? "94200",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

