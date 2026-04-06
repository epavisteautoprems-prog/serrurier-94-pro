import type { Metadata } from "next";
import Link from "next/link";
import { SeoLandingShell } from "@/components/marketing/SeoLandingShell";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Serrurier pas cher 94 | Devis gratuit · Prix annoncés avant intervention",
    description:
      "Serrurier pas cher dans le Val-de-Marne (94) : tarifs annoncés au téléphone, devis gratuit avant intervention, aucune surprise sur la facture. Urgence 24h/24.",
    path: "/serrurier-pas-cher-94",
  });
}

export default function Page() {
  return (
    <SeoLandingShell title="Serrurier pas cher 94">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Serrurier pas cher dans le Val-de-Marne (94)
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Chercher un <strong>serrurier pas cher dans le 94</strong> ne doit pas signifier accepter des tarifs flous ou des
        suppléments “sur place”. Notre approche est simple: un <strong>devis gratuit avant intervention</strong>, un
        prix annoncé au téléphone selon votre situation (porte claquée, clé cassée, serrure multipoints), puis confirmation
        sur place si la configuration diffère.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Un tarif compétitif repose sur la clarté: déplacement inclus dans le devis, pièces identifiées (cylindre,
        mécanisme, options A2P si nécessaire), et <strong>aucune surprise sur la facture</strong>. Avec{" "}
        <strong>{SITE_CONFIG.experienceYears} ans d&apos;expérience</strong> sur le Val-de-Marne, nous privilégions les
        solutions adaptées à votre porte — pas le sur-équipement inutile — tout en restant un{" "}
        <strong>artisan local</strong> joignable au <Link href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phone}</Link>.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Pour éviter les arnaques aux faux tarifs, refusez les annonces irréalistes “29€ partout” et privilégiez un
        interlocuteur qui explique la méthode d&apos;ouverture et le niveau de sécurité attendu. Consultez aussi notre
        page dédiée:{" "}
        <Link className="font-semibold text-brand-navy hover:underline" href="/faux-serruriers">
          comment éviter les faux serruriers dans le 94
        </Link>
        .
      </p>
    </SeoLandingShell>
  );
}
