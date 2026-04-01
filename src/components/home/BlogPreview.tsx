import Link from "next/link";

type Preview = {
  title: string;
  excerpt: string;
  href: string;
};

export function BlogPreview() {
  const posts: readonly Preview[] = [
    {
      title: "Prix d’un serrurier dans le Val-de-Marne (2026): guide complet",
      excerpt:
        "Grille tarifaire, facteurs qui font varier le prix, majorations nuit/week-end, et conseils pour éviter les abus.",
      href: "/blog/prix-serrurier-val-de-marne",
    },
    {
      title: "Porte claquée dans le 94: que faire en 2026 ?",
      excerpt:
        "Les bons réflexes, ce qu’il ne faut pas faire, et comment une ouverture sans dégâts est réalisée selon la serrure.",
      href: "/blog/que-faire-porte-claquee-94",
    },
    {
      title: "Blindage de porte appartement 94: prix, A2P, assurance",
      excerpt:
        "Différences blindage vs porte blindée, niveaux A2P, prise en charge assurance, et budget réaliste en 2026.",
      href: "/blog/blindage-porte-appartement-94",
    },
  ] as const;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Conseils & guides serrurerie (94)
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-700">
              Articles pratiques: tarifs, porte claquée, blindage A2P et assurances. Contenu localisé Val-de-Marne.
            </p>
          </div>
          <Link className="text-sm font-semibold text-brand-navy hover:underline" href="/blog">
            Voir tous les articles →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-base font-semibold text-slate-900">{p.title}</p>
              <p className="mt-3 text-sm text-slate-700">{p.excerpt}</p>
              <p className="mt-5 text-sm font-semibold text-brand-navy">Lire l’article →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

