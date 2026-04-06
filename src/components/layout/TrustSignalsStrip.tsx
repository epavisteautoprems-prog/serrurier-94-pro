import { SITE_CONFIG } from "@/lib/constants";

export function TrustSignalsStrip() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5 text-center text-xs font-medium text-slate-700 sm:justify-between sm:text-left container-safe">
        <span className="whitespace-nowrap">
          ✓ <strong>{SITE_CONFIG.experienceYears} ans d&apos;expérience</strong>
        </span>
        <span className="whitespace-nowrap">✓ Artisan local Val-de-Marne</span>
        <span className="whitespace-nowrap">✓ Devis gratuit avant intervention</span>
        <span className="whitespace-nowrap">✓ Aucune surprise sur la facture</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-800 ring-1 ring-emerald-200">
          Certifié A2P
        </span>
      </div>
    </div>
  );
}
