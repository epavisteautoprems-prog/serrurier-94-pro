import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link
          href={SITE_CONFIG.phoneHref}
          className="flex-1 rounded-xl bg-brand-orange px-4 py-3 text-center text-sm font-semibold text-white shadow-sm"
        >
          📞 Appeler maintenant
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900"
        >
          Devis
        </Link>
      </div>
    </div>
  );
}

