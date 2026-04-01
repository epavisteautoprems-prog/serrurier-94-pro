import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/blog" as const;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Blog serrurerie Val-de-Marne (94) | Conseils & tarifs",
    description:
      "Blog serrurier 94: guides tarifs, porte claquée, blindage A2P, assurance et conseils anti-arnaques. Contenu localisé Val-de-Marne.",
    path: PAGE_PATH,
  });
}

export default function Page() {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <BreadcrumbSchema items={[{ name: "Blog", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Blog</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Blog serrurerie Val-de-Marne (94)
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Guides pratiques pour mieux comprendre les prix d’un serrurier, les bons réflexes en cas de porte claquée, et les solutions de sécurité (A2P, blindage, assurance).
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-semibold text-slate-600">
                {new Date(p.date).toLocaleDateString("fr-FR")}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{p.title}</p>
              <p className="mt-3 text-sm text-slate-700">{p.description}</p>
              <p className="mt-5 text-sm font-semibold text-brand-navy">Lire l’article →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

