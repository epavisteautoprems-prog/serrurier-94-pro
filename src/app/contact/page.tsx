import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { QuoteForm } from "@/components/home/QuoteForm";

const PAGE_PATH = "/contact" as const;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Contact serrurier 94 | Devis gratuit",
    description:
      "Contact Serrurier 94 Pro: devis gratuit, urgence 24h/24 7j/7, intervention Val-de-Marne. Téléphone cliquable et formulaire de demande.",
    path: PAGE_PATH,
  });
}

export default function Page() {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <BreadcrumbSchema items={[{ name: "Contact", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Contact</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Contact serrurier Val-de-Marne (94)
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-700">
          Pour une urgence (porte claquée, serrure bloquée, effraction, vitre cassée, rideau métallique), appelez-nous. Sinon, laissez votre demande: on vous rappelle rapidement avec un devis gratuit.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={SITE_CONFIG.phoneHref} className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm">
            📞 Appeler : {SITE_CONFIG.phone}
          </Link>
          <a href={`mailto:${SITE_CONFIG.email}`} className="rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-semibold text-slate-900">
            ✉️ {SITE_CONFIG.email}
          </a>
        </div>
      </div>

      <QuoteForm />

      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <section className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Informations</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Zone</p>
              <p className="mt-2 text-sm text-slate-700">{SITE_CONFIG.address}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Horaires</p>
              <p className="mt-2 text-sm text-slate-700">{SITE_CONFIG.openingHours}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Délai moyen</p>
              <p className="mt-2 text-sm text-slate-700">{SITE_CONFIG.delai}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

