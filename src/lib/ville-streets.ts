/** Rues principales par commune (SEO local) — complété par génération déterministe si absent. */
const KNOWN: Readonly<Record<string, readonly string[]>> = {
  creteil: ["Avenue du Général de Gaulle", "Rue du Métropolitain", "Boulevard du Maréchal Juin", "Rue des Archives"],
  "vitry-sur-seine": ["Avenue de Stalingrad", "Rue Pierre Brossolette", "Avenue Anatole France", "Rue des Mûriers"],
  "saint-maur-des-fosses": ["Avenue de Condé", "Rue du Pont de Créteil", "Rue de la Varenne", "Avenue de la République"],
  "champigny-sur-marne": ["Rue de Paris", "Avenue du Général de Gaulle", "Rue des Mûriers", "Rue du Bas Perreux"],
  "ivry-sur-seine": ["Avenue de la République", "Rue Paul Vaillant-Couturier", "Rue Pierre Brossolette", "Rue Jean-Jacques Rousseau"],
  "maisons-alfort": ["Avenue du Général Leclerc", "Rue de la République", "Rue Paul Vaillant-Couturier", "Avenue du Professeur Cadiot"],
  "fontenay-sous-bois": ["Rue de Rosny", "Avenue du Val de Fontenay", "Rue des Métairies", "Rue Jean Jaurès"],
  villejuif: ["Avenue de la République", "Rue Jean Jaurès", "Rue Marx Dormoy", "Avenue Henri Barbusse"],
  vincennes: ["Avenue de Paris", "Rue de Fontenay", "Avenue du Château", "Rue Carnot"],
  alfortville: ["Rue de Paris", "Avenue du Général Leclerc", "Rue Paul Vaillant-Couturier", "Rue Victor Hugo"],
  "choisy-le-roi": ["Avenue de Choisy", "Rue du Pont de Choisy", "Avenue Gambetta", "Rue Paul Vaillant-Couturier"],
  "le-kremlin-bicetre": ["Rue de la Convention", "Avenue de Fontainebleau", "Rue Gabriel Péri", "Rue Jean Jaurès"],
  "nogent-sur-marne": ["Rue de Plaisance", "Avenue du Général de Gaulle", "Rue des Mûriers", "Rue de la République"],
  thiais: ["Rue de la République", "Avenue de Versailles", "Rue du Pavé", "Rue des Roses"],
  orly: ["Avenue de l’Europe", "Rue du Midi", "Rue de la République", "Avenue du Maréchal Foch"],
  "charenton-le-pont": ["Rue de Paris", "Rue Victor Hugo", "Avenue de la Liberté", "Rue de Valmy"],
  cachan: ["Avenue Carnot", "Rue de la République", "Rue Jean Jaurès", "Avenue Aristide Briand"],
  "l-hay-les-roses": ["Avenue de la République", "Rue Jean Jaurès", "Rue Pasteur", "Rue de Verdun"],
  "sucy-en-brie": ["Rue de la République", "Avenue du Maréchal Foch", "Rue Pasteur", "Rue des Mûriers"],
  "joinville-le-pont": ["Rue de Paris", "Rue du Général Leclerc", "Avenue de Joinville", "Rue Paul Vaillant-Couturier"],
};

const POOL = [
  "Rue de la République",
  "Avenue du Général de Gaulle",
  "Rue Jean Jaurès",
  "Boulevard Principal",
  "Rue Victor Hugo",
  "Avenue de la République",
  "Rue Pasteur",
  "Rue du Centre",
  "Avenue Gambetta",
  "Rue des Écoles",
  "Boulevard de la Liberté",
  "Rue Carnot",
] as const;

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick<T>(arr: readonly T[], seed: number, idx: number): T {
  const i = (seed + idx * 131) % arr.length;
  return arr[i]!;
}

export function getRuesPrincipales(slug: string): readonly string[] {
  const known = KNOWN[slug];
  if (known?.length) return known;
  const seed = hashString(slug);
  const out = new Set<string>();
  let k = 0;
  while (out.size < 4 && k < 40) {
    out.add(pick(POOL, seed, k));
    k++;
  }
  return [...out];
}
