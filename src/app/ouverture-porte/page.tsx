import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, serviceMeta } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/ouverture-porte" as const;

export function generateMetadata(): Metadata {
  return buildMetadata(
    serviceMeta({
      slug: "ouverture-porte",
      title: "Ouverture de Porte Val-de-Marne (94) | Dès 89€ · Intervention 20 min · 24h/24",
      description:
        "Ouverture de porte dans le Val-de-Marne (94): porte claquée, clé perdue, serrure bloquée. Intervention rapide, techniques sans dégâts quand c’est possible, devis gratuit et prix annoncés.",
    }),
  );
}

export default function Page() {
  const faq = [
    {
      q: "Quel est le prix d’une ouverture de porte dans le 94 ?",
      a: "Dès 89€ TTC en journée selon la configuration (porte claquée ou fermée à clé), le type de serrure et l’état du cylindre. Le tarif est annoncé avant intervention et confirmé sur place avant de commencer.",
    },
    {
      q: "Intervenez-vous pour une porte claquée (sans clé) ?",
      a: "Oui. Sur une porte simplement claquée (pêne demi‑tour), une ouverture sans dégâts est souvent possible selon le jeu de porte, le type de serrure et l’accessibilité. On privilégie toujours la solution la plus propre.",
    },
    {
      q: "Pouvez-vous ouvrir une porte fermée à clé ?",
      a: "Oui. La méthode dépend du cylindre, du niveau de sécurité (standard, renforcé, A2P), de la présence d’un protecteur de cylindre, et de l’état de la serrure. On explique les options et on valide le devis avant action.",
    },
    {
      q: "Combien de temps pour arriver dans le Val-de-Marne ?",
      a: `En moyenne ${SITE_CONFIG.delai} dans le 94, selon trafic et distance. Urgence 24h/24 7j/7.`,
    },
    {
      q: "Que faire si la clé est cassée dans la serrure ?",
      a: "N’essayez pas de forcer ni d’enfoncer un objet. Coupez les tentatives d’ouverture qui abîment le cylindre. Dans beaucoup de cas, une extraction propre est possible: on vous guide au téléphone et on intervient rapidement.",
    },
    {
      q: "L’ouverture sans dégâts est-elle garantie ?",
      a: "Non, car cela dépend de la serrure (simple/multipoints), du cylindre (standard/haute sécurité), de l’état mécanique et de la fermeture (claquée vs verrouillée). On vous explique le scénario le plus probable et le devis est validé avant toute action.",
    },
    {
      q: "Faites-vous une facture pour l’assurance ?",
      a: "Oui. Nous pouvons fournir une facture détaillée avec la nature de l’intervention et les références du matériel si remplacement.",
    },
    {
      q: "Intervenez-vous la nuit, le week-end et jours fériés ?",
      a: "Oui, 24h/24 7j/7. Les conditions tarifaires sont annoncées avant déplacement.",
    },
    {
      q: "Dois-je changer la serrure après une ouverture de porte ?",
      a: "Pas forcément. Si la porte était claquée et que l’ouverture est réalisée proprement, il n’y a souvent aucun remplacement. En revanche, en cas de perte/vol de clés, remplacer le cylindre est généralement conseillé pour la sécurité.",
    },
    {
      q: "Pouvez-vous intervenir en parking sous-sol ou accès difficile ?",
      a: "Oui. Nous intervenons aussi en accès contraints (parking souterrain, résidence fermée, immeuble ancien). Il suffit de le préciser à l’appel pour anticiper l’accès et limiter l’attente.",
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
          name: "Ouverture de porte Val-de-Marne (94)",
          description:
            "Ouverture de porte claquée ou fermée à clé, extraction de clé cassée, dépannage serrure bloquée. Devis gratuit, prix annoncés, intervention 24h/24 7j/7 dans le 94.",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "Services", path: "/#services" }, { name: "Ouverture de porte", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link className="hover:underline" href="/#services">
            Services
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Ouverture de porte</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Ouverture de Porte Val-de-Marne (94) | Dès 89€ · Intervention 20 min
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Porte claquée, clé perdue, serrure bloquée: quand on se retrouve dehors, chaque minute compte. Notre service d’ouverture de porte dans le Val-de-Marne (94) est pensé pour être{" "}
          <strong>rapide</strong>, <strong>transparent</strong> sur le prix et <strong>propre</strong> dans l’exécution. Dans beaucoup de cas, une ouverture{" "}
          <strong>sans dégâts</strong> est possible (selon la configuration de la porte et de la serrure) et permet de retrouver l’accès à votre logement ou local sans remplacement inutile. Si vous cherchez un{" "}
          <strong>serrurier val-de-marne</strong> capable d’intervenir en urgence, avec un tarif clair, vous êtes au bon endroit: nous traitons les demandes{" "}
          <strong>serrurier 94 urgence</strong> 24h/24, avec devis gratuit et prix annoncés avant intervention.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={SITE_CONFIG.phoneHref}
            className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
          >
            📞 Urgence : {SITE_CONFIG.phone}
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-semibold text-slate-900"
          >
            Devis gratuit →
          </Link>
        </div>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h2 className="text-lg font-semibold text-slate-900">Cas fréquents d’ouverture de porte</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700">
              <li>
                <strong>Porte claquée</strong>: vous avez laissé les clés à l’intérieur, le pêne demi-tour est engagé.
              </li>
              <li>
                <strong>Clé perdue / volée</strong>: ouverture + sécurisation (recommandé: remplacement cylindre).
              </li>
              <li>
                <strong>Clé cassée</strong>: extraction de la clé + remise en service du cylindre si possible.
              </li>
              <li>
                <strong>Serrure bloquée</strong>: mécanisme grippé, cylindre usé, tentative d’effraction.
              </li>
              <li>
                <strong>Porte blindée</strong>: intervention adaptée au niveau de sécurité et à la marque.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Dans le 94, l’<strong>ouverture porte Val-de-Marne</strong> est l’intervention la plus demandée: oubli de clés en sortant, clé cassée dans un cylindre fatigué, verrou multipoints qui accroche, ou porte qui se met à frotter après un changement de saison. Notre approche est de diagnostiquer vite, de choisir la méthode la plus propre, et d’annoncer le prix clairement. C’est la base d’un service de <strong>serrurier val-de-marne</strong> fiable.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Méthodes: priorité à l’ouverture propre</h2>
            <p className="mt-3 text-sm text-slate-700">
              Chaque situation est différente. L’objectif est d’ouvrir la porte en respectant le matériel et en évitant les remplacements inutiles. Selon la porte, le cylindre et l’état de la serrure, on peut utiliser des techniques non destructives (quand elles sont pertinentes) ou, si nécessaire, une méthode permettant de retrouver une fermeture fiable et sécurisée.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              En pratique, une <strong>porte claquée</strong> (sans verrouillage) est souvent l’un des cas les plus favorables pour une ouverture sans dégâts. À l’inverse, une porte{" "}
              <strong>fermée à clé</strong> avec un cylindre haute sécurité, ou une serrure endommagée par une tentative d’effraction, peut exiger une intervention plus technique.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Notre promesse: vous expliquer ce qui se passe. Un dépannage réussi, ce n’est pas seulement “ouvrir”, c’est <strong>ouvrir puis rétablir une fermeture saine</strong> (porte alignée, pêne qui coulisse, cylindre qui tourne sans forcer). C’est aussi ce qui évite de rappeler un <strong>serrurier 94 urgence</strong> la semaine suivante pour une porte qui accroche.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Causes d’une porte claquée: comprendre (et agir)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Les causes les plus courantes</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Une porte claquée arrive vite: un courant d’air, un sac de courses, un enfant qui ferme, ou simplement l’habitude de sortir “deux minutes”. Le pêne demi‑tour s’engage et la porte se verrouille mécaniquement sans la clé. Dans le Val-de-Marne, on voit aussi des portes qui claquent parce qu’elles ferment trop “nerveusement” (réglage de ferme‑porte, porte lourde, paumelles qui tirent). Parfois, la poignée est fatiguée: vous croyez l’avoir tenue, mais elle remonte mal et la porte se referme.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                La bonne nouvelle: quand c’est uniquement une porte claquée (pas verrouillée), on peut souvent envisager une <strong>ouverture porte Val-de-Marne</strong> propre, sans remplacement. Mais chaque porte est différente: jeu de porte, type de pêne, présence d’un joint, configuration d’immeuble… D’où l’intérêt de décrire précisément la situation au téléphone pour un devis clair.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Ce qu’il ne faut pas faire</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Les tentatives “maison” aggravent souvent le problème: carte rigide qui abîme le joint, tournevis qui marque le chant, forçage de poignée qui tord le mécanisme. Résultat: une situation simple devient une réparation. Si vous cherchez un <strong>serrurier pas cher 94</strong>, le meilleur moyen d’y arriver est d’éviter d’endommager la porte. Notre conseil est simple: ne forcez pas, sécurisez-vous, puis appelez pour un diagnostic rapide. Un serrurier val-de-marne sérieux vous demandera: porte claquée ou fermée à clé ? porte blindée ? multipoints ? clé cassée ?
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Et si vous êtes en urgence (soir, nuit, week-end), c’est justement le moment de choisir un prestataire transparent: un <strong>serrurier 94 urgence</strong> doit annoncer le tarif avant déplacement et confirmer sur place.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Notre méthode sans dégâts expliquée (quand c’est possible)
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Objectif: ouvrir proprement</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Une ouverture “sans dégâts” signifie: porte et serrure conservées, pas de perçage inutile, pas de détérioration du chant ni du bâti. Pour y arriver, on commence par un diagnostic: type de fermeture (claquée ou verrouillée), type de serrure (simple/multipoints), niveau de cylindre (standard/renforcé/A2P), état visible (traces d’effraction, jeu de porte).
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Ensuite, on choisit la méthode la plus adaptée. Sur une porte claquée, c’est souvent le cas le plus favorable à une ouverture propre. Sur une porte verrouillée avec un cylindre très résistant, la priorité est de vous expliquer les scénarios, puis de sécuriser durablement (parfois via remplacement de cylindre). Le maître-mot reste la transparence: devis validé avant action.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Après l’ouverture: contrôle & conseils</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Ouvrir, c’est bien. S’assurer que la porte refonctionne correctement, c’est essentiel. Après une ouverture porte Val-de-Marne, on vérifie que la clé tourne sans forcer, que la poignée revient, que le pêne coulisse, et que la porte se ferme proprement. Si la clé a été perdue ou volée, on recommande souvent de remplacer le cylindre pour éviter toute mauvaise surprise.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Et si votre objectif est de renforcer, on peut proposer une solution cohérente (cylindre renforcé, protection, multipoints) plutôt qu’un remplacement systématique. C’est aussi comme ça qu’on reste un <strong>serrurier pas cher 94</strong>: faire le nécessaire, rien de plus.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Types de serrures qu’on ouvre (94)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Serrure simple, 3 points, 5 points</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Nous intervenons sur les serrures courantes (un point) et sur les serrures multipoints (3/5 points). La multipoints améliore la résistance à l’effraction, mais rend l’ouverture plus technique si la porte est verrouillée. Dans tous les cas, le diagnostic initial (porte claquée vs verrouillée, jeu, alignement) permet de proposer la méthode la plus propre et le devis le plus fiable.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Sur les portes d’immeubles anciens (très fréquent en Val-de-Marne), un décalage peut faire “accrocher” le mécanisme. Une ouverture réussie doit aussi rétablir un fonctionnement fluide (réglage, conseils) pour éviter les récidives.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Cylindres standard, renforcés, A2P</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Le cylindre (barillet) est le cœur de la sécurité. Un cylindre renforcé ou A2P résiste mieux aux attaques (perçage, arrachement) et peut être recommandé après effraction ou si l’assurance l’exige. Pour une ouverture porte Val-de-Marne, cela signifie surtout que le scénario peut varier: parfois une ouverture propre est possible, parfois la sécurisation passe par un remplacement de cylindre.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Notre règle est simple: pas de remplacement “par défaut”. On explique la situation et on valide le prix avec vous. C’est l’approche d’un <strong>serrurier agréé Val-de-Marne</strong> orienté solution.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tableau des prix selon difficulté (indicatif)</h2>
          <p className="mt-3 text-sm text-slate-700">
            Le prix d’une ouverture dépend surtout du niveau de fermeture (porte claquée ou fermée à clé), du type de serrure et de l’état du mécanisme. Pour éviter toute surprise, nous annonçons le tarif avant déplacement sur la base des informations que vous nous donnez. Une fois sur place, si la configuration diffère fortement (ex: porte blindée multipoints au lieu d’une serrure simple), nous ré-annonçons clairement le devis avant de commencer.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Situation</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Complexité</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Repère</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-slate-700">Porte claquée (pêne demi‑tour)</td>
                  <td className="px-4 py-3 text-slate-700">Souvent simple</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">dès 89€</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Porte fermée à clé (serrure standard)</td>
                  <td className="px-4 py-3 text-slate-700">Technique</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Clé cassée (extraction)</td>
                  <td className="px-4 py-3 text-slate-700">Variable</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Porte blindée / multipoints</td>
                  <td className="px-4 py-3 text-slate-700">Avancé</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Déplacement dans le Val-de-Marne</li>
            <li>✓ Diagnostic sur place</li>
            <li>✓ Ouverture de porte avec la méthode la plus adaptée</li>
            <li>✓ Conseils de sécurisation (cylindre, renforts, A2P)</li>
            <li>✓ Facture disponible (assurance)</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Situations particulières: parking sous-sol, porte blindée, nuit</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Accès difficile</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Parking sous-sol, résidence fermée, interphone, portail, ascenseur en panne… Ce n’est pas un problème, mais il faut l’anticiper. Donnez l’info dès l’appel: cela permet d’arriver plus vite et d’éviter une attente inutile. Un serrurier val-de-marne efficace prépare l’accès autant que l’intervention.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-sm font-semibold text-slate-900">Porte blindée / multipoints</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Sur une porte blindée, la sécurité est meilleure, mais l’ouverture peut demander une approche spécifique. L’objectif reste de limiter la casse et de rétablir une fermeture fiable. On explique toujours les scénarios et on valide le devis avant d’agir, surtout en <strong>serrurier 94 urgence</strong>.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Nuit / week-end</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                La nuit, le besoin est immédiat. Notre règle ne change pas: prix annoncé avant déplacement, pas de pression, et intervention propre. Si une majoration s’applique selon l’horaire, elle est expliquée clairement. C’est essentiel pour rester un <strong>serrurier pas cher 94</strong> au sens de la transparence.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Témoignages clients (94)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Karim B.",
                ville: "Créteil",
                text: "Porte claquée un dimanche soir. Arrivée rapide, ouverture propre, tarif annoncé respecté. Très pro.",
              },
              {
                name: "Sophie L.",
                ville: "Fontenay-sous-Bois",
                text: "Clé cassée dans la serrure. Extraction + remise en service, explications claires et facture pour assurance.",
              },
              {
                name: "Ahmed S.",
                ville: "Vitry-sur-Seine",
                text: "Serrure bloquée en rentrant. Dépannage efficace, pas de remplacement inutile. Je recommande.",
              },
              {
                name: "Marie-Claire D.",
                ville: "Vincennes",
                text: "Porte blindée qui accroche, ouverture + réglage. Travail propre et rassurant, prix clair.",
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Nos villes les plus demandées</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Pour un service local, consultez nos pages “serrurier + ville” (quartiers, délais, services, FAQ). Cela aide aussi à préparer un devis clair si vous êtes en <strong>serrurier 94 urgence</strong>.
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Conseils rapides avant d’appeler</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Ne forcez pas</p>
              <p className="mt-2 text-sm text-slate-700">
                Forcer la poignée ou insérer un objet peut abîmer le cylindre et rendre l’ouverture plus complexe (et plus coûteuse).
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Décrivez la situation</p>
              <p className="mt-2 text-sm text-slate-700">
                Porte claquée ou fermée à clé ? Porte blindée ? Clé cassée ? Ces infos permettent d’annoncer un prix fiable.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Demandez un devis</p>
              <p className="mt-2 text-sm text-slate-700">
                Un devis gratuit et annoncé avant intervention, c’est la base pour éviter les mauvaises surprises.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ ouverture de porte (94)</h2>
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
          <h2 className="text-2xl font-bold tracking-tight">Besoin d’une ouverture de porte maintenant ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Intervention rapide Val-de-Marne (94). Prix annoncés avant intervention. Appelez pour une prise en charge immédiate.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={SITE_CONFIG.phoneHref}
              className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
            >
              📞 {SITE_CONFIG.phone}
            </Link>
            <Link
              href="/urgence-serrurier"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white"
            >
              Voir la page urgence →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

