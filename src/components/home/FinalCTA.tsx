import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <div className="grid gap-6 rounded-3xl bg-white/10 p-8 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Besoin d’un serrurier dans le Val-de-Marne ?
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Intervention rapide 24h/24 7j/7. Devis gratuit, prix annoncés avant déplacement, facture pour assurance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href={SITE_CONFIG.phoneHref}
              className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
            >
              📞 Appeler : {SITE_CONFIG.phone}
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white"
            >
              Demander un devis →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

