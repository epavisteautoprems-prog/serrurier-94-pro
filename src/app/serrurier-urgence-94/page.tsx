import type { Metadata } from "next";
import Link from "next/link";
import { SeoLandingShell } from "@/components/marketing/SeoLandingShell";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Serrurier urgence 94 | 24h/24 · 7j/7 · Intervention rapide",
    description:
      "Serrurier urgence Val-de-Marne : dépannage 24h/24 et 7j/7, délais moyens annoncés au téléphone, mise en sécurité prioritaire. Appelez le 01 87 66 71 26.",
    path: "/serrurier-urgence-94",
  });
}

export default function Page() {
  return (
    <SeoLandingShell title="Serrurier urgence 94">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Serrurier urgence dans le Val-de-Marne (94)
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Une urgence serrurerie ne prévient pas: porte claquée au retour des courses, clé cassée dans le cylindre,
        tentative d&apos;effraction, rideau métallique bloqué. Nous assurons une <strong>réponse 24h/24 et 7j/7</strong>{" "}
        sur l&apos;ensemble du département, avec un <strong>délai moyen annoncé au téléphone</strong> selon votre secteur
        et le trafic.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        La priorité est toujours la <strong>mise en sécurité</strong>: refermer proprement, remplacer un cylindre
        compromis, sécuriser un vitrage ou un accès commercial. Nos techniciens sont équipés pour les portes standards,
        blindées et multipoints, avec des options <strong>certifiées A2P</strong> lorsque nécessaire.
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        <strong>Devis gratuit avant intervention</strong> — composez le{" "}
        <Link className="font-semibold text-brand-navy hover:underline" href={SITE_CONFIG.phoneHref}>
          {SITE_CONFIG.phone}
        </Link>{" "}
        : un <strong>artisan local du 94</strong> avec {SITE_CONFIG.experienceYears} ans d&apos;expérience, pour une
        intervention rapide sans rupture de prix.
      </p>
    </SeoLandingShell>
  );
}
