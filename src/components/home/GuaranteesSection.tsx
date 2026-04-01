import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function GuaranteesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Garanties & engagements</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Un serrurier val-de-marne ne se juge pas seulement sur la rapidité, mais sur la clarté des engagements. Cette section détaille nos garanties et notre cadre d’intervention pour que vous sachiez exactement à quoi vous attendre.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h3 className="text-base font-semibold text-slate-900">Engagement de transparence tarifaire</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Nous annonçons un tarif estimatif au téléphone sur la base des informations communiquées (porte claquée, porte fermée à clé, porte blindée, multipoints, clé cassée, etc.).
              Sur place, avant toute action, le devis est confirmé. Tout remplacement (cylindre, serrure, protection) est soumis à votre validation explicite. Le déplacement, la main d’œuvre et
              les éventuelles majorations (nuit, week-end) sont annoncés avant intervention. Cet engagement est au cœur de notre positionnement “serrurier pas cher 94”: un prix juste, annoncé et
              assumé.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Garantie de conformité & de bon fonctionnement</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Après une ouverture porte Val-de-Marne ou un changement serrure 94, nous vérifions la fermeture, l’alignement et la manœuvre. Une porte doit se fermer sans forcer: c’est un critère
              de sécurité et de durabilité. Si un réglage est nécessaire, il est réalisé dans le cadre de l’intervention. Nous privilégions des pièces compatibles et adaptées à la porte/bâti afin
              d’éviter l’usure prématurée et les pannes répétées.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Garantie décennale (travaux concernés)</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Sur les travaux de renfort et de blindage, une garantie décennale s’applique lorsque la nature des travaux le justifie. Elle couvre les désordres relevant de ce cadre légal et est
              un indicateur d’exigence. Pour un blindage porte Val-de-Marne 94, l’objectif est un ensemble cohérent (porte + bâti + fermeture) et durable. Les documents nécessaires (devis, facture)
              sont fournis afin d’être exploitables en cas de besoin.
            </p>
            <p className="mt-3 text-xs text-slate-600">
              Texte informatif: la portée exacte dépend de la qualification des travaux et de la réglementation applicable. En cas de doute, nous vous expliquons clairement ce qui est couvert.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6">
            <h3 className="text-base font-semibold text-slate-900">Engagement “assurance” (dossier facilité)</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              En cas d’effraction, vol de clés ou vandalisme, nous fournissons une facture détaillée et, si remplacement, les références matériel. Cela aide à constituer un dossier propre.
              Nous expliquons aussi les éléments à conserver (photos, preuves) et la logique de sécurisation (souvent cylindre renforcé + protection, parfois changement serrure 94 complet).
              Un serrurier agréé Val-de-Marne doit vous protéger techniquement et administrativement: c’est le sens de cet engagement.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-brand-navy p-8 text-white">
          <h3 className="text-xl font-bold tracking-tight">Besoin d’un devis clair tout de suite ?</h3>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Appelez et décrivez votre situation en 30 secondes. On vous annonce un prix estimé, puis on confirme avant intervention.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={SITE_CONFIG.phoneHref}
              className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
            >
              📞 Appeler {SITE_CONFIG.phone}
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white"
            >
              Demander un devis →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

