import Link from "next/link";
import { SITE_CONFIG, SERVICES, VILLES_94 } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 w-full border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 container-safe">
        <div className="space-y-3">
          <p className="text-base font-semibold text-brand-navy">{SITE_CONFIG.name}</p>
          <p className="text-sm text-slate-600">{SITE_CONFIG.address}</p>
          <p className="text-sm text-slate-600">{SITE_CONFIG.openingHours}</p>
          <Link
            href={SITE_CONFIG.phoneHref}
            className="inline-flex rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange/90"
          >
            📞 {SITE_CONFIG.phone}
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Services</p>
          <ul className="space-y-2 text-sm text-slate-700">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link className="hover:text-brand-navy" href={`/${s.slug}`}>
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-brand-navy" href="/urgence-serrurier">
                Serrurier urgence 94
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Zones (94)</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
            {VILLES_94.slice(0, 12).map((v) => (
              <li key={v.slug}>
                <Link className="hover:text-brand-navy" href={`/serrurier-${v.slug}`}>
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="text-sm font-medium text-brand-navy hover:underline" href="/#zones">
            Voir toutes les villes →
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Infos</p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <Link className="hover:text-brand-navy" href="/a-propos">
                À propos
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-navy" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-navy" href="/mentions-legales">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-600 md:flex-row md:items-center md:justify-between container-safe">
          <p>
            © {year} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <p>
            {SITE_CONFIG.rating.toFixed(1)}/5 • {SITE_CONFIG.reviewCount} avis •{" "}
            {SITE_CONFIG.interventionsCount.toLocaleString("fr-FR")} interventions
          </p>
        </div>
      </div>
    </footer>
  );
}

