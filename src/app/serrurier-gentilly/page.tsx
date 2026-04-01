import type { Metadata } from "next";
import { buildMetadata, villeMeta } from "@/lib/seo";
import { getVilleBySlug } from "@/lib/constants";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

const slug = "gentilly" as const;

export function generateMetadata(): Metadata {
  const v = getVilleBySlug(slug);
  const desc = `Serrurier ${v?.name ?? "Gentilly"} (${v?.cp ?? "94250"}): ouverture de porte, changement de serrure, sécurisation et devis gratuit. Intervention rapide dans le 94.`;
  return buildMetadata(
    villeMeta({
      ville: v?.name ?? "Gentilly",
      cp: v?.cp ?? "94250",
      slug,
      description: desc,
    }),
  );
}

export default function Page() {
  return <VillePageTemplate slug={slug} />;
}

