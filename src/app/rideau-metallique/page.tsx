import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, serviceMeta } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/rideau-metallique" as const;

export function generateMetadata(): Metadata {
  return buildMetadata(
    serviceMeta({
      slug: "rideau-metallique",
      title: "Dépannage Rideau Métallique Val-de-Marne (94) | Devis gratuit · Intervention 20 min · 24h/24",
      description:
        "Dépannage rideau métallique dans le Val-de-Marne: rideau bloqué, moteur en panne, tablier désaxé, axe/ressorts. Intervention urgence commerces 24h/24, devis gratuit, réparation ou remplacement.",
    }),
  );
}

export default function Page() {
  const faq = [
    {
      q: "Intervenez-vous en urgence pour commerces ?",
      a: "Oui, 24h/24 7j/7. Un rideau bloqué peut empêcher l’ouverture ou la fermeture: on priorise la remise en sécurité.",
    },
    {
      q: "Quels types de pannes traitez-vous ?",
      a: "Rideau bloqué, moteur HS, fin de course, tablier sorti des coulisses, axe/ressorts, boîtier de commande, verrous.",
    },
    {
      q: "Réparez-vous ou remplacez-vous ?",
      a: "On répare dès que c’est fiable et rentable. En cas de pièces trop usées ou de casse répétée, on propose un remplacement clair.",
    },
    {
      q: "Intervenez-vous sur rideaux motorisés et manuels ?",
      a: "Oui. Nous dépannons les rideaux métalliques manuels et motorisés, ainsi que les grilles et portes de garage selon configuration.",
    },
    {
      q: "Quel est le délai d’intervention dans le 94 ?",
      a: `Souvent rapide (moyenne ${SITE_CONFIG.delai}) selon trafic et disponibilité. Appel = diagnostic + estimation.`,
    },
    {
      q: "Proposez-vous la motorisation ?",
      a: "Oui. On peut installer ou remplacer un moteur adapté, avec réglage des fins de course et sécurisation de la commande.",
    },
    {
      q: "Mon rideau métallique est bloqué ouvert: que faire ?",
      a: "Évitez de forcer la descente: vous risquez de désaxer le tablier. Coupez l’alimentation si le moteur force et sécurisez temporairement si possible. Appelez: on priorise la remise en sécurité du local.",
    },
    {
      q: "Mon rideau force et fait du bruit: est-ce grave ?",
      a: "Oui, c’est souvent un signe de frottement, fin de course mal réglée, coulisses encrassées ou tablier désaxé. Insister abîme le moteur et les lames. Un réglage rapide évite une panne complète.",
    },
    {
      q: "Peut-on réparer un moteur de rideau métallique ?",
      a: "Selon la panne (condensateur, réglage, commande, usure), une réparation est possible. Si le moteur est hors tolérance ou sous-dimensionné, le remplacement est plus fiable à long terme.",
    },
    {
      q: "Proposez-vous un devis avant intervention ?",
      a: "Oui. On fait un diagnostic au téléphone (symptômes, motorisé/manuels, position) pour annoncer une estimation, puis on confirme le devis sur place avant de commencer.",
    },
  ] as const;

  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <JsonLd
        data={serviceJsonLd({
          pageUrl,
          name: "Dépannage rideau métallique Val-de-Marne (94)",
          description:
            "Rideau métallique bloqué (ouvert/fermé), tablier désaxé, moteur, fins de course, axe/ressorts. Remise en sécurité commerces 24h/24, devis gratuit.",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "Services", path: "/#services" }, { name: "Rideau métallique", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link className="hover:underline" href="/#services">
            Services
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Rideau métallique</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Dépannage Rideau Métallique Val-de-Marne | Urgence Commerce 24h/24
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Un rideau métallique en panne, c’est souvent une urgence: boutique impossible à ouvrir, fermeture qui ne se fait plus, ou risque de sécurité. Nous intervenons dans tout le Val-de-Marne pour{" "}
          <strong>dépanner</strong>, <strong>réparer</strong> ou <strong>remplacer</strong> votre rideau métallique, avec une priorité: remettre votre commerce en situation sûre, puis fiabiliser l’installation.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Dans la pratique, un dépannage rideau métallique se joue sur deux choses: <strong>ne pas aggraver</strong> (ne pas insister quand ça force) et <strong>identifier la cause</strong> (tablier, axe, ressorts, moteur, fins de course, commande). Un rideau qui “force” abîme rapidement le moteur et déforme les lames. Notre approche est donc de remettre en service proprement, puis de sécuriser la fiabilité pour éviter le retour de panne. Si vous avez besoin d’un <strong>serrurier val-de-marne</strong> pour une urgence commerce, on se déplace rapidement et on annonce le prix avant de commencer.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={SITE_CONFIG.phoneHref}
            className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
          >
            📞 Urgence commerce : {SITE_CONFIG.phone}
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-semibold text-slate-900"
          >
            Devis gratuit →
          </Link>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h2 className="text-lg font-semibold text-slate-900">Types de pannes et causes (les plus fréquentes)</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700">
              <li>
                <strong>Tablier désaxé</strong>: lames sorties des coulisses, rideau qui force.
              </li>
              <li>
                <strong>Moteur en panne</strong>: bruit, blocage, arrêt brutal, condensateur.
              </li>
              <li>
                <strong>Fin de course</strong>: rideau qui ne s’arrête plus ou s’arrête trop tôt.
              </li>
              <li>
                <strong>Axe / ressorts</strong>: tension incorrecte, casse, rideau trop lourd à manœuvrer.
              </li>
              <li>
                <strong>Commande</strong>: boîtier, inverseur, télécommande, sécurité.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Derrière ces symptômes, on retrouve souvent des causes “simples”: coulisses encrassées (sable, gravillons), lames déformées après choc, manque de réglage, ou vieillissement du moteur/condensateur. Une autre cause fréquente est le <strong>déréglage progressif</strong>: un rideau commence à accrocher légèrement, on insiste, et un jour il se bloque. L’intervention rapide évite généralement la casse et réduit le coût.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Réparation vs remplacement</h2>
            <p className="mt-3 text-sm text-slate-700">
              Une réparation est pertinente si elle rétablit un fonctionnement fiable (ex: réglage, réalignement, pièce ciblée). On évite les « rustines » qui vous font rappeler dans 2 semaines.
              Si l’axe est fatigué, si le tablier est trop déformé, ou si le moteur est hors tolérance, un remplacement (partiel ou complet) peut être plus économique à moyen terme.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              On vous explique clairement l’option recommandée et son coût avant d’intervenir.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Pour un commerce, on raisonne aussi en “temps d’arrêt”: une réparation rapide mais fragile peut coûter plus cher qu’un remplacement ciblé qui fiabilise. Notre but est de remettre votre rideau en service <strong>et</strong> d’éviter une nouvelle urgence au prochain cycle d’ouverture/fermeture.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Intervention urgence commerces (24h/24)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Rideau bloqué fermé</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Votre priorité est d’ouvrir pour travailler. On sécurise l’intervention: diagnostic, remise en mouvement, réalignement, puis test. On évite les gestes qui tordent les lames et aggravent la panne.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-sm font-semibold text-slate-900">Rideau bloqué ouvert</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                C’est une urgence sécurité. On priorise la fermeture et la remise en sécurité du local. Selon le cas, on corrige le tablier/coulisses, les fins de course ou la commande pour retrouver un verrouillage fiable.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Prévention des pannes</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Un rideau entretenu (coulisses propres, réglages corrects, bruit surveillé) tombe beaucoup moins en panne. Une petite intervention préventive évite souvent un dépannage en urgence au pire moment.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Motorisation & sécurisation</h2>
          <p className="mt-4 max-w-3xl text-sm text-slate-700">
            La motorisation améliore le confort et réduit l’usure si elle est correctement dimensionnée. Lors d’un dépannage, on vérifie aussi les points de sécurité: fins de course, verrouillage, état des coulisses, points de frottement et risques de coincement. Un rideau qui « force » s’abîme vite: mieux vaut corriger la cause.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            La motorisation et l’automatisation doivent être adaptées au poids du tablier et à l’usage (ouvertures fréquentes, horaires). Un moteur sous‑dimensionné chauffe, se coupe et finit par tomber en panne. Un réglage de fins de course incorrect peut aussi “tirer” en butée, ce qui abîme l’axe et les lames. Notre objectif est de rendre l’installation fiable: dimensionnement, réglage, commande sécurisée.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Diagnostic + remise en sécurité</li>
            <li>✓ Réglage fins de course</li>
            <li>✓ Alignement tablier / coulisses</li>
            <li>✓ Remplacement pièces (si nécessaire)</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Devis & délais (comment ça se passe)</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Pour aller vite, on commence par un diagnostic au téléphone: rideau manuel ou motorisé, position (bloqué ouvert/fermé), symptômes (bruit, à-coups, arrêt, tablier de travers), et contexte (commerce, urgence de fermeture). Cela permet d’annoncer une estimation et d’arriver avec les bons outils. Sur place, on confirme le devis avant de commencer. L’objectif est d’être rapide et transparent, surtout quand le rideau empêche d’ouvrir ou de sécuriser.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Nos villes principales (maillage local)</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Nous intervenons sur tout le Val-de-Marne. Consultez votre page locale pour les repères de délai et de couverture.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { href: "/serrurier-creteil", label: "Créteil" },
              { href: "/serrurier-vitry-sur-seine", label: "Vitry-sur-Seine" },
              { href: "/serrurier-saint-maur-des-fosses", label: "Saint-Maur" },
              { href: "/serrurier-champigny-sur-marne", label: "Champigny" },
              { href: "/serrurier-ivry-sur-seine", label: "Ivry" },
              { href: "/serrurier-maisons-alfort", label: "Maisons-Alfort" },
              { href: "/serrurier-fontenay-sous-bois", label: "Fontenay" },
              { href: "/serrurier-villejuif", label: "Villejuif" },
              { href: "/serrurier-vincennes", label: "Vincennes" },
              { href: "/serrurier-alfortville", label: "Alfortville" },
            ].map((x) => (
              <Link
                key={x.href}
                href={x.href}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:text-brand-navy"
              >
                {x.label} →
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ rideau métallique (94)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <details key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Rideau bloqué ? On intervient.</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Urgence commerce 24h/24. Remise en sécurité + solution durable. Appel = estimation + prise en charge.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={SITE_CONFIG.phoneHref}
              className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
            >
              📞 {SITE_CONFIG.phone}
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white"
            >
              Demander un devis →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

