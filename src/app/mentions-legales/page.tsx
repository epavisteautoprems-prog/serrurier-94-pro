import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PAGE_PATH = "/mentions-legales" as const;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mentions légales | Serrurier 94 Pro",
    description: "Mentions légales du site Serrurier 94 Pro (Val-de-Marne 94).",
    path: PAGE_PATH,
    noindex: true,
  });
}

export default function Page() {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;

  return (
    <div className="bg-white">
      <JsonLd data={localBusinessJsonLd({ pageUrl })} />
      <BreadcrumbSchema items={[{ name: "Mentions légales", path: PAGE_PATH }]} />

      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>Mentions légales</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Mentions légales
        </h1>

        <div className="prose prose-slate mt-6 max-w-none">
          <h2>Éditeur</h2>
          <p>
            Site: <strong>{SITE_CONFIG.name}</strong>
            <br />
            Email: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            <br />
            Téléphone: <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phone}</a>
            <br />
            Zone: {SITE_CONFIG.address}
          </p>

          <h2>Hébergement</h2>
          <p>
            Hébergeur: Vercel Inc.
            <br />
            (Les informations légales complètes de l’hébergeur sont disponibles sur demande et sur le site de Vercel.)
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les contenus (textes, éléments graphiques, mise en page) sont protégés. Toute reproduction sans autorisation est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif. Malgré le soin apporté, elles peuvent évoluer. Le devis annoncé est confirmé avant intervention.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les données envoyées via le formulaire (prénom, téléphone, ville, type de prestation) servent uniquement à traiter votre demande. Vous pouvez demander la suppression de vos données en nous contactant à {SITE_CONFIG.email}.
          </p>
        </div>
      </div>
    </div>
  );
}

