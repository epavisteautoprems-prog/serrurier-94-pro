import type { Metadata } from "next";
import Link from "next/link";
import { SeoLandingShell } from "@/components/marketing/SeoLandingShell";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Ouverture de porte sans casse 94 | Techniques non destructives",
    description:
      "Ouverture de porte sans casse dans le 94 quand la configuration le permet : porte claquée, techniques pro, devis gratuit avant intervention. Urgence 24h/24.",
    path: "/ouverture-porte-sans-casse-94",
  });
}

export default function Page() {
  return (
    <SeoLandingShell title="Ouverture de porte sans casse 94">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Ouverture de porte sans casse dans le Val-de-Marne (94)
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        L&apos;<strong>ouverture de porte sans casse</strong> est souvent possible lorsque la porte est simplement
        claquée (pêne passif) et que le jeu de porte, le type de serrure et l&apos;état du cylindre s&apos;y prêtent.
        Nous privilégions les <strong>techniques non destructives</strong> pour limiter les dégâts et les coûts.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Si la porte est verrouillée à clé, selon le niveau de sécurité, une ouverture sans dégât n&apos;est pas toujours
        garantissable: nous vous expliquons les options, le prix, et la marche à suivre avant de commencer —{" "}
        <strong>devis gratuit avant intervention</strong>, <strong>aucune surprise sur la facture</strong>.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Pour une intervention immédiate sur le 94, appelez le{" "}
        <Link className="font-semibold text-brand-navy hover:underline" href={SITE_CONFIG.phoneHref}>
          {SITE_CONFIG.phone}
        </Link>
        . {SITE_CONFIG.experienceYears} ans d&apos;expérience, matériel adapté, et suivi par un{" "}
        <strong>artisan local Val-de-Marne</strong>.
      </p>
    </SeoLandingShell>
  );
}
