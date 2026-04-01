import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 container-safe">
      <p className="text-sm font-semibold text-brand-navy">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-2xl text-slate-700">
        La page demandée n’existe pas (ou a été déplacée). Si c’est une urgence
        serrurerie dans le Val-de-Marne, appelez-nous:{" "}
        <Link className="font-semibold text-brand-navy underline" href={SITE_CONFIG.phoneHref}>
          {SITE_CONFIG.phone}
        </Link>
        .
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-brand-navy px-5 py-3 text-center text-sm font-semibold text-white shadow-sm"
        >
          Retour à l’accueil
        </Link>
        <Link
          href="/urgence-serrurier"
          className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900"
        >
          Urgence serrurier 94
        </Link>
      </div>
    </div>
  );
}

