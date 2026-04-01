import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, serviceMeta } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/changement-serrure" as const;

export function generateMetadata(): Metadata {
  return buildMetadata(
    serviceMeta({
      slug: "changement-serrure",
      title: "Changement de Serrure Val-de-Marne (94) | Dès 149€ · Intervention 20 min · 24h/24",
      description:
        "Changement de serrure dans le 94: remplacement cylindre, serrure 3/5 points, options A2P. Marques (Fichet, Mul-T-Lock, Picard, JPM). Devis gratuit, pose soignée, facture assurance.",
    }),
  );
}

export default function Page() {
  const faq = [
    {
      q: "Quand faut-il changer une serrure ?",
      a: "Après perte/vol de clés, tentative d’effraction, cylindre usé (clé qui accroche, rotation dure), serrure bloquée ou pour augmenter la sécurité (cylindre renforcé, protection, A2P, multipoints). Le bon choix dépend aussi de la porte et du bâti.",
    },
    {
      q: "Changez-vous seulement le cylindre ou toute la serrure ?",
      a: "Selon le diagnostic. Un changement de cylindre suffit souvent (perte de clés, sécurisation simple). Si le mécanisme est fatigué, si la serrure a été forcée, ou si vous passez en multipoints, remplacer la serrure complète devient plus pertinent et plus durable.",
    },
    {
      q: "Proposez-vous des serrures 3 points et 5 points ?",
      a: "Oui. Nous posons des serrures multipoints 3/5 points en applique ou encastrées, adaptées à votre porte (bois, PVC, alu, porte blindée). Le choix dépend de l’usage, de la hauteur de porte, de l’alignement et des contraintes copropriété/assurance.",
    },
    {
      q: "Quelles marques installez-vous ?",
      a: "Nous travaillons notamment avec Fichet, Mul‑T‑Lock, Picard, JPM, ainsi que d’autres marques compatibles selon votre budget et votre porte.",
    },
    {
      q: "Est-ce utile de passer en A2P ?",
      a: "Souvent oui: meilleure résistance à l’effraction et parfois exigence assurance. On vous conseille le niveau adapté (A2P* / ** / ***) selon le risque, votre type de logement (étage/rez-de-chaussée) et l’état de la porte/bâti. L’A2P est utile quand le reste (pose, réglage) est cohérent.",
    },
    {
      q: "Quel est le prix d’un changement de serrure dans le 94 ?",
      a: "Dès 149€ selon le type (cylindre/serrure), la marque, le niveau de sécurité (standard/renforcé/A2P), la présence d’un protecteur, et la complexité de pose. Devis gratuit avant intervention, prix annoncé et confirmé avant travaux.",
    },
    {
      q: "Fournissez-vous une facture pour assurance ?",
      a: "Oui, avec les références du matériel posé et le détail de l’intervention.",
    },
    {
      q: "Intervenez-vous en urgence ?",
      a: `Oui, 24h/24 7j/7, avec un délai moyen de ${SITE_CONFIG.delai} dans le Val-de-Marne.`,
    },
    {
      q: "Puis-je changer la serrure en location ?",
      a: "En location, le locataire peut généralement remplacer le cylindre/serrure pour sa sécurité. Selon les règles du bail et la situation, il est souvent demandé de remettre un double au propriétaire à la fin ou selon accord. En cas d’urgence (effraction), on privilégie d’abord la mise en sécurité.",
    },
    {
      q: "Combien de temps prend un changement de serrure ?",
      a: "Cela dépend du type (cylindre vs serrure complète, multipoints). Un cylindre peut être remplacé rapidement si l’accès est simple. Une multipoints demande plus de réglages pour une fermeture fluide. Dans tous les cas, on teste la manœuvre et l’alignement avant de clôturer l’intervention.",
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
          name: "Changement de serrure Val-de-Marne (94)",
          description:
            "Remplacement de cylindre, serrure complète, multipoints 3/5 points, options A2P. Devis gratuit, facture assurance, intervention 24h/24 7j/7 dans le 94.",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "Services", path: "/#services" }, { name: "Changement de serrure", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link className="hover:underline" href="/#services">
            Services
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Changement de serrure</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Changement de Serrure Val-de-Marne (94) | Toutes Marques · Devis Gratuit
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Un changement de serrure se décide souvent dans l’urgence (clés perdues, effraction) mais aussi dans une logique de{" "}
          <strong>sécurisation durable</strong>. Dans le Val-de-Marne (94), nous remplaçons cylindres et serrures complètes, en proposant des options{" "}
          <strong>multipoints</strong> et <strong>A2P</strong> adaptées à votre porte et à votre budget. Le principe reste le même:{" "}
          <strong>devis gratuit</strong>, prix annoncé, pose soignée, et remise d’une facture si besoin (assurance).
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Si vous cherchez un <strong>serrurier val-de-marne</strong> pour un <strong>changement serrure 94</strong>, l’objectif est simple: rétablir une fermeture fiable, améliorer la sécurité si nécessaire, et éviter les dépenses inutiles. Une serrure haut de gamme n’a de valeur que si la porte et le bâti suivent, et si la pose est parfaitement réglée (porte qui ferme sans forcer, pênes alignés, tringles correctement ajustées). C’est ce qui fait la différence entre une sécurisation durable et une panne récurrente.
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
            Demander un devis →
          </Link>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Les raisons les plus fréquentes</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700">
              <li>
                <strong>Perte / vol de clés</strong>: éviter tout risque qu’une clé retrouvée serve à entrer.
              </li>
              <li>
                <strong>Tentative d’effraction</strong>: cylindre endommagé, porte fragilisée, besoin de mise en sécurité.
              </li>
              <li>
                <strong>Serrure vieillissante</strong>: clé qui accroche, mécanisme dur, jeux dans la porte.
              </li>
              <li>
                <strong>Montée en sécurité</strong>: passer d’une serrure simple à une multipoints, ou vers une serrure certifiée A2P.
              </li>
              <li>
                <strong>Changement de locataire</strong>: repartir sur un jeu de clés maîtrisé (selon accord propriétaire/locataire).
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h2 className="text-lg font-semibold text-slate-900">Cylindre ou serrure complète ?</h2>
            <p className="mt-3 text-sm text-slate-700">
              Dans de nombreux cas, remplacer le <strong>cylindre</strong> suffit: la porte retrouve un verrouillage fiable avec un nouveau jeu de clés.
              En revanche, si le mécanisme interne est usé, si vous souhaitez une multipoints, ou si la serrure a été forcée, un remplacement{" "}
              <strong>complet</strong> est souvent plus pertinent. L’objectif est de concilier sécurité, durabilité et coût, sans surdimensionner.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Pour un logement, on vise souvent un bon compromis: cylindre protégé, clé réversible, et niveau de sécurité cohérent avec la porte, l’immeuble et la zone.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Repère rapide: après <strong>perte/vol</strong>, changer le cylindre est souvent suffisant. Après <strong>effraction</strong>, on évalue aussi le bâti, la gâche, et les points faibles (arrachement, perçage) pour décider s’il faut renforcer (protection de cylindre, multipoints, option A2P). Un serrurier val-de-marne sérieux explique la logique avant de proposer une solution.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Quand changer sa serrure (et quand un cylindre suffit)
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Cas où le changement est recommandé</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                On recommande un changement serrure 94 (cylindre ou serrure complète) quand la sécurité est compromise ou quand le fonctionnement devient aléatoire. Exemples: clés perdues/volées, cylindre grippé, rotation dure, serrure qui accroche, mécanisme multipoints déréglé, ou tentative d’effraction. L’objectif n’est pas de “vendre”, c’est de retrouver une fermeture fiable et d’éviter une nouvelle urgence.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                En logement, un cylindre neuf + clés contrôlées suffit souvent après perte de clés. En revanche, si le mécanisme interne est usé (pêne qui ne sort plus bien, tringles), remplacer la serrure complète évite de payer deux fois.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Cas où il vaut mieux diagnostiquer d’abord</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Parfois, le problème vient d’un réglage de porte: porte affaissée, bâti qui travaille, gâche déréglée. Dans ces cas, remplacer la serrure ne règle pas tout. On commence par vérifier l’alignement, le jeu, la manœuvre et l’état des points de fermeture. Un serrurier val-de-marne efficace cherche d’abord la cause, puis propose la solution la plus durable.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Si l’assurance est concernée (effraction/vol), la décision se prend aussi avec une logique “dossier”: facture détaillée, références, et matériel cohérent (souvent cylindre renforcé + protection, parfois multipoints).
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Types de serrures disponibles (détails techniques)
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Serrure 3 points</h3>
              <p className="mt-2 text-sm text-slate-700">
                Répartition des points de fermeture (haut/milieu/bas) pour une meilleure tenue de porte. C’est un standard efficace pour beaucoup de portes d’appartement. La pose demande un réglage précis: si la porte force, l’usure augmente. On vérifie donc l’alignement et la gâche, puis on règle la fermeture.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Serrure 5 points</h3>
              <p className="mt-2 text-sm text-slate-700">
                Ajoute des ancrages pour augmenter la résistance et répartir l’effort sur la hauteur. Elle se justifie quand la porte/bâti sont solides et quand le besoin est réel (rez-de-chaussée, accès exposé, antécédent). Une 5 points mal réglée devient vite inconfortable: le réglage fait partie de la qualité.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Serrure connectée</h3>
              <p className="mt-2 text-sm text-slate-700">
                Confort (codes, badges, gestion à distance), utile en location courte durée ou en famille. La sécurité dépend du modèle et de l’installation. On conseille toujours une base mécanique solide: cylindre de qualité, protection, et porte correctement réglée. On vous guide sur l’équilibre confort/sécurité.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">En applique vs encastrée</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Une serrure en applique est visible sur la porte: souvent pratique en rénovation et sur certaines portes. Une serrure encastrée est intégrée dans l’épaisseur de la porte: plus discrète, mais dépend fortement de la compatibilité. Le choix se fait selon le type de porte, l’état, et la faisabilité. Un changement serrure 94 réussi commence par ces contraintes.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Cylindre: le cœur de la sécurité</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Le cylindre (barillet) est la pièce la plus ciblée. Un cylindre renforcé ou certifié A2P améliore la résistance au perçage et à l’arrachement. Pour être cohérent, on complète souvent par une protection (défenseur/rosace) et par des réglages de fermeture. C’est la combinaison qui fait la différence dans la vraie vie.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Marques & niveau de sécurité (Fichet, Mul‑T‑Lock, Picard, JPM…)</h2>
          <p className="mt-3 text-sm text-slate-700">
            Nous intervenons sur de nombreuses marques. Sur demande, nous pouvons proposer des références reconnues (Fichet, Mul‑T‑Lock, Picard, JPM) ou une alternative plus économique.
            Le choix se fait selon: type de porte, entraxe, épaisseur, dimension du cylindre, et niveau de sécurité souhaité. L’important est une pose correcte: une excellente serrure mal posée perd vite son intérêt.
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Pour les assurances, la certification <strong>A2P</strong> est un repère utile. On vous indique clairement si un produit est certifié et ce que cela change pour votre protection.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Sur le terrain, on distingue trois objectifs: <strong>sécuriser après incident</strong> (priorité à la remise en fermeture), <strong>monter en gamme</strong> (résistance + confort), et <strong>répondre à une exigence assurance</strong> (A2P, facture détaillée, références). Un serrurier val-de-marne sérieux vous aide à choisir selon votre contexte, pas selon une “option unique”.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Prix détaillés par type de serrure (repères)</h2>
          <p className="mt-4 max-w-3xl text-sm text-slate-700">
            Le budget d’un changement de serrure dépend du matériel (cylindre vs serrure), du niveau (standard, renforcé, A2P), et du temps de pose. Pour rester clair, on fonctionne par devis annoncé:
            vous savez ce qui est remplacé, pourquoi, et à quel prix. En cas d’urgence (après effraction), on peut aussi proposer une mise en sécurité immédiate puis une montée en gamme ensuite.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Usage</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Repère</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-slate-700">Changement de cylindre</td>
                  <td className="px-4 py-3 text-slate-700">Perte/vol, sécurisation</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">dès 149€</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Cylindre renforcé + protection</td>
                  <td className="px-4 py-3 text-slate-700">Montée en sécurité</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Serrure multipoints 3 points</td>
                  <td className="px-4 py-3 text-slate-700">Sécurité + tenue</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Serrure multipoints 5 points</td>
                  <td className="px-4 py-3 text-slate-700">Sécurité renforcée</td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">sur devis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Solution économique: remplacement cylindre standard (si compatible)</li>
            <li>✓ Solution sécurité: cylindre renforcé + protection (défenseur)</li>
            <li>✓ Solution premium: serrure multipoints + A2P (selon porte)</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Process d’intervention étape par étape</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1) Diagnostic & compatibilité",
                text: "On identifie le besoin (sécurisation, remplacement, montée en gamme) et on vérifie la compatibilité: épaisseur de porte, entraxe, type (applique/encastrée), multipoints, état du bâti.",
              },
              {
                title: "2) Devis annoncé & validé",
                text: "Le tarif est annoncé avant de commencer. Tout remplacement est validé par vous (cylindre, serrure complète, protection).",
              },
              {
                title: "3) Pose + réglages",
                text: "On pose, puis on règle: fermeture fluide, pênes alignés, poignée et clé sans forcer. On termine par un test complet et une facture si besoin (assurance).",
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Prise en charge assurance (explications simples)</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Après effraction, vandalisme ou vol de clés (selon contrat), l’assurance peut prendre en charge une partie des frais. Ce qui compte: des preuves (photos), une déclaration si demandée,
            et une facture détaillée. Nous fournissons les documents utiles: devis, facture, et références du matériel posé. En urgence, on peut faire une mise en sécurité immédiate, puis planifier
            une montée en gamme ensuite si besoin. Le but est de rester efficace, transparent, et cohérent.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Témoignages clients (94)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Marie-Claire D.",
                ville: "Vincennes",
                text: "Changement de cylindre après perte de clés. Devis clair, pose rapide, fermeture fluide. Très pro.",
              },
              {
                name: "Samir K.",
                ville: "Ivry-sur-Seine",
                text: "Serrure 3 points posée sur une porte d’appartement. Réglages soignés, explications, aucun forçage.",
              },
              {
                name: "Nadia P.",
                ville: "Créteil",
                text: "Après tentative d’effraction, mise en sécurité le soir même + facture assurance. Rassurant et transparent.",
              },
              {
                name: "Olivier R.",
                ville: "Saint-Maur-des-Fossés",
                text: "Passage en cylindre renforcé + protection. Bon conseil, pas de survente, résultat solide.",
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
            Consultez la page de votre commune pour des repères locaux (quartiers, délais, FAQ) avant votre changement serrure 94.
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ changement de serrure (94)</h2>
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
          <h2 className="text-2xl font-bold tracking-tight">Changement de serrure urgent ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Après perte de clés ou effraction, on sécurise rapidement. Devis gratuit, intervention 94, facture possible pour assurance.
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
              Urgence serrurier 94 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

