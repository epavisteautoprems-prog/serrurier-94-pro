import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/tarifs" as const;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Tarifs serrurier Val-de-Marne (94) | Prix transparents",
    description:
      "Tarifs serrurier 94: ouverture de porte dès 89€, changement de serrure dès 149€, vitrier dès 79€. Prix annoncés avant intervention, devis gratuit, facture assurance.",
    path: PAGE_PATH,
  });
}

export default function Page() {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <BreadcrumbSchema items={[{ name: "Tarifs", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Tarifs</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Tarifs serrurier Val-de-Marne (94)
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Nous annonçons un <strong>prix clair avant intervention</strong>. Le tarif dépend de la situation (porte claquée ou fermée à clé), du type de serrure, de l’accès, et des pièces éventuellement à remplacer. Notre engagement: devis gratuit, pas de supplément caché, facture disponible (assurance).
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Si vous comparez des résultats “serrurier val-de-marne” sur Google, vous verrez des prix très variables. Notre position est volontairement simple: des repères lisibles, un devis annoncé, et une intervention cohérente. Un tarif “pas cher” n’a de sens que s’il est <strong>transparent</strong> et <strong>confirmé avant</strong>. C’est la base pour éviter les mauvaises surprises, surtout en urgence (soir, nuit, week-end).
        </p>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Engagement “prix TTC, devis gratuit, aucune surprise”</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Tous les prix ci-dessous sont des <strong>repères TTC</strong>. Avant tout travail, vous recevez un <strong>devis gratuit</strong> (au téléphone puis confirmé sur place). Aucun remplacement (cylindre, serrure, protection, moteur, vitrage) n’est effectué sans votre accord.
            Le déplacement et les conditions éventuelles (nuit/week-end) sont annoncés avant intervention. Une facture détaillée peut être fournie pour votre dossier assurance.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Prix annoncés avant déplacement</li>
            <li>✓ Devis confirmé sur place avant intervention</li>
            <li>✓ Remplacement uniquement avec validation client</li>
            <li>✓ Facture détaillée (assurance)</li>
          </ul>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Prix de départ par service</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-slate-900">
                  <span className="mr-2">{s.icon}</span>
                  {s.name}
                </p>
                <p className="mt-2 text-sm text-slate-700">{s.description}</p>
                <p className="mt-4 inline-flex rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold text-brand-navy">
                  {s.prix}
                </p>
                <div className="mt-4">
                  <Link className="text-sm font-semibold text-brand-navy hover:underline" href={`/${s.slug}`}>
                    Détails & devis →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tableau complet des tarifs (repères)</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Le prix final dépend de la configuration exacte. Ce tableau sert à vous donner une lecture simple: prestation, difficulté et contexte (jour/nuit/week-end). En cas de doute, appelez: on pose 3 questions et on annonce un prix estimé.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Prestation</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Difficulté</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Repère</th>
                  <th className="hidden px-4 py-3 font-semibold text-slate-900 md:table-cell">Remarques</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-slate-700">Ouverture porte claquée</td>
                  <td className="px-4 py-3 text-slate-700">Souvent simple</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">dès 89€</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Sans dégâts quand c’est possible</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Ouverture porte fermée à clé</td>
                  <td className="px-4 py-3 text-slate-700">Technique</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Dépend cylindre / multipoints / blindée</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Changement de cylindre</td>
                  <td className="px-4 py-3 text-slate-700">Courant</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">dès 149€</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Perte/vol de clés, sécurisation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Serrure multipoints (3/5 points)</td>
                  <td className="px-4 py-3 text-slate-700">Avancé</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Pose + réglages essentiels</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Blindage / renforts</td>
                  <td className="px-4 py-3 text-slate-700">Projet</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">dès 890€</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Selon porte/bâti/option A2P</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Vitrier urgence</td>
                  <td className="px-4 py-3 text-slate-700">Variable</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">dès 79€</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Surface, double vitrage, feuilleté</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Rideau métallique</td>
                  <td className="px-4 py-3 text-slate-700">Variable</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Remise en sécurité commerce</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Volet roulant</td>
                  <td className="px-4 py-3 text-slate-700">Variable</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">dès 129€</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">Attaches, axe, moteur, réglages</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Note: les repères ci-dessus sont indicatifs. Le devis final dépend de la configuration réelle (porte blindée, multipoints, accessibilité, matériel).
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Jour / nuit / week-end: comment ça marche ?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Certaines interventions en horaires décalés peuvent inclure une majoration (logistique, disponibilité). La règle qui ne change jamais: la condition est annoncée avant déplacement.
              Vous pouvez demander un prix total estimé (déplacement + main d’œuvre) et vérifier ce qui est inclus. Un serrurier sérieux vous répond clairement.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-900">Créneau</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Principe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Journée</td>
                    <td className="px-4 py-3 text-slate-700">Tarif standard annoncé</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Soir / nuit</td>
                    <td className="px-4 py-3 text-slate-700">Conditions annoncées avant déplacement</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Week-end / férié</td>
                    <td className="px-4 py-3 text-slate-700">Conditions annoncées avant déplacement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Niveau de difficulté (ce qui fait varier)</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              La difficulté n’est pas “arbitraire”: elle dépend de la fermeture (claquée/verrouillée), du type de serrure (simple/multipoints), du niveau de cylindre (standard/renforcé/A2P) et de l’état (grippé, cassé, effraction).
              C’est pourquoi deux demandes “ouverture de porte” peuvent avoir un tarif différent. Pour rester transparent, on vous explique les scénarios avant d’agir.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>✓ Porte claquée: souvent le cas le plus favorable</li>
              <li>✓ Porte verrouillée: méthode plus technique</li>
              <li>✓ Multipoints / blindée: réglages et contraintes</li>
              <li>✓ Effraction: mise en sécurité prioritaire</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Par type de serrure / porte (repères)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Porte standard",
                text: "Souvent compatible avec remplacement de cylindre simple. Bon rapport pour sécurisation après perte de clés.",
              },
              {
                title: "Porte blindée / multipoints",
                text: "Plus de contraintes: ancrages, réglages. La transparence consiste à annoncer clairement le scénario et le devis.",
              },
              {
                title: "Cylindre renforcé / A2P",
                text: "Améliore la résistance. À compléter par une protection de cylindre et des réglages cohérents.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Ce qui influence le prix</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Niveau de fermeture</p>
              <p className="mt-2 text-sm text-slate-700">
                Porte claquée vs fermée à clé, porte blindée, serrure multipoints… La méthode et le temps d’intervention varient.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Pièces</p>
              <p className="mt-2 text-sm text-slate-700">
                Cylindre standard ou haute sécurité/A2P, serrure complète, moteur (rideau/volet), vitrage… Le matériel impacte le budget.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Urgence / créneau</p>
              <p className="mt-2 text-sm text-slate-700">
                Nuit, week-end, jours fériés: on annonce les conditions avant déplacement pour rester transparent.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Accès</p>
              <p className="mt-2 text-sm text-slate-700">
                Parking souterrain, accès difficile, grande vitrine… l’accès peut allonger le temps de travail.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Besoin d’un prix immédiat ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Appelez-nous: on vous annonce le tarif selon votre situation. Devis gratuit avant intervention.
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

