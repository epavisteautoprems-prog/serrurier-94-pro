import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Nos services de serrurerie dans le 94
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-700">
          Ouverture de porte, changement de serrure, blindage certifié A2P, dépannage rideau métallique, vitrier urgence et volet roulant.
          Prix transparents, devis gratuit, intervention rapide dans tout le Val-de-Marne.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    <span className="mr-2">{s.icon}</span>
                    {s.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{s.description}</p>
                </div>
                <span className="rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold text-brand-navy">
                  {s.prix}
                </span>
              </div>
              <p className="mt-5 text-sm font-semibold text-brand-navy group-hover:underline">
                Voir la page service →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

