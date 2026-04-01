import Link from "next/link";
import { SITE_CONFIG, VILLES_94 } from "@/lib/constants";

export function ZonesInterventionRich() {
  const top = VILLES_94.slice(0, 20);
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Zones d’intervention (Val-de-Marne 94)</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Notre couverture est pensée pour l’urgence: un <strong>serrurier 94 urgence</strong> doit pouvoir intervenir vite, mais aussi expliquer clairement le prix et la méthode. En pratique, nous
          intervenons sur tout le département: Créteil, Vitry-sur-Seine, Saint-Maur-des-Fossés, Champigny-sur-Marne, Ivry-sur-Seine, Maisons-Alfort, Fontenay-sous-Bois, Villejuif, Vincennes,
          Alfortville, Choisy-le-Roi, Le Kremlin-Bicêtre, Nogent-sur-Marne, Thiais, Orly, Charenton-le-Pont, Cachan, L’Haÿ-les-Roses, Joinville-le-Pont, Sucy-en-Brie… et toutes les communes
          listées sur nos pages locales.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
          Les urgences les plus fréquentes sont l’<strong>ouverture porte Val-de-Marne</strong> (porte claquée, clé oubliée), la clé cassée, la serrure bloquée et la mise en sécurité après
          effraction. Sur les secteurs très denses (axes, gares, centres-villes), le trafic peut influer sur le délai, mais notre organisation vise un délai moyen proche de{" "}
          <strong>{SITE_CONFIG.delai}</strong>. Sur les zones plus résidentielles, l’accès est souvent plus simple, ce qui facilite une intervention rapide, y compris le soir et le week-end.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
          Pour vous donner un repère pratique, on peut résumer la couverture par grands secteurs: <strong>Est du 94</strong> (bords de Marne et communes proches), <strong>Ouest</strong> (proximité
          Paris et flux pendulaires), <strong>Sud</strong> (zones pavillonnaires et accès routiers), <strong>Centre</strong> (pôles administratifs et grands ensembles). Dans tous les cas, le
          processus reste identique: vous décrivez la situation, on annonce un prix, on confirme sur place, et on intervient. C’est la base d’un <strong>serrurier val-de-marne</strong> fiable.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
          Enfin, notre approche sécurité s’adapte au contexte local: immeubles anciens (portes qui travaillent), résidences fermées (accès, interphonie), commerces (rideaux métalliques), et
          appartements exposés. Selon les cas, la solution peut aller d’un simple réglage à un <strong>changement serrure 94</strong>, voire un <strong>blindage porte Val-de-Marne 94</strong> si
          l’assurance ou le risque le justifie. L’objectif est d’être un <strong>serrurier agréé Val-de-Marne</strong> au sens concret: sécuriser, expliquer, documenter, et garantir.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {top.map((v) => (
            <Link
              key={v.slug}
              href={`/serrurier-${v.slug}`}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:text-brand-navy"
            >
              {v.name} <span className="text-xs font-medium text-slate-500">({v.cp})</span>
              <span className="block text-xs font-medium text-slate-600">
                Délai: {v.delai ?? `${SITE_CONFIG.delai} (selon trafic)`}
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-700">
          Vous ne trouvez pas votre commune dans la liste ci-dessus ? Elle est forcément couverte: consultez la grille complète sur la section zones ou tapez directement “serrurier + votre ville”.
          Nos pages locales détaillent les quartiers, le délai estimé, les services (ouverture, remplacement, blindage, vitrerie) et une FAQ dédiée.
        </p>
      </div>
    </section>
  );
}

