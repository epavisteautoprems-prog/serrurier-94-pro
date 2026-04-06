"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingPhoneButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
      <div className="relative">
        <div className="absolute -inset-1 -z-10 animate-ping rounded-2xl bg-red-600/40" />
        <Link
        href={SITE_CONFIG.phoneHref}
        aria-label={`Appeler ${SITE_CONFIG.name} au ${SITE_CONFIG.phone}`}
        className="flex flex-col items-center rounded-2xl bg-red-600 px-3 py-2 text-white shadow-xl ring-1 ring-white/20 transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-w-[7.5rem]"
      >
        <span className="text-xl leading-none">📞</span>
        <span className="mt-1 max-w-[10rem] text-center text-xs font-bold leading-tight sm:text-sm">{SITE_CONFIG.phone}</span>
      </Link>
      </div>
    </div>
  );
}

