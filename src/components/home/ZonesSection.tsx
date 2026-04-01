import Link from "next/link";
import { VILLES_94 } from "@/lib/constants";

export function ZonesSection() {
  return (
    <section id="zones" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Serrurier disponible dans tout le 94
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-700">
          Nous couvrons l’ensemble du Val-de-Marne. Choisissez votre ville pour une page locale dédiée (quartiers, délais, services et FAQ).
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {VILLES_94.map((v) => (
            <Link
              key={v.slug}
              href={`/serrurier-${v.slug}`}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:text-brand-navy"
            >
              {v.name} <span className="text-xs font-medium text-slate-500">({v.cp})</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

