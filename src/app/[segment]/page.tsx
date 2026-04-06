import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VILLES_94, getVilleBySlug } from "@/lib/constants";
import { metadataForVilleSlug } from "@/lib/ville-metadata";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

export const dynamic = "force-static";

const PREFIX = "serrurier-" as const;

function villeSlugFromSegment(segment: string): string | null {
  if (!segment.startsWith(PREFIX)) return null;
  const slug = segment.slice(PREFIX.length);
  return slug.length > 0 ? slug : null;
}

export function generateStaticParams(): { segment: string }[] {
  return VILLES_94.map((v) => ({ segment: `${PREFIX}${v.slug}` }));
}

type Props = { params: Promise<{ segment: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segment } = await params;
  const slug = villeSlugFromSegment(segment);
  if (!slug || !getVilleBySlug(slug)) return {};
  return metadataForVilleSlug(slug);
}

export default async function VilleDynamicPage({ params }: Props) {
  const { segment } = await params;
  const slug = villeSlugFromSegment(segment);
  if (!slug || !getVilleBySlug(slug)) notFound();
  return <VillePageTemplate slug={slug} />;
}
