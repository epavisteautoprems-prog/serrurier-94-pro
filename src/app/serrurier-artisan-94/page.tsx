import type { Metadata } from "next";
import Link from "next/link";
import { SeoLandingShell } from "@/components/marketing/SeoLandingShell";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Serrurier artisan 94 | Artisan local Val-de-Marne",
    description:
      "Serrurier artisan dans le 94 : proximité, conseils, devis avant intervention, délais réalistes. Pas de sous-traitance opaque — appelez le 01 87 66 71 26.",
    path: "/serrurier-artisan-94",
  });
}

export default function Page() {
  return (
    <SeoLandingShell title="Serrurier artisan 94">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Serrurier artisan dans le Val-de-Marne (94)
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Choisir un <strong>serrurier artisan</strong>, c&apos;est privilégier la cohérence: un interlocuteur qui connaît
        les quartiers du 94, les accès d&apos;immeubles, les contraintes horaires et les typologies de portes — du
        studio au local commercial.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Nous restons sur une logique de <strong>proximité</strong>: explications compréhensibles,{" "}
        <strong>devis gratuit avant intervention</strong>, et respect du prix annoncé —{" "}
        <strong>aucune surprise sur la facture</strong>. C&apos;est aussi l&apos;inverse des réseaux anonymes qui
        multiplient les intermédiaires et les suppléments.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        <strong>{SITE_CONFIG.experienceYears} ans d&apos;expérience</strong>, badge <strong>Certifié A2P</strong> sur les
        installations concernées, et ligne directe:{" "}
        <Link className="font-semibold text-brand-navy hover:underline" href={SITE_CONFIG.phoneHref}>
          {SITE_CONFIG.phone}
        </Link>
        .
      </p>
    </SeoLandingShell>
  );
}
