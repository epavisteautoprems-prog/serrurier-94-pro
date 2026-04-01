import Link from "next/link";

export function PriceBand() {
  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between container-safe">
        <p className="font-semibold text-slate-900">
          Ouverture porte dès 89€ • Changement serrure dès 149€ • Blindage dès 890€ • Devis GRATUIT
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <Link className="font-medium text-brand-navy hover:underline" href="/tarifs">
            Voir tous les tarifs →
          </Link>
          <Link className="font-medium text-brand-navy hover:underline" href="/urgence-serrurier">
            Urgence 24h/24 →
          </Link>
        </div>
      </div>
    </div>
  );
}

