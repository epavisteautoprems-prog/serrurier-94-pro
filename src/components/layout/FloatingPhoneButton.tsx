"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingPhoneButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
      <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-red-600/50" />
      <Link
        href={SITE_CONFIG.phoneHref}
        aria-label={`Appeler ${SITE_CONFIG.name}`}
        className="grid h-16 w-16 place-items-center rounded-full bg-red-600 text-white shadow-xl ring-1 ring-white/20 transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span className="text-2xl leading-none">📞</span>
      </Link>
    </div>
  );
}

