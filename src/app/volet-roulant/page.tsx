import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, serviceMeta } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/volet-roulant" as const;

export function generateMetadata(): Metadata {
  return buildMetadata(
    serviceMeta({
      slug: "volet-roulant",
      title: "Réparation Volet Roulant Val-de-Marne (94) | Dès 129€ · Intervention 20 min · 24h/24",
      description:
        "Réparation volet roulant dans le Val-de-Marne (94): volet bloqué, sangle cassée, moteur HS, lames abîmées. Dépannage et motorisation, devis gratuit, intervention rapide 24h/24 7j/7.",
    }),
  );
}

export default function Page() {
  const faq = [
    {
      q: "Mon volet roulant est bloqué, intervenez-vous ?",
      a: "Oui. On diagnostique l’origine (tablier, coulisses, attaches, axe, moteur, commande) et on remet en service avec une solution durable. Le but est d’éviter les blocages répétitifs.",
    },
    {
      q: "Réparez-vous les volets motorisés ?",
      a: "Oui. Moteur, condensateur, fins de course, commande filaire, télécommande, réglages et remplacement de pièces compatibles selon le modèle.",
    },
    {
      q: "Proposez-vous la motorisation d’un volet manuel ?",
      a: "Oui, si la configuration le permet. On dimensionne le moteur selon le poids du tablier et l’usage (fréquence), puis on règle fins de course et commande.",
    },
    {
      q: "Quel est le prix d’un dépannage volet roulant dans le 94 ?",
      a: "Dès 129€ selon la panne, l’accès et les pièces. Devis gratuit avant intervention, prix annoncé et confirmé avant travaux.",
    },
    {
      q: "Intervenez-vous le week-end ?",
      a: "Oui, 24h/24 7j/7 avec conditions annoncées avant déplacement.",
    },
    {
      q: "Pourquoi mon volet fait du bruit et force ?",
      a: "Souvent: lames abîmées, tablier désaxé, coulisses encrassées, attaches fatiguées ou axe grippé. Insister peut casser le moteur ou tordre les lames: mieux vaut diagnostiquer rapidement.",
    },
    {
      q: "Peut-on remplacer seulement une lame ?",
      a: "Parfois oui, selon le type de tablier et l’état général. Si plusieurs lames sont déformées ou si le tablier est très ancien, un remplacement plus large peut être plus fiable.",
    },
    {
      q: "Volet manuel: sangle ou manivelle cassée, c’est réparable ?",
      a: "Oui. On peut remplacer la sangle, l’enrouleur, la manivelle ou le treuil selon le mécanisme. On vérifie aussi l’axe et les attaches pour éviter une nouvelle casse.",
    },
    {
      q: "Un moteur de volet roulant se répare ou se remplace ?",
      a: "Selon la panne. Un condensateur peut se remplacer, un réglage peut suffire, mais si le moteur est hors tolérance (couple faible, chauffe), le remplacement est souvent la solution la plus fiable.",
    },
    {
      q: "Proposez-vous un devis avant intervention ?",
      a: "Oui. On fait un pré‑diagnostic au téléphone (manuel/motorisé, symptômes, accès) pour annoncer une estimation, puis on confirme le devis sur place avant de commencer.",
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
          name: "Réparation volet roulant Val-de-Marne (94)",
          description:
            "Volet roulant bloqué, tablier désaxé, attaches, axe, sangle/manivelle, moteur, réglages fins de course, motorisation. Devis gratuit, intervention 24h/24 7j/7.",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "Services", path: "/#services" }, { name: "Volet roulant", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link className="hover:underline" href="/#services">
            Services
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Volet roulant</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Réparation Volet Roulant Val-de-Marne (94) | Dépannage et Motorisation
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Un volet roulant bloqué peut vite devenir un problème: sécurité, isolation, confort, ou accès à une baie. Dans le Val-de-Marne (94), nous dépannons les volets roulants manuels et motorisés: sangle cassée, tablier désaxé, attaches rompues, moteur en panne, ou fins de course déréglées. Objectif: remise en service fiable, sans bricolage.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Un dépannage efficace ne consiste pas à “faire repartir” le volet au hasard: il faut traiter la cause. Un volet qui force abîme les lames, fatigue l’axe et peut casser un moteur. Notre approche est simple: diagnostic clair, devis gratuit, réparation ciblée, puis réglages et tests. C’est le même état d’esprit que pour la serrurerie: une solution durable et transparente, avec intervention rapide dans tout le 94.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={SITE_CONFIG.phoneHref}
            className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
          >
            📞 Dépannage : {SITE_CONFIG.phone}
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
            <h2 className="text-lg font-semibold text-slate-900">Pannes fréquentes</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700">
              <li><strong>Volet bloqué</strong>: tablier sorti des coulisses, lames abîmées, axe grippé.</li>
              <li><strong>Sangle / manivelle</strong>: usure, rupture, mécanisme interne fatigué.</li>
              <li><strong>Moteur</strong>: panne, condensateur, bruit anormal, perte de couple.</li>
              <li><strong>Attaches</strong>: attaches tablier cassées, volet qui descend de travers.</li>
              <li><strong>Réglages</strong>: fins de course, télécommande/commande filaire.</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Dans beaucoup de cas, la panne démarre par un petit signe: bruit, frottement, descente irrégulière, ou volet qui s’arrête avant la fin. Si on insiste, le tablier se désaxe et la panne s’aggrave. Le bon réflexe est de stopper l’usage dès que ça force, puis de faire diagnostiquer (coulisses, attaches, axe, moteur).
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Réparation et motorisation</h2>
            <p className="mt-3 text-sm text-slate-700">
              La plupart des volets se réparent efficacement en remplaçant la pièce en cause (attaches, sangle, moteur) et en réalignant correctement l’ensemble. Si votre volet est manuel, la motorisation peut être une amélioration utile (confort + usure réduite), à condition de dimensionner le moteur correctement.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Comme en serrurerie, la qualité du montage et des réglages fait la différence sur la durée.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Pour la motorisation, on évite l’erreur classique: un moteur trop faible. Un moteur sous‑dimensionné chauffe, se coupe et finit par lâcher. On choisit la puissance selon le tablier (matière, largeur, hauteur), puis on règle fins de course et commande. Résultat: un volet fluide, durable, et plus confortable au quotidien.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tarifs & transparence</h2>
          <p className="mt-3 text-sm text-slate-700">
            Le prix dépend de la panne, de l’accès, du type de volet et des pièces. Nous annonçons un devis gratuit avant intervention. En cas d’urgence, on peut sécuriser temporairement puis planifier un remplacement de pièce spécifique.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Diagnostic</li>
            <li>✓ Réparation ciblée</li>
            <li>✓ Réglages & tests</li>
            <li>✓ Devis gratuit</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Pièces et éléments contrôlés</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Tablier & coulisses",
                text: "On vérifie l’état des lames, l’alignement, les frottements et l’encrassement. Un simple nettoyage/réalignement peut éviter des pannes répétées.",
              },
              {
                title: "Axe & attaches",
                text: "Attaches cassées, axe grippé, treuil usé: ce sont des causes fréquentes de volet qui descend de travers. Remplacer la bonne pièce évite la casse du reste.",
              },
              {
                title: "Moteur & commande",
                text: "Condensateur, fins de course, commande filaire/radio: on teste et on règle pour éviter la butée forcée et la surchauffe.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Devis & délais</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Pour aller vite, on commence par un pré‑diagnostic au téléphone: manuel ou motorisé, volet bloqué haut/bas, bruit, à‑coups, accès, et urgence (sécurité, fermeture). On annonce une estimation, puis on confirme le devis sur place avant réparation. Une intervention bien réglée évite la panne qui revient.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Nos villes principales (maillage local)</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Nous dépannons les volets roulants sur tout le Val-de-Marne. Consultez votre page locale pour les repères de délai et de couverture.
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ volet roulant (94)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <details key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Volet bloqué ? On dépanne rapidement.</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Dépannage et motorisation Val-de-Marne (94). Devis gratuit, intervention 24h/24 7j/7.
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

