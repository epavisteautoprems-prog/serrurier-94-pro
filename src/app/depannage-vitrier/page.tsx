import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, serviceMeta } from "@/lib/seo";
import { faqPageJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/depannage-vitrier" as const;

export function generateMetadata(): Metadata {
  return buildMetadata(
    serviceMeta({
      slug: "depannage-vitrier",
      title: "Vitrier Urgence Val-de-Marne (94) | Dès 79€ · Intervention 20 min · 24h/24",
      description:
        "Vitrier urgence dans le Val-de-Marne (94): vitre cassée, mise en sécurité, remplacement simple/double/feuilleté/anti-effraction. Intervention 24h/24 7j/7, devis gratuit et facture assurance.",
    }),
  );
}

export default function Page() {
  const faq = [
    {
      q: "Intervenez-vous pour vitre cassée en urgence ?",
      a: "Oui. On priorise la mise en sécurité (risque coupure / intrusion), puis le remplacement selon le type de vitrage (simple, double, feuilleté) et la disponibilité. Si une fabrication sur mesure est nécessaire, on sécurise et on planifie la pose au plus vite.",
    },
    {
      q: "Quels types de vitrage remplacez-vous ?",
      a: "Simple vitrage, double vitrage, vitrage feuilleté, vitrage anti-effraction, selon dimensions et besoin.",
    },
    {
      q: "Faites-vous une mise en sécurité temporaire ?",
      a: "Oui, si le remplacement immédiat n’est pas possible, on sécurise l’ouverture et on planifie la pose.",
    },
    {
      q: "Quel est le prix d’un vitrier dans le 94 ?",
      a: "Dès 79€ selon intervention, surface, type de vitrage et accès. Devis gratuit avant intervention.",
    },
    {
      q: "Fournissez-vous une facture pour assurance ?",
      a: "Oui. Facture détaillée + références du vitrage posé, utile pour dossier assurance.",
    },
    {
      q: "Intervention la nuit et le week-end ?",
      a: "Oui, 24h/24 7j/7. On annonce les conditions tarifaires avant déplacement.",
    },
    {
      q: "Double vitrage: peut-on remplacer seulement une vitre ?",
      a: "En général, un double vitrage est une unité scellée: on remplace l’élément (le vitrage isolant) pour retrouver isolation et étanchéité. On vous conseille la solution compatible avec votre menuiserie.",
    },
    {
      q: "Vitrine de commerce cassée: vous intervenez ?",
      a: "Oui. On priorise la mise en sécurité et la fermeture, puis on organise le remplacement (souvent sur mesure). Le but est de limiter le risque et le temps d’arrêt d’activité.",
    },
    {
      q: "Quel vitrage anti-effraction choisir ?",
      a: "Le feuilleté (avec films intercalaires) est souvent la base. Le choix dépend du risque, du type d’ouverture, et parfois des exigences assurance. On vous guide vers une solution cohérente (sécurité + usage).",
    },
    {
      q: "Comment éviter les coupures et dégâts après bris de glace ?",
      a: "Ne manipulez pas à mains nues, éloignez enfants/animaux, ramassez prudemment et prenez des photos pour l’assurance. Si l’ouverture n’est plus sécurisée, appelez pour une mise en sécurité rapide.",
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
          name: "Vitrier urgence Val-de-Marne (94)",
          description:
            "Vitre cassée, mise en sécurité, remplacement vitrage simple/double/feuilleté/anti-effraction. Devis gratuit, facture assurance, intervention 24h/24 7j/7.",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq.map((x) => ({ question: x.q, answer: x.a })))} />
      <BreadcrumbSchema items={[{ name: "Services", path: "/#services" }, { name: "Vitrier urgence", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link className="hover:underline" href="/#services">
            Services
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Vitrier urgence</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Vitrier Urgence Val-de-Marne (94) | Remplacement Vitrage 24h/24
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Une vitre cassée, c’est une urgence de sécurité et de confort: risque d’intrusion, courant d’air, dégâts d’eau, enfants/animaux. Dans le Val-de-Marne (94), nous intervenons en vitrerie urgence pour{" "}
          <strong>mettre en sécurité</strong> rapidement puis remplacer le vitrage adapté: simple, double, feuilleté ou anti-effraction.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Qu’il s’agisse d’une fenêtre d’appartement, d’une baie vitrée, d’une porte vitrée ou d’une vitrine de commerce, le bon réflexe est le même: ne pas prendre de risques, sécuriser l’ouverture, puis remplacer avec un vitrage compatible. Notre approche est celle d’un <strong>serrurier val-de-marne</strong> “terrain” qui gère aussi la vitrerie urgence: devis clair, intervention propre, documents assurance, et une solution durable (isolation, sécurité, confort).
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={SITE_CONFIG.phoneHref}
            className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
          >
            📞 Urgence vitrier : {SITE_CONFIG.phone}
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
            <h2 className="text-lg font-semibold text-slate-900">Types de vitrage expliqués (simple, double, feuilleté)</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700">
              <li>
                <strong>Simple vitrage</strong>: solution économique, souvent sur anciennes menuiseries.
              </li>
              <li>
                <strong>Double vitrage</strong>: isolation thermique et acoustique améliorée (très courant).
              </li>
              <li>
                <strong>Feuilleté</strong>: sécurité renforcée (film intercalé), utile contre les bris et pour retarder une intrusion.
              </li>
              <li>
                <strong>Anti-effraction</strong>: configurations renforcées selon le risque et l’assurance.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Le choix n’est pas qu’une question de “solidité”. Un vitrage se choisit aussi pour l’isolation (froid/chaleur), l’acoustique (rue passante), la sécurité (retarder l’intrusion) et la compatibilité avec la menuiserie (épaisseur, parcloses, joints). En urgence, on vise d’abord la mise en sécurité, puis on vous propose le meilleur compromis pour votre ouverture.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Processus d’intervention</h2>
            <p className="mt-3 text-sm text-slate-700">
              1) Vous décrivez la casse (fenêtre, baie, vitrine), 2) on annonce un devis, 3) déplacement et mise en sécurité, 4) remplacement du vitrage si disponible ou planification rapide.
              L’objectif est d’éviter tout risque (coupures, intrusions) et de rendre votre ouverture fonctionnelle au plus vite.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Sur vitrine de commerce, on priorise la fermeture et la sécurisation. Sur habitation, on tient compte de l’isolation et de la protection (feuilleté si besoin).
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              En cas de double vitrage, le remplacement dépend souvent d’un élément sur mesure (dimensions exactes, épaisseur, gaz, intercalaire). On sécurise d’abord, puis on planifie le remplacement dès que le vitrage est disponible. L’objectif est de limiter le temps d’exposition et de retrouver rapidement isolation et confort.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Anti-effraction: guide complet (habitation & commerce)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Le feuilleté, la base sécurité</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Le vitrage feuilleté intègre un ou plusieurs films entre les verres. En cas de choc, il retient mieux les morceaux et retarde l’ouverture d’un passage. C’est particulièrement pertinent en rez-de-chaussée, sur une porte-fenêtre, ou après tentative d’effraction. Il ne rend pas “invincible”, mais il augmente le temps et le bruit nécessaires: deux facteurs dissuasifs.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                En pratique, on choisit une solution cohérente: vitrage + fermeture. Pour une sécurisation globale, on peut aussi vous orienter vers un renfort côté serrurerie (cylindre protégé, multipoints) si l’accès est sensible.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
              <h3 className="text-base font-semibold text-slate-900">Vitrine et zones exposées</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Sur une vitrine de commerce, l’enjeu est double: sécurité et continuité d’activité. On priorise la mise en sécurité, puis on propose un remplacement adapté (souvent sur mesure). Un vitrage anti-effraction bien choisi limite les bris rapides et réduit le risque de “casse opportuniste”. On adapte aussi le vitrage à l’exposition et au cadre (profilés, parcloses, contraintes).
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Si l’assurance est impliquée, une facture détaillée et des références claires aident le dossier. On vous guide sur les éléments à conserver (photos, contexte, déclaration si nécessaire).
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Double vitrage: thermique & phonique (ce qui change)</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            Le double vitrage apporte une meilleure isolation thermique (confort, économies) et peut réduire le bruit selon la configuration. Le résultat dépend de l’épaisseur, des verres, et de l’étanchéité de la menuiserie. Lors d’un remplacement, on veille à la compatibilité (épaisseur, joints, parcloses) pour éviter condensation et pertes d’isolation.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Prise en charge assurance (bris de glace)</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Selon votre contrat, la garantie bris de glace peut couvrir une partie du remplacement (fenêtres, porte-fenêtre, parfois vitrine). Le bon réflexe: photos, déclaration si demandée, et facture détaillée.
            Nous fournissons une facture avec les références du vitrage posé, ce qui facilite le dossier. En cas d’effraction, la logique peut être différente (sécurisation immédiate puis remplacement): on vous explique la meilleure démarche selon le contexte.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Prix selon surface & complexité</h2>
          <p className="mt-3 text-sm text-slate-700">
            Le prix dépend de la surface, du type de vitrage, de l’accès, et du temps de dépose/pose. Un double vitrage sur menuiserie récente n’a pas le même coût qu’une grande vitrine ou qu’un vitrage feuilleté sur mesure.
            Pour rester transparent, nous annonçons le tarif avant intervention, et nous fournissons une facture (assurance) si nécessaire.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>✓ Devis gratuit</li>
            <li>✓ Mise en sécurité si besoin</li>
            <li>✓ Remplacement vitrage adapté</li>
            <li>✓ Facture assurance</li>
          </ul>
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ vitrier urgence (94)</h2>
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
          <h2 className="text-2xl font-bold tracking-tight">Vitre brisée ? Mise en sécurité immédiate.</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Intervention vitrier urgence Val-de-Marne (94). Devis gratuit, remplacement vitrage, facture pour assurance.
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

