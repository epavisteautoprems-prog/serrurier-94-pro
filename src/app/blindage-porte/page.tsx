import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, serviceMeta } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/blindage-porte" as const;

export function generateMetadata(): Metadata {
  return buildMetadata(
    serviceMeta({
      slug: "blindage-porte",
      title: "Blindage de Porte Val-de-Marne (94) | Dès 890€ · Intervention 20 min · 24h/24",
      description:
        "Blindage de porte dans le Val-de-Marne (94): renforts, serrure multipoints, niveaux A2P (BP1/BP2/BP3), conseils assurance, devis gratuit et pose soignée. Garantie décennale selon prestation.",
    }),
  );
}

export default function Page() {
  const faq = [
    {
      q: "Qu’est-ce qu’un blindage de porte ?",
      a: "C’est un ensemble de renforts (panneaux, cornières anti-pinces, pivots/paumelles, bâti) et une serrure adaptée pour augmenter fortement la résistance à l’effraction.",
    },
    {
      q: "Blindage ou porte blindée: quelle différence ?",
      a: "Le blindage renforce votre porte existante. Une porte blindée est un bloc-porte complet (porte + bâti) conçu en usine. Le choix dépend de la porte actuelle et du niveau de sécurité visé.",
    },
    {
      q: "Quels sont les niveaux A2P (BP1, BP2, BP3) ?",
      a: "A2P est une certification reconnue. BP1/BP2/BP3 indiquent des niveaux de résistance croissants. On vous conseille le niveau selon votre situation et les exigences assurance.",
    },
    {
      q: "L’assurance peut-elle prendre en charge ?",
      a: "Selon contrat et contexte (effraction, tentative). Nous fournissons devis et facture, utiles pour votre dossier.",
    },
    {
      q: "Combien de temps dure la pose ?",
      a: "Souvent une demi-journée selon configuration. Un diagnostic préalable permet de confirmer le matériel et le temps de pose.",
    },
    {
      q: "Quel budget prévoir pour un blindage dans le 94 ?",
      a: "Dès 890€ selon la porte, le bâti, la serrure (3/5 points) et le niveau souhaité. Devis gratuit et détaillé.",
    },
    {
      q: "Est-ce compatible avec une serrure A2P ?",
      a: "Oui. Le blindage est souvent associé à une serrure/cylindre certifiés A2P pour maximiser la résistance et la conformité assurance.",
    },
    {
      q: "Proposez-vous une solution après cambriolage ?",
      a: "Oui: mise en sécurité immédiate, puis proposition de blindage/renforts adaptés. Intervention rapide dans le Val-de-Marne.",
    },
    {
      q: "Blindage: est-ce compatible avec la copropriété ?",
      a: "Le plus souvent oui, mais certaines copropriétés imposent des contraintes esthétiques (couleur, aspect extérieur) ou des règles sur le bloc-porte. Nous vous aidons à choisir une solution compatible et à préparer les éléments utiles (devis, descriptif).",
    },
    {
      q: "Est-ce que le blindage suffit si le bâti est faible ?",
      a: "Le blindage est efficace quand il renforce aussi le bâti et les points faibles (gâches, fixations, paumelles). C’est pourquoi le diagnostic porte + bâti est essentiel: on renforce l’ensemble pour éviter qu’un point faible contourne la serrure.",
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
          name: "Blindage de porte Val-de-Marne (94)",
          description:
            "Blindage, renforts, serrures multipoints, options A2P (BP1/BP2/BP3) et mise en sécurité après effraction. Devis gratuit, intervention 24h/24 7j/7.",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "Services", path: "/#services" }, { name: "Blindage de porte", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link className="hover:underline" href="/#services">
            Services
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Blindage de porte</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Blindage de Porte Val-de-Marne (94) | Certifié A2P · Garantie Décennale
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Le blindage de porte est l’une des améliorations les plus efficaces pour réduire le risque d’effraction. Dans le Val-de-Marne (94), beaucoup d’intrusions se jouent sur des points simples: porte fragilisée, bâti peu rigide, cylindre accessible, absence de renforts. Un blindage bien conçu associe{" "}
          <strong>structure</strong> (renforts et bâti), <strong>fermeture</strong> (serrure multipoints) et <strong>cylindre</strong> (souvent A2P) pour créer une défense cohérente, durable et compatible avec les attentes des assurances.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Si vous cherchez un <strong>serrurier val-de-marne</strong> pour un <strong>blindage porte Val-de-Marne 94</strong>, l’objectif n’est pas de “poser du lourd” au hasard: l’objectif est de renforcer les bons points (chant, bâti, paumelles, cylindre) et de conserver un usage simple au quotidien. Un blindage réussi se voit à la fermeture: porte qui se ferme sans forcer, points d’ancrage alignés, et une sécurité réellement améliorée. C’est aussi ce qui rend la solution compatible assurance dans les dossiers après effraction.
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
            className="rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-semibold text-slate-900"
          >
            Diagnostic & devis →
          </Link>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Ce que comprend un blindage efficace</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700">
              <li>
                <strong>Renforts</strong> sur la porte (panneaux, habillage) pour limiter le perçage et le défoncement.
              </li>
              <li>
                <strong>Cornières anti-pinces</strong> pour réduire l’effet levier au niveau du chant.
              </li>
              <li>
                <strong>Renforts de paumelles</strong> et réglages pour une fermeture alignée.
              </li>
              <li>
                <strong>Serrure multipoints</strong> pour répartir l’effort sur plusieurs ancrages.
              </li>
              <li>
                <strong>Protection du cylindre</strong> (défenseur) et options A2P selon besoin.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h2 className="text-lg font-semibold text-slate-900">Pourquoi la cohérence porte + bâti compte</h2>
            <p className="mt-3 text-sm text-slate-700">
              Le blindage n’est pas qu’une serrure « plus forte ». Si le bâti ou les fixations cèdent, l’effort contourne la meilleure serrure. C’est pour ça qu’un diagnostic sérieux regarde l’ensemble: rigidité du bâti, état des paumelles, jeu de porte, alignements, et contraintes de l’immeuble. On vise une solution qui renforce les points faibles sans rendre la porte difficile à fermer au quotidien.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              En appartement, l’objectif est souvent de gagner un niveau de protection important tout en gardant une esthétique propre et un usage simple. En maison, on prend en compte l’exposition, l’accès et la récurrence des tentatives.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Concrètement, beaucoup d’attaques cherchent l’effet levier: on “pousse” au niveau du chant. Les cornières anti‑pinces, les renforts de gâche, et une multipoints bien ancrée sont alors déterminants. Un blindage porte Val-de-Marne 94 cohérent traite ce scénario, plutôt que de se limiter à un cylindre plus résistant.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Qu’est-ce que le blindage (vraiment) ?</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Blindage de porte existante</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Le blindage consiste à renforcer votre porte actuelle: habillage/renforts, renfort du chant, amélioration des paumelles/pivots, et surtout renfort du bâti et des points d’ancrage. L’avantage est de conserver l’existant quand il est sain, tout en augmentant fortement la résistance. C’est souvent un excellent compromis en appartement.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Dans le Val-de-Marne, on rencontre fréquemment des portes d’immeubles anciens: la porte peut être correcte, mais le bâti et les réglages sont le point faible. Un serrurier val-de-marne expérimenté commence donc par évaluer la cohérence globale plutôt que d’ajouter du matériel au hasard.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Bloc‑porte / porte blindée</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Une porte blindée (bloc‑porte) est un ensemble conçu en usine: porte + bâti + serrure + accessoires. C’est une solution très cohérente quand la porte existante est trop faible ou trop abîmée. Elle peut aussi répondre plus facilement à certaines exigences assurance.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Le bon choix dépend de votre objectif (prévention, après effraction, exigence A2P), du budget, et des contraintes esthétiques/copropriété. Dans tous les cas, on vise une fermeture fluide et une sécurité réellement améliorée.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Niveaux A2P: BP1, BP2, BP3 (comment choisir)
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-slate-700">
            La certification A2P est un repère reconnu en France pour évaluer la résistance à l’effraction. Sur le blindage, on peut rencontrer des références associées à des niveaux BP1, BP2 ou BP3. Plutôt que de « sur-blinder » systématiquement, on cherche le bon niveau: celui qui correspond à votre contexte (rez-de-chaussée, accès, antécédents, valeur des biens) et aux exigences de votre assurance.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">BP1</h3>
              <p className="mt-2 text-sm text-slate-700">
                Bon niveau de protection pour beaucoup de logements. Souvent choisi en amélioration de sécurité « sérieuse » avec budget maîtrisé.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">BP2</h3>
              <p className="mt-2 text-sm text-slate-700">
                Renforcement supplémentaire, utile si exposition plus élevée ou exigence assurance plus stricte.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">BP3</h3>
              <p className="mt-2 text-sm text-slate-700">
                Niveau très renforcé. À envisager selon risques spécifiques et objectifs de protection maximum.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Quel niveau pour quel logement ?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                En appartement en étage, l’exposition est souvent plus faible: un BP1 bien posé, associé à un cylindre renforcé et une protection, peut déjà apporter un gain important. En rez-de-chaussée, accès facile, ou après tentative, un BP2 peut être plus cohérent. Le BP3 se justifie dans des contextes spécifiques: besoin de protection maximum, exigence stricte, ou risque élevé.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Le piège à éviter</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Surdimensionner sans traiter le point faible. Une serrure très résistante sur un bâti fragile n’apporte pas le résultat attendu. C’est pour cela qu’on renforce aussi les fixations, les gâches, le chant et l’alignement. Le blindage porte Val-de-Marne 94 efficace est un ensemble.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Comment se passe l’installation (étape par étape)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1) Diagnostic porte + bâti",
                text: "On évalue la porte, le bâti, les paumelles, le jeu, et l’objectif (prévention, après effraction, assurance). On confirme la faisabilité et la solution cohérente.",
              },
              {
                title: "2) Devis détaillé",
                text: "On annonce le prix et le contenu exact: renforts, multipoints, cylindre, protection, niveau A2P. Pas de surprise: tout est validé avant pose.",
              },
              {
                title: "3) Pose + réglages",
                text: "On installe, on renforce les points faibles, puis on règle: fermeture fluide, ancrages alignés, clés/manœuvre. On fournit facture et documents utiles.",
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Remboursement assurance: guide complet</h2>
          <p className="mt-3 text-sm text-slate-700">
            Après effraction ou tentative, certaines assurances demandent des preuves: photos, dépôt de plainte/constat selon contexte, devis, facture, références produit, parfois mention A2P. Nous fournissons des documents clairs et exploitables. Si votre contrat prévoit une prise en charge, cela facilite la constitution du dossier. En cas d’urgence, on peut aussi faire une mise en sécurité immédiate, puis planifier une pose plus complète.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            La bonne méthode: documenter les dégâts (photos), vérifier les garanties (effraction, vandalisme, vol de clés selon option), puis faire intervenir un serrurier val-de-marne capable de fournir une facture détaillée. Le point clé: éviter les remplacements non justifiés. Un blindage porte Val-de-Marne 94 peut être pertinent en prévention ou après incident, mais il doit être cohérent et expliqué. On vous aide à structurer le dossier: matériel posé, raisons du remplacement, et éléments utiles pour l’assureur.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Avant / après: ce que ça change</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Avant</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Porte qui prend du jeu, cylindre exposé, bâti peu rigide, une serrure simple: l’effraction au levier est facilitée, et l’arrachement de cylindre peut être rapide. Beaucoup de tentatives dans le 94 ciblent justement ces points faibles “classiques”.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Après</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Renfort du chant et du bâti, ancrages multipoints, cylindre protégé: l’attaque devient plus longue, plus bruyante, et donc plus risquée pour l’auteur. Le résultat attendu: une résistance nettement supérieure, sans compromettre l’usage quotidien (fermeture fluide).
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Prix selon type d’appartement (repères)</h2>
          <p className="mt-4 max-w-3xl text-sm text-slate-700">
            Le budget dépend de la porte, du bâti, du niveau souhaité et des contraintes. En appartement, on recherche souvent un excellent rapport: renforts cohérents + multipoints + cylindre protégé. En maison, l’exposition peut conduire à renforcer davantage le bâti et les points sensibles.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Objectif</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Repère</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-slate-700">Appartement (étage)</td>
                  <td className="px-4 py-3 text-slate-700">Prévention + confort</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Appartement (RDC)</td>
                  <td className="px-4 py-3 text-slate-700">Sécurité renforcée</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Après effraction</td>
                  <td className="px-4 py-3 text-slate-700">Mise en sécurité + renfort</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Diagnostic & devis gratuit</li>
            <li>✓ Matériel adapté (multipoints, défenseur, renforts)</li>
            <li>✓ Pose propre, réglages, vérification</li>
            <li>✓ Facture et documents assurance</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Témoignages clients (94)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Jean-Pierre M.",
                ville: "Maisons-Alfort",
                text: "Blindage + serrure renforcée, travail très propre. Fermeture fluide, explications claires, facture ok.",
              },
              {
                name: "Aïcha L.",
                ville: "Villejuif",
                text: "Après tentative d’effraction, mise en sécurité puis blindage. Rassurant, pas de survente, résultat solide.",
              },
              {
                name: "Thomas R.",
                ville: "Créteil",
                text: "Conseils A2P pertinents, devis détaillé, pose en demi-journée. Très satisfait du résultat.",
              },
              {
                name: "Sarah K.",
                ville: "Vincennes",
                text: "Copropriété exigeante: solution compatible + esthétique propre. Fermeture nickel, délai respecté.",
              },
            ].map((t) => (
              <article key={t.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  {t.name} • <span className="text-brand-navy">{t.ville}</span>
                </p>
                <p className="mt-2 text-sm text-amber-600">⭐⭐⭐⭐⭐</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">“{t.text}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Nos villes principales (maillage local)</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Consultez votre page ville pour des repères locaux (quartiers, délais, FAQ) avant votre projet de blindage.
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ blindage de porte (94)</h2>
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
          <h2 className="text-2xl font-bold tracking-tight">Sécuriser votre porte dès maintenant</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Diagnostic rapide, devis gratuit, pose soignée. Blindage de porte Val-de-Marne (94) avec options A2P.
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

