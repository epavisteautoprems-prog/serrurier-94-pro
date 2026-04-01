import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-orange blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20 container-safe">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/95">
              ⭐ {SITE_CONFIG.rating.toFixed(1)}/5 · {SITE_CONFIG.reviewCount} avis Google ·
              Certifié A2P · Garantie décennale
            </p>

            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
              Serrurier Agréé Val-de-Marne (94)
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
              Intervention en {SITE_CONFIG.delai} • Ouverture de porte • Blindage • Vitrier •
              Rideau métallique • Disponible {SITE_CONFIG.openingHours}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={SITE_CONFIG.phoneHref}
                className="animate-pulse rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm transition hover:bg-brand-orange/90"
              >
                📞 Urgence : {SITE_CONFIG.phone}
              </Link>
              <Link
                href="#devis"
                className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                Devis gratuit en 2 min →
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/90">
              🔑 {SITE_CONFIG.interventionsCount.toLocaleString("fr-FR")}+ interventions réalisées
              dans le Val-de-Marne
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl ring-1 ring-black/5">
            <p className="text-sm font-semibold text-brand-navy">Devis immédiat</p>
            <p className="mt-1 text-2xl font-bold tracking-tight">Réponse rapide, prix transparents</p>
            <p className="mt-2 text-sm text-slate-600">
              Devis gratuit avant intervention. Paiement CB/espèces, facture assurance.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Ouverture de porte sans dégâts (selon configuration)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Serrures 3/5 points, A2P, cylindres toutes marques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Urgence nuit & week-end, 94 entier</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="#devis"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy/90"
              >
                Obtenir mon devis gratuit →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

