import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function HowItWorks() {
  const steps = [
    {
      title: "1) Diagnostic express",
      desc: "Vous décrivez la situation (porte claquée, clé cassée, serrure bloquée). On pose 3 questions et on estime le prix.",
    },
    {
      title: "2) Devis gratuit",
      desc: "Le tarif est annoncé avant intervention. Aucun supplément caché. Facture fournie pour assurance.",
    },
    {
      title: "3) Intervention rapide",
      desc: `Un serrurier se déplace dans le Val-de-Marne. Délai moyen: ${SITE_CONFIG.delai}. Travail propre, sécurisé, garanti.`,
    },
  ] as const;

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Comment se passe une intervention ?
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-900">{s.title}</p>
              <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/tarifs"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900"
          >
            Voir les tarifs →
          </Link>
          <Link
            href="/urgence-serrurier"
            className="rounded-xl bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-white shadow-sm"
          >
            Urgence serrurier 94 →
          </Link>
        </div>
      </div>
    </section>
  );
}

