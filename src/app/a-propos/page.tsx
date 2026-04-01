import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/a-propos" as const;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "À propos | Serrurier 94 Pro",
    description:
      "Découvrez Serrurier 94 Pro: intervention 24h/24 7j/7 dans le Val-de-Marne, devis gratuit, tarifs transparents, sécurité A2P et accompagnement assurance.",
    path: PAGE_PATH,
  });
}

export default function Page() {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <BreadcrumbSchema items={[{ name: "À propos", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>À propos</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          À propos de {SITE_CONFIG.name}
        </h1>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Notre mission</h2>
            <p className="mt-3 text-sm text-slate-700">
              Proposer un service de serrurerie fiable dans le Val-de-Marne (94), avec une approche simple: diagnostic clair, devis gratuit, prix annoncés avant intervention, et une exécution propre. L’urgence demande de la vitesse, mais aussi de la transparence: c’est ce qui évite les mauvaises surprises.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Nous intervenons 24h/24 7j/7 pour l’ouverture de porte, le changement de serrure, la sécurisation après effraction, le blindage, ainsi que des dépannages complémentaires (rideau métallique, vitrerie urgence, volet roulant).
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h2 className="text-lg font-semibold text-slate-900">Sécurité & qualité</h2>
            <p className="mt-3 text-sm text-slate-700">
              Une serrure performante n’a d’intérêt que si elle est correctement posée. Nous privilégions des solutions cohérentes: cylindres renforcés, options A2P si pertinent, serrures multipoints adaptées au type de porte, et réglages pour une fermeture fluide.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Sur les travaux de renfort/blindage, l’objectif est de renforcer l’ensemble (porte + bâti + points faibles), pas seulement de changer une pièce. Nous pouvons aussi fournir les documents nécessaires pour les assurances.
            </p>
          </div>
        </div>

        <section className="mt-12 rounded-3xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Besoin d’aide ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Urgence ou demande de devis: on vous répond rapidement.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={SITE_CONFIG.phoneHref} className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm">
              📞 {SITE_CONFIG.phone}
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white">
              Contact & devis →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

