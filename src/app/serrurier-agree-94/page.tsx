import type { Metadata } from "next";
import Link from "next/link";
import { SeoLandingShell } from "@/components/marketing/SeoLandingShell";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Serrurier agréé 94 | Facture assurance · Serrures A2P",
    description:
      "Serrurier agréé Val-de-Marne : factures détaillées pour assurance, matériel A2P, devis gratuit avant intervention. Service 24h/24 dans le 94.",
    path: "/serrurier-agree-94",
  });
}

export default function Page() {
  return (
    <SeoLandingShell title="Serrurier agréé 94">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Serrurier agréé dans le Val-de-Marne (94)
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Après effraction ou sinistre, votre assurance peut exiger un dossier solide: devis, facture, références de
        matériel, et parfois une serrure <strong>certifiée A2P</strong>. Nous fournissons des documents clairs et une
        explication des travaux pour faciliter le <strong>remboursement selon contrat</strong>.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Un <strong>serrurier agréé</strong> — au sens professionnel du métier — doit surtout être transparent:{" "}
        <strong>devis gratuit avant intervention</strong>, prix annoncés, et <strong>aucune surprise sur la facture</strong>
        . Notre équipe intervient dans tout le 94 avec {SITE_CONFIG.experienceYears} ans d&apos;expérience.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Contact:{" "}
        <Link className="font-semibold text-brand-navy hover:underline" href={SITE_CONFIG.phoneHref}>
          {SITE_CONFIG.phone}
        </Link>{" "}
        — <strong>artisan local Val-de-Marne</strong>, disponible {SITE_CONFIG.openingHours}.
      </p>
    </SeoLandingShell>
  );
}
