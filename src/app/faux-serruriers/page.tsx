import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, VILLES_94 } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Comment éviter les arnaques aux serruriers dans le 94",
    description:
      "Reconnaître un faux serrurier dans le Val-de-Marne : signaux d’alerte, devis avant intervention, tarifs, facture. Conseils pratiques et numéro d’urgence 24h/24.",
    path: "/faux-serruriers",
  });
}

export default function Page() {
  return (
    <div className="bg-white">
      <article className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Arnaques serruriers 94</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Comment éviter les arnaques aux serruriers dans le 94
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          Les arnaques aux faux serruriers touchent aussi le Val-de-Marne: publicités au prix irréaliste, numéros
          surtaxés, sous-traitance à l&apos;aveugle, puis facturation plusieurs fois le marché une fois sur place. Voici
          des repères simples — applicables à <strong>Créteil</strong>, <strong>Vincennes</strong>,{" "}
          <strong>Saint-Maur</strong> ou toute autre commune du département — pour vous protéger.
        </p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">Les signaux d&apos;alerte</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          <li>Tarif &quot;à partir de&quot; très bas sans aucune question sur votre porte (blindée, multipoints, clé perdue).</li>
          <li>Refus de confirmer un prix ou un plafond avant le déplacement.</li>
          <li>Refus de délivrer un devis écrit ou un numéro SIRET / raison sociale claire.</li>
          <li>Pression pour payer immédiatement en espèces, sans facture détaillée.</li>
          <li>Destruction systématique de la serrure alors qu&apos;une ouverture non destructive est possible.</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-slate-900">Les bons réflexes</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          Exigez un <strong>devis gratuit avant intervention</strong> et une explication du scénario (porte claquée vs
          fermée à clé, type de cylindre). Un professionnel du 94 annonce un <strong>délai réaliste</strong> selon l&apos;heure
          et le secteur — par exemple 15–30 minutes sur les axes centraux, davantage en périphérie selon trafic. Demandez
          une <strong>facture</strong> avec désignation des pièces et la main d&apos;œuvre.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          Comparez avec une structure locale: <strong>{SITE_CONFIG.experienceYears} ans d&apos;expérience</strong>,{" "}
          <strong>artisan local Val-de-Marne</strong>, matériel <strong>certifié A2P</strong> lorsque pertinent, et
          promesse de <strong>aucune surprise sur la facture</strong>.
        </p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">En urgence, appelez un numéro clair</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          Programmez le{" "}
          <Link className="font-semibold text-brand-navy hover:underline" href={SITE_CONFIG.phoneHref}>
            {SITE_CONFIG.phone}
          </Link>{" "}
          — ligne d&apos;urgence {SITE_CONFIG.openingHours}. Nous intervenons dans toutes les communes du département,
          avec les mêmes règles de transparence.
        </p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">Villes du 94 (intervention)</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {VILLES_94.map((v) => (
            <Link
              key={v.slug}
              href={`/serrurier-${v.slug}`}
              className="rounded-full border border-slate-200 bg-brand-bg px-3 py-1 text-slate-700 hover:border-brand-navy"
            >
              {v.name}
            </Link>
          ))}
        </div>
      </article>
    </div>
  );
}
