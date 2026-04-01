import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const NAV = [
  { href: "/urgence-serrurier", label: "Urgence" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 container-safe">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-navy text-white shadow-sm">
            🔑
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-brand-navy">
              {SITE_CONFIG.name}
            </span>
            <span className="block text-xs text-slate-600">{SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={SITE_CONFIG.phoneHref}
            className="rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange/90"
          >
            📞 {SITE_CONFIG.phone}
          </Link>
        </div>
      </div>
    </header>
  );
}

