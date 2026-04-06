import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function StickyTopBar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-red-600 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 container-safe">
        <Link
          href={SITE_CONFIG.phoneHref}
          className="flex-1 text-xs font-semibold sm:text-sm"
        >
          🚨 URGENCE 24h/24 · 📞{" "}
          <span className="text-base font-extrabold tracking-wide sm:text-lg">{SITE_CONFIG.phone}</span> · ⏱️
          Intervention {SITE_CONFIG.delai}
        </Link>
        <Link
          href={SITE_CONFIG.phoneHref}
          className="hidden rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white shadow-sm transition hover:bg-white/20 sm:inline-flex"
        >
          Appeler
        </Link>
      </div>
    </div>
  );
}

