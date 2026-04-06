import Link from "next/link";
import { SITE_CONFIG, SERVICES, VILLES_94 } from "@/lib/constants";

const LONG_TAIL = [
  { href: "/serrurier-pas-cher-94", label: "Serrurier pas cher 94" },
  { href: "/serrurier-urgence-94", label: "Serrurier urgence 94" },
  { href: "/ouverture-porte-sans-casse-94", label: "Ouverture sans casse 94" },
  { href: "/serrurier-agree-94", label: "Serrurier agréé 94" },
  { href: "/serrurier-artisan-94", label: "Serrurier artisan 94" },
  { href: "/faux-serruriers", label: "Éviter les arnaques" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 container-safe">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-base font-semibold text-brand-navy">{SITE_CONFIG.name}</p>
            <p className="text-sm text-slate-600">{SITE_CONFIG.address}</p>
            <p className="text-sm font-medium text-slate-800">Horaires</p>
            <p className="text-sm text-slate-600">{SITE_CONFIG.horairesDetail}</p>
            <Link
              href={SITE_CONFIG.phoneHref}
              className="inline-flex rounded-full bg-brand-orange px-5 py-3 text-lg font-bold text-white shadow-md transition hover:bg-brand-orange/90"
            >
              📞 {SITE_CONFIG.phone}
            </Link>
            <p className="text-sm text-slate-600">
              <Link className="font-medium text-brand-navy hover:underline" href={SITE_CONFIG.googleMapsUrl}>
                Voir sur Google Maps →
              </Link>
            </p>
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
            <p className="text-sm font-semibold text-slate-900">Guides & confiance</p>
            <ul className="space-y-2 text-sm text-slate-700">
              {LONG_TAIL.map((x) => (
                <li key={x.href}>
                  <Link className="hover:text-brand-navy" href={x.href}>
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Certifications & garanties</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ {SITE_CONFIG.experienceYears} ans d&apos;expérience</li>
              <li>✓ Artisan local Val-de-Marne</li>
              <li>✓ Devis gratuit avant intervention</li>
              <li>✓ Aucune surprise sur la facture</li>
              <li>✓ Serrures et installations certifiées A2P (selon projet)</li>
              <li>✓ Garantie décennale sur travaux de blindage concernés</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Toutes les villes du Val-de-Marne (94)</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {VILLES_94.map((v) => (
              <Link
                key={v.slug}
                href={`/serrurier-${v.slug}`}
                className="text-sm text-slate-700 hover:text-brand-navy hover:underline"
              >
                Serrurier {v.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6 border-t border-slate-200 pt-8 text-sm text-slate-700">
          <Link className="hover:text-brand-navy" href="/a-propos">
            À propos
          </Link>
          <Link className="hover:text-brand-navy" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-brand-navy" href="/faq">
            FAQ
          </Link>
          <Link className="hover:text-brand-navy" href="/mentions-legales">
            Mentions légales
          </Link>
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
