import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "villejuif" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc =
    v?.introHint
      ? `Serrurier ${v.name} (${v.cp}): ouverture de porte, remplacement cylindre, serrure A2P et urgence 24h/24. Devis gratuit. ${v.introHint}.`
      : `Serrurier Villejuif (94800): ouverture de porte, remplacement cylindre, serrure A2P et urgence 24h/24. Devis gratuit.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Villejuif",
      cp: v?.cp ?? "94800",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

