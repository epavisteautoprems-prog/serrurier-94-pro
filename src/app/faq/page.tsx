import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/faq" as const;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "FAQ serrurier Val-de-Marne (94) | Prix, délais, A2P, assurance",
    description:
      "FAQ serrurier 94: prix ouverture de porte, délais d’intervention, nuit/week-end, A2P, blindage, assurances et conseils anti-arnaques.",
    path: PAGE_PATH,
  });
}

export default function Page() {
  const qa = [
    {
      q: "Quel est le prix d'une ouverture de porte dans le 94 ?",
      a: "Dès 89€ TTC en journée. Devis gratuit avant intervention, prix annoncé au téléphone.",
    },
    {
      q: "Combien de temps pour arriver ?",
      a: `En moyenne ${SITE_CONFIG.delai} dans tout le Val-de-Marne (94), selon trafic et distance. 24h/24 7j/7.`,
    },
    {
      q: "Intervenez-vous la nuit et le week-end ?",
      a: "Oui. Les conditions tarifaires sont annoncées avant déplacement, sans supplément caché.",
    },
    {
      q: "Qu'est-ce qu'une serrure A2P ?",
      a: "Une certification reconnue de résistance à l’effraction. Elle peut être demandée par certaines assurances.",
    },
    {
      q: "Est-ce que l’ouverture est toujours sans dégâts ?",
      a: "Souvent possible sur porte claquée, mais pas garanti. Cela dépend de la serrure, de l’état du cylindre et de la fermeture.",
    },
    {
      q: "Travaillez-vous avec les assurances ?",
      a: "Oui. Nous fournissons devis/facture et informations nécessaires à votre dossier selon votre contrat.",
    },
    {
      q: "Comment éviter les arnaques ?",
      a: "Demandez un devis avant travaux, refusez les pressions, exigez l’identification, et un prix annoncé clairement avant intervention.",
    },
    {
      q: "Pouvez-vous sécuriser après cambriolage ?",
      a: "Oui: mise en sécurité immédiate, remplacement serrure/cylindre, renforts et options A2P selon besoin.",
    },
    {
      q: "Acceptez-vous la carte bancaire ?",
      a: "Oui selon intervention. Nous acceptons aussi espèces. Facture possible.",
    },
    {
      q: "Intervenez-vous sur rideaux métalliques et vitrerie ?",
      a: "Oui: dépannage rideau métallique, vitrier urgence, mise en sécurité et remplacement selon cas.",
    },
  ] as const;

  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <JsonLd data={faqPageJsonLd(qa.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "FAQ", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>FAQ</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          FAQ serrurier Val-de-Marne (94)
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Retrouvez les réponses aux questions les plus fréquentes: tarifs, délais, urgences, A2P, assurances et bonnes pratiques.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {qa.map((item) => (
            <details key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Toujours une urgence ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Appelez-nous pour un diagnostic rapide et un prix annoncé avant intervention.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={SITE_CONFIG.phoneHref} className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm">
              📞 {SITE_CONFIG.phone}
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white">
              Devis gratuit →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

