import Link from "next/link";
import { SITE_CONFIG, VILLES_94 } from "@/lib/constants";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function SeoLandingShell({ title, children }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 container-safe">
        <nav className="text-xs text-slate-600" aria-label="Fil d'Ariane">
          <Link className="hover:underline" href="/">
            Accueil
          </Link>{" "}
          <span aria-hidden="true">›</span> <span>{title}</span>
        </nav>

        {children}

        <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-bg p-6">
          <h2 className="text-lg font-semibold text-slate-900">Urgence serrurier 94</h2>
          <p className="mt-2 text-sm text-slate-700">
            Devis gratuit avant intervention · {SITE_CONFIG.experienceYears} ans d&apos;expérience · Artisan local
            Val-de-Marne · Certifié A2P · Aucune surprise sur la facture
          </p>
          <Link
            href={SITE_CONFIG.phoneHref}
            className="mt-4 inline-flex rounded-xl bg-brand-orange px-6 py-4 text-lg font-bold text-white shadow-md"
          >
            📞 {SITE_CONFIG.phone}
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">Intervention près de chez vous</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {VILLES_94.slice(0, 16).map((v) => (
              <Link
                key={v.slug}
                href={`/serrurier-${v.slug}`}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 hover:border-brand-navy hover:text-brand-navy"
              >
                {v.name}
              </Link>
            ))}
          </div>
          <Link className="mt-4 inline-block text-sm font-medium text-brand-navy hover:underline" href="/#zones">
            Toutes les villes du 94 →
          </Link>
        </section>
      </div>
    </div>
  );
}
