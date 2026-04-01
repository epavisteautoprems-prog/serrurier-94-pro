import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { articleJsonLd, localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  try {
    const post = getPostBySlug(params.slug);
    return buildMetadata({
      title: post.meta.title,
      description: post.meta.description,
      path: `/blog/${post.meta.slug}`,
    });
  } catch {
    return buildMetadata({
      title: "Article blog serrurier 94",
      description: "Article blog serrurerie Val-de-Marne (94).",
      path: `/blog/${params.slug}`,
      noindex: true,
    });
  }
}

export default function Page({ params }: { params: Params }) {
  let post: ReturnType<typeof getPostBySlug>;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const path = `/blog/${post.meta.slug}`;
  const pageUrl = `${base}${path}`;
  const authorName = post.meta.author ?? "Thomas R., Serrurier agréé 94";

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <JsonLd
        data={articleJsonLd({
          pageUrl,
          title: post.meta.title,
          description: post.meta.description,
          datePublished: post.meta.date,
          authorName,
          keywords: post.meta.keywords,
        })}
      />
      <BreadcrumbSchema items={[{ name: "Blog", path: "/blog" }, { name: post.meta.title, path }]} />

      <div className="mx-auto max-w-3xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>{" "}
          <span aria-hidden="true">›</span> <span className="line-clamp-1">{post.meta.title}</span>
        </nav>

        <p className="mt-6 text-xs font-semibold text-slate-600">
          {new Date(post.meta.date).toLocaleDateString("fr-FR")}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.meta.title}
        </h1>
        <p className="mt-4 text-sm text-slate-700">{post.meta.description}</p>
        <p className="mt-2 text-xs font-semibold text-slate-600">Auteur: {authorName}</p>

        <article className="prose prose-slate mt-10 max-w-none">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>

        <section className="mt-12 rounded-3xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Besoin d’un serrurier dans le 94 ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Urgence ou devis gratuit: intervention rapide Val-de-Marne, prix annoncés avant intervention.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={SITE_CONFIG.phoneHref} className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm">
              📞 {SITE_CONFIG.phone}
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white">
              Demander un devis →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

