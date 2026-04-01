import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG, SERVICES, VILLES_94 } from "@/lib/constants";
import { buildMetadata, serviceMeta } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/urgence-serrurier" as const;

export function generateMetadata(): Metadata {
  return buildMetadata(
    serviceMeta({
      slug: "urgence-serrurier",
      title: "Serrurier Urgence Val-de-Marne (94) | Intervention 20 min · 24h/24",
      description:
        "Serrurier urgence 94: porte claquée, serrure bloquée, clé cassée, cambriolage, rideau métallique, vitrerie. Intervention rapide 24h/24 7j/7, devis gratuit et prix annoncés.",
    }),
  );
}

export default function Page() {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;

  const faq = [
    {
      q: "Quel est le délai d’intervention d’un serrurier urgence 94 ?",
      a: `En moyenne ${SITE_CONFIG.delai} selon trafic et distance. On vous annonce le délai estimé au téléphone et on priorise les mises en sécurité (porte impossible à fermer, effraction).`,
    },
    {
      q: "Quel est le prix d’un serrurier urgence dans le Val-de-Marne ?",
      a: "Le prix dépend du scénario (porte claquée, porte fermée à clé, serrure bloquée, effraction). Nous annonçons le tarif avant déplacement et nous le confirmons sur place avant intervention.",
    },
    {
      q: "Intervenez-vous la nuit, week-end et jours fériés ?",
      a: "Oui, 24h/24 7j/7. Les conditions tarifaires sont annoncées avant déplacement pour éviter toute surprise.",
    },
    {
      q: "Ouverture de porte: sans casse, c’est garanti ?",
      a: "On privilégie toujours l’ouverture la plus propre possible, mais cela dépend de la fermeture (claquée/verrouillée), du cylindre (standard/renforcé/A2P) et de l’état de la serrure. On explique les scénarios avant d’agir.",
    },
    {
      q: "Après cambriolage, que faites-vous en premier ?",
      a: "On priorise la mise en sécurité: fermeture fiable, remplacement cylindre/serrure si nécessaire, puis conseils de renfort/blindage. On peut fournir facture et références matériel pour l’assurance.",
    },
    {
      q: "Dois-je changer la serrure après une ouverture ?",
      a: "Pas forcément. Si la porte est claquée et l’ouverture est propre, aucun remplacement n’est souvent nécessaire. En cas de perte/vol de clés, remplacer le cylindre est généralement recommandé.",
    },
    {
      q: "Comment éviter les faux serruriers en urgence ?",
      a: "Demandez un prix total estimé avant déplacement, vérifiez l’identité, refusez toute pression pour remplacer, et exigez une facture détaillée. Un professionnel sérieux annonce et confirme le devis avant travaux.",
    },
    {
      q: "Acceptez-vous la carte bancaire ?",
      a: "Selon intervention, oui. Nous pouvons aussi accepter espèces. Une facture détaillée est disponible si besoin (assurance).",
    },
    {
      q: "Intervenez-vous sur portes blindées et multipoints ?",
      a: "Oui. On adapte l’intervention à la marque, au niveau de sécurité et au mécanisme. L’objectif reste de sécuriser durablement et de conserver une fermeture fluide.",
    },
    {
      q: "Pouvez-vous intervenir en accès difficile (parking, résidence fermée) ?",
      a: "Oui. Indiquez-le à l’appel (interphone, code, parking sous-sol) pour éviter l’attente et faciliter l’accès.",
    },
  ] as const;

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <JsonLd
        data={serviceJsonLd({
          pageUrl,
          name: "Serrurier urgence Val-de-Marne (94)",
          description:
            "Urgence serrurerie 24h/24 7j/7: ouverture de porte, clé cassée, serrure bloquée, mise en sécurité après effraction, rideau métallique, vitrier urgence. Prix annoncés, devis gratuit.",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "Urgence", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Urgence serrurier 94</span>
        </nav>

        <div className="mt-6 rounded-3xl bg-brand-navy p-8 text-white">
          <p className="text-xs font-semibold text-white/90">24h/24 · 7j/7 · Val-de-Marne (94)</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Serrurier Urgence Val-de-Marne 94 | On arrive en {SITE_CONFIG.delai}
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-white/90">
            Porte claquée, clé cassée, serrure bloquée, cambriolage: on intervient vite. Prix annoncés avant intervention, devis gratuit, facture assurance. Si vous cherchez un <strong>serrurier 94 urgence</strong> fiable, notre méthode est simple: diagnostic, devis confirmé, intervention propre et sécurisée.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={SITE_CONFIG.phoneHref}
              className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
            >
              📞 Appeler maintenant : {SITE_CONFIG.phone}
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white"
            >
              Devis gratuit →
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/90">
            Délai moyen: <strong>{SITE_CONFIG.delai}</strong> • {SITE_CONFIG.rating.toFixed(1)}/5 • {SITE_CONFIG.reviewCount} avis
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Que dire au téléphone (pour un devis clair)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1) Type de fermeture",
                text: "Porte claquée ou fermée à clé ? Porte blindée ? Serrure multipoints ? Ce point détermine la méthode et le prix.",
              },
              {
                title: "2) Symptôme exact",
                text: "Clé cassée, serrure bloquée, tentative d’effraction, rideau métallique bloqué… Plus c’est précis, plus l’estimation est fiable.",
              },
              {
                title: "3) Accès & urgence",
                text: "Résidence fermée, parking sous-sol, commerce à sécuriser: indiquez l’accès et si vous êtes bloqué ouvert/fermé.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-slate-900">{s.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Urgences les plus fréquentes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-900">Porte claquée</p>
              <p className="mt-2 text-sm text-slate-700">
                Ouverture rapide, sans dégâts quand c’est possible. On annonce le prix avant intervention.
              </p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-brand-navy hover:underline" href="/ouverture-porte">
                Voir ouverture de porte →
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-900">Serrure bloquée / clé cassée</p>
              <p className="mt-2 text-sm text-slate-700">
                Extraction, dépannage, puis sécurisation si nécessaire (cylindre, serrure).
              </p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-brand-navy hover:underline" href="/changement-serrure">
                Voir changement de serrure →
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-900">Après cambriolage</p>
              <p className="mt-2 text-sm text-slate-700">
                Mise en sécurité immédiate, remplacement serrure/cylindre, options A2P et renforts.
              </p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-brand-navy hover:underline" href="/blindage-porte">
                Voir blindage de porte →
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Anti-arnaques: reconnaître un vrai serrurier</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            En urgence, vous êtes vulnérable. Les abus viennent presque toujours d’un devis flou ou de remplacements imposés. Voici nos règles simples: prix annoncé avant déplacement, devis confirmé sur place, aucun remplacement sans votre accord, et facture détaillée. Un serrurier val-de-marne sérieux vous explique la méthode avant d’agir.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Demandez un prix total estimé (déplacement inclus)</li>
            <li>✓ Décrivez précisément: claquée / fermée à clé / blindée / multipoints</li>
            <li>✓ Refusez les “il faut tout changer” sans diagnostic</li>
            <li>✓ Exigez une facture détaillée (utile assurance)</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tous les services (94)</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm shadow-sm transition hover:border-slate-300"
              >
                <p className="font-semibold text-slate-900">
                  <span className="mr-2">{s.icon}</span>
                  {s.name}
                </p>
                <p className="mt-1 text-xs text-slate-600">{s.description}</p>
                <p className="mt-3 text-xs font-semibold text-brand-navy">{s.prix}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Villes les plus demandées (urgence)</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Pour gagner du temps, consultez votre page locale: quartiers, délais estimés et services. En urgence, ça aide aussi à clarifier l’accès et le contexte.
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Zones couvertes dans le Val-de-Marne</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-700">
            Intervention sur {VILLES_94.length} villes du 94. Choisissez votre ville pour une page locale dédiée (quartiers, délais, FAQ, services).
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {VILLES_94.map((v) => (
              <Link
                key={v.slug}
                href={`/serrurier-${v.slug}`}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:text-brand-navy"
              >
                {v.name} <span className="text-xs font-medium text-slate-500">({v.cp})</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ urgence serrurier 94</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <details key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Besoin d’un serrurier tout de suite ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Appel = diagnostic + prix annoncé + intervention rapide. Urgence 24h/24 7j/7 dans le Val-de-Marne.
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

