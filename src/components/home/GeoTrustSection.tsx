import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function GeoTrustSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Votre Serrurier de Confiance dans tout le Val-de-Marne (94)
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
          <p>
            Depuis plus de <strong>{SITE_CONFIG.experienceYears} ans</strong>, nous accompagnons les particuliers et les
            professionnels du département avec une approche d&apos;<strong>artisan local</strong>: réactivité réelle,
            explications claires et <strong>devis gratuit avant toute intervention</strong>. Que vous soyez à{" "}
            <strong>Créteil</strong>, <strong>Vitry-sur-Seine</strong>, <strong>Saint-Maur-des-Fossés</strong>,{" "}
            <strong>Champigny-sur-Marne</strong>, <strong>Ivry-sur-Seine</strong>, <strong>Maisons-Alfort</strong>,{" "}
            <strong>Fontenay-sous-Bois</strong>, <strong>Villejuif</strong>, <strong>Vincennes</strong> ou{" "}
            <strong>Alfortville</strong>, une équipe connaît les contraintes du terrain: accès copropriété, parkings,
            interphones, circulation aux heures de pointe.
          </p>
          <p>
            Nos <strong>temps d&apos;intervention</strong> sont annoncés au téléphone selon votre secteur: en moyenne{" "}
            <strong>15 à 20 minutes</strong> sur les axes centraux du 94 (Créteil, Vincennes, Saint-Maur, Maisons-Alfort),
            <strong> 20 à 30 minutes</strong> sur les communes périphériques selon trafic, et jusqu&apos;à{" "}
            <strong>35 à 45 minutes</strong> pour les secteurs les plus éloignés en fin de journée. En urgence (porte
            claquée, clé cassée, effraction), nous priorisons la <strong>mise en sécurité</strong> et le déplacement le
            plus rapide possible.
          </p>
          <p>
            Notre expérience locale du Val-de-Marne nous permet d&apos;anticiper les situations fréquentes: portes
            multipoints qui accrochent, cylindres fatigués dans les résidences récentes, rideaux métalliques de commerces
            en zone commerciale, ou vitrage à sécuriser après incident. Nous travaillons avec des{" "}
            <strong>prix annoncés avant intervention</strong> et une facture détaillée — <strong>aucune surprise sur la
            facture</strong> — ce qui facilite aussi les dossiers auprès de votre assurance lorsque la garantie s&apos;y
            prête.
          </p>
          <p>
            Vous bénéficiez d&apos;un interlocuteur unique, de pièces adaptées aux marques courantes, et d&apos;options{" "}
            <strong>certifiées A2P</strong> lorsque votre niveau de risque ou votre contrat l&apos;exigent. Pour une
            urgence ou un simple conseil, appelez le{" "}
            <Link href={SITE_CONFIG.phoneHref} className="font-semibold text-brand-navy hover:underline">
              {SITE_CONFIG.phone}
            </Link>{" "}
            — réponse immédiate, 24h/24 et 7j/7 sur l&apos;ensemble du département.
          </p>
          <p>
            Contrairement aux annuaires impersonnels, nous privilégions le suivi de bout en bout: même numéro, même
            logique tarifaire, même exigence de transparence. Que vous habitiez une résidence neuve à Saint-Maur ou un
            pavillon à Chennevières, le principe reste identique — un <strong>serrurier de confiance dans le 94</strong>{" "}
            doit pouvoir expliquer le problème, proposer une solution juste, et la facturer comme annoncé.
          </p>
        </div>
      </div>
    </section>
  );
}
