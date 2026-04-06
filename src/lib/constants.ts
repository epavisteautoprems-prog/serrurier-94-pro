export type Ville94 = {
  name: string;
  slug: string;
  cp: string;
  description?: string;
  quartiers?: readonly string[];
  metros?: readonly string[];
  axes?: readonly string[];
  specificites?: readonly string[];
  priceNote?: string;
  delai?: string;
  introHint?: string;
};

export type ServiceItem = {
  name: string;
  slug:
    | "ouverture-porte"
    | "changement-serrure"
    | "blindage-porte"
    | "rideau-metallique"
    | "depannage-vitrier"
    | "volet-roulant"
    | "urgence-serrurier";
  icon: string;
  prix: string;
  description: string;
};

export const SITE_CONFIG = {
  name: "Serrurier 94 Pro",
  phone: "01 87 66 71 26",
  phoneHref: "tel:+33187667126",
  email: "depannage.serrurierpro94@gmail.com",
  url: "https://www.serrurier-94-pro.fr",
  /** Lien Google Maps — recherche Val-de-Marne (à remplacer par la fiche établissement si besoin) */
  googleMapsUrl:
    "https://www.google.com/maps/search/serrurier+val-de-marne+94/@48.79,2.45,11z",
  experienceYears: 15,
  address: "Val-de-Marne (94), Île-de-France",
  /** Horaires détaillés affichés footer / confiance */
  horairesDetail:
    "Urgence serrurerie : 24h/24, 7j/7 (y compris week-ends et jours fériés). Rendez-vous non urgents : sur créneau selon disponibilité.",
  openingHours: "24h/24 - 7j/7",
  rating: 4.9,
  reviewCount: 312,
  interventionsCount: 3200,
  delai: "20 min",
  tagline: "Serrurier agréé 94 • Intervention 20 min • Devis gratuit",
  logoPath: "/logo.png",
  sameAs: [] as const,
  description:
    "Serrurier agréé dans tout le Val-de-Marne (94). Ouverture de porte, changement de serrure, blindage, vitrier urgence, rideau métallique. Intervention en 20 minutes, 24h/24 7j/7. Devis gratuit et prix transparents.",
} as const;

export const SERVICES: readonly ServiceItem[] = [
  {
    name: "Ouverture de porte",
    slug: "ouverture-porte",
    icon: "🔓",
    prix: "dès 89€",
    description: "Porte claquée, clé perdue, serrure bloquée",
  },
  {
    name: "Changement de serrure",
    slug: "changement-serrure",
    icon: "🔑",
    prix: "dès 149€",
    description: "Remplacement toutes marques",
  },
  {
    name: "Blindage de porte",
    slug: "blindage-porte",
    icon: "🛡️",
    prix: "dès 890€",
    description: "Porte blindée A2P certifiée",
  },
  {
    name: "Rideau métallique",
    slug: "rideau-metallique",
    icon: "🏪",
    prix: "devis gratuit",
    description: "Dépannage et réparation urgence",
  },
  {
    name: "Vitrier urgence",
    slug: "depannage-vitrier",
    icon: "🪟",
    prix: "dès 79€",
    description: "Remplacement vitrage toutes surfaces",
  },
  {
    name: "Volet roulant",
    slug: "volet-roulant",
    icon: "🪟",
    prix: "dès 129€",
    description: "Dépannage et motorisation",
  },
] as const;

export const VILLES_94: readonly Ville94[] = [
  {
    name: "Créteil",
    slug: "creteil",
    cp: "94000",
    description: "Capitale du Val-de-Marne",
    quartiers: ["Centre-ville", "Mont-Mesly", "Palais"],
    metros: ["Métro 8 (Créteil–Préfecture, Créteil–Université)", "RER D (Créteil Pompadour)"],
    axes: ["A86", "RN406", "D86"],
    specificites: [
      "Immeubles et résidences autour de Créteil Soleil",
      "Beaucoup d’accès copropriété (interphone, parkings)",
      "Flux importants aux heures de pointe (impact délai)",
    ],
    priceNote: "Prix repères identiques au 94, devis confirmé sur place selon porte (blindée/multipoints).",
    delai: "15–20 min",
    introHint:
      "Autour du centre commercial Créteil Soleil, du quartier de l’Échat et des bords de Marne",
  },
  {
    name: "Vitry-sur-Seine",
    slug: "vitry-sur-seine",
    cp: "94400",
    description: "2ème ville du 94",
    quartiers: ["Centre", "Coteau", "Port-à-l’Anglais"],
    metros: ["RER C (Les Ardoines)", "Tram T9 (selon secteurs)", "Proximité Paris 13e"],
    axes: ["A86", "RN305", "D5"],
    specificites: [
      "Mix logements anciens et résidences récentes",
      "Zones d’activités et ateliers (besoins rideaux métalliques)",
      "Accès parfois contraints (stationnement)",
    ],
    delai: "20–25 min",
    introHint: "Entre le centre, le Coteau et le Port-à-l’Anglais",
  },
  {
    name: "Saint-Maur-des-Fossés",
    slug: "saint-maur-des-fosses",
    cp: "94100",
    quartiers: ["La Varenne", "Le Parc", "Adamville"],
    metros: ["RER A (Saint-Maur–Créteil, La Varenne–Chennevières)", "RER E (secteurs proches)"],
    axes: ["D86", "D130", "Accès bords de Marne"],
    specificites: [
      "Beaucoup de pavillons et portes d’entrée robustes",
      "Quartiers résidentiels: demandes fréquentes de sécurisation",
      "Accès bords de Marne et zones calmes (rendez-vous possible)",
    ],
    delai: "20–25 min",
    introHint: "De La Varenne à Adamville, en passant par Le Parc",
  },
  {
    name: "Champigny-sur-Marne",
    slug: "champigny-sur-marne",
    cp: "94500",
    quartiers: ["Plant", "Centre", "Cœuilly"],
    metros: ["RER A (Champigny)", "RER E (secteurs proches)", "Accès bus vers RER"],
    axes: ["A4", "D4", "D86"],
    specificites: [
      "Quartiers variés (résidences + pavillonnaire)",
      "Demandes récurrentes ouverture de porte et cylindres",
      "Trafic variable autour des grands axes",
    ],
    delai: "20–30 min",
    introHint: "Du Plant au centre-ville, jusqu’à Cœuilly",
  },
  {
    name: "Ivry-sur-Seine",
    slug: "ivry-sur-seine",
    cp: "94200",
    quartiers: ["Centre", "Pierre-et-Marie-Curie", "Monmousseau"],
    metros: ["Métro 7 (Mairie d’Ivry, Pierre et Marie Curie)", "RER C (Ivry-sur-Seine)"],
    axes: ["A4 (proche)", "D5", "Quais de Seine"],
    specificites: [
      "Immeubles denses: accès digicodes, parkings",
      "Porte d’appartement multipoints fréquentes",
      "Interventions souvent en urgence (retours tardifs)",
    ],
    delai: "20–25 min",
    introHint: "Du centre à Pierre-et-Marie-Curie, côté quais de Seine",
  },
  {
    name: "Maisons-Alfort",
    slug: "maisons-alfort",
    cp: "94700",
    quartiers: ["Charentonneau", "Alfort", "Les Juilliottes"],
    metros: ["Métro 8 (Maisons-Alfort–Stade, Les Juilliottes)", "RER D (Maisons-Alfort–Alfortville)"],
    axes: ["A86", "D6", "D19"],
    specificites: [
      "Quartiers pavillonnaires et résidences",
      "Demandes sécurisation après sinistre",
      "Accès rapide via A86 (délai souvent court)",
    ],
    delai: "15–20 min",
    introHint: "De Charentonneau aux Juilliottes",
  },
  {
    name: "Fontenay-sous-Bois",
    slug: "fontenay-sous-bois",
    cp: "94120",
    quartiers: ["Village", "Bois Cadet", "Val de Fontenay"],
    metros: ["RER A/E (Val de Fontenay)", "Bus vers Vincennes/Paris"],
    axes: ["A86", "D143", "Accès Val de Fontenay"],
    specificites: [
      "Grand pôle transports (Val de Fontenay)",
      "Résidences et bureaux: besoins contrôle d’accès",
      "Trafic variable aux heures de pointe",
    ],
    delai: "25–30 min",
    introHint: "Entre le Village et Val de Fontenay",
  },
  {
    name: "Villejuif",
    slug: "villejuif",
    cp: "94800",
    quartiers: ["Centre", "Paul Vaillant-Couturier", "Monsivry"],
    metros: ["Métro 7 (Villejuif–Louis Aragon, Paul Vaillant-Couturier)", "Tram/bus selon secteurs"],
    axes: ["A6 (proche)", "D7", "RN7"],
    specificites: [
      "Immeubles et résidences: accès copropriété",
      "Interventions fréquentes sur portes d’appartement",
      "Proximité grands axes (délai variable selon trafic)",
    ],
    delai: "20–25 min",
    introHint: "Du centre à Paul Vaillant-Couturier",
  },
  {
    name: "Vincennes",
    slug: "vincennes",
    cp: "94300",
    quartiers: ["Centre", "Diderot", "Saint-Louis"],
    metros: ["Métro 1 (Château de Vincennes)", "RER A (Vincennes)"],
    axes: ["Périphérique (proche)", "D120", "Accès Bois de Vincennes"],
    specificites: [
      "Immeubles anciens: portes qui travaillent",
      "Exigences esthétiques copropriété",
      "Demande fréquente de cylindres renforcés",
    ],
    delai: "20–25 min",
    introHint: "Autour du centre et du secteur Diderot",
  },
  {
    name: "Alfortville",
    slug: "alfortville",
    cp: "94140",
    quartiers: ["Confluences", "Centre", "Nord"],
    metros: ["RER D (Maisons-Alfort–Alfortville)", "Bus vers métro 8"],
    axes: ["A86", "D19", "Quais (Seine/Marne)"],
    specificites: [
      "Secteurs confluences: résidences récentes",
      "Accès parfois contraints (stationnement)",
      "Dépannages fréquents clé cassée/serrure bloquée",
    ],
    delai: "15–20 min",
    introHint: "Entre les Confluences et le centre",
  },
  {
    name: "Choisy-le-Roi",
    slug: "choisy-le-roi",
    cp: "94600",
    quartiers: ["Centre", "Gondoles", "Port"],
    metros: ["RER C (Choisy-le-Roi)", "Tram T9 (selon secteurs)"],
    axes: ["A86", "RN305", "D5"],
    specificites: [
      "Commerces et axes passants: rideaux métalliques",
      "Résidences: demandes changement de cylindre",
      "Proximité Orly: flux variable",
    ],
    delai: "20–25 min",
    introHint: "Du centre au quartier des Gondoles",
  },
  {
    name: "Le Kremlin-Bicêtre",
    slug: "le-kremlin-bicetre",
    cp: "94270",
    quartiers: ["Centre", "Les Plantes", "Barnufles"],
    metros: ["Métro 7 (Le Kremlin-Bicêtre)", "Proximité périphérique"],
    axes: ["Périphérique", "A6 (proche)", "D7"],
    specificites: [
      "Immeubles denses, accès digicode",
      "Urgences fréquentes (porte claquée)",
      "Interventions rapides selon circulation",
    ],
    delai: "20–25 min",
    introHint: "Autour du centre et du secteur des Plantes",
  },
  {
    name: "Nogent-sur-Marne",
    slug: "nogent-sur-marne",
    cp: "94130",
    quartiers: ["Centre", "Port", "Plaisance"],
    metros: ["RER A (Nogent-sur-Marne)", "Accès bords de Marne"],
    axes: ["A4", "D86", "D120"],
    specificites: [
      "Quartiers bords de Marne: pavillonnaire",
      "Demandes sécurisation et cylindres renforcés",
      "Accès variable autour A4",
    ],
    delai: "25–30 min",
    introHint: "Du centre au port de plaisance, bords de Marne",
  },
  {
    name: "Thiais",
    slug: "thiais",
    cp: "94320",
    quartiers: ["Centre", "Apollonia", "Grignon"],
    metros: ["Tram T9 (selon secteurs)", "RER C (proche)", "Accès Orly/Thiais Village"],
    axes: ["A86", "A6", "RN7"],
    specificites: [
      "Zones commerciales: rideaux métalliques",
      "Résidences: dépannage serrure/cylindre",
      "Trafic important autour RN7/A86",
    ],
    delai: "20–25 min",
    introHint: "Entre le centre et le secteur Grignon",
  },
  {
    name: "Orly",
    slug: "orly",
    cp: "94310",
    quartiers: ["Orly-Ville", "Orly-Parc", "Aviateurs"],
    metros: ["Orlyval / RER B (connexion)", "Tram T7 (selon secteurs)"],
    axes: ["A106", "A86", "RN7"],
    specificites: [
      "Flux et accès variables (zone aéroportuaire)",
      "Résidences et hôtels: urgences fréquentes",
      "Besoins sécurisation après incident",
    ],
    delai: "20–30 min",
    introHint: "De Orly-Ville au secteur des Aviateurs",
  },
  {
    name: "Charenton-le-Pont",
    slug: "charenton-le-pont",
    cp: "94220",
    quartiers: ["Centre", "Valmy", "Bercy"],
    metros: ["Métro 8 (Charenton-Écoles, Liberté)", "Proximité métro 14 (Bercy)"],
    axes: ["Périphérique", "Quais", "Accès Bercy"],
    specificites: [
      "Immeubles et bureaux: accès contrôlés",
      "Exigences copropriété (esthétique/porte palière)",
      "Délai souvent court selon trafic",
    ],
    delai: "15–20 min",
    introHint: "Autour de Charenton-Écoles et des quais",
  },
  {
    name: "Cachan",
    slug: "cachan",
    cp: "94230",
    quartiers: ["Centre", "Coteau", "La Plaine"],
    metros: ["RER B (Arcueil–Cachan)", "Accès bus vers métro"],
    axes: ["A6 (proche)", "D920 (proche)", "Accès coteaux"],
    specificites: [
      "Quartiers en pente: accès et stationnement",
      "Résidences étudiantes et logements",
      "Demandes fréquentes de changement de cylindre",
    ],
    delai: "25–30 min",
    introHint: "Du centre au Coteau",
  },
  {
    name: "L'Haÿ-les-Roses",
    slug: "l-hay-les-roses",
    cp: "94240",
    quartiers: ["Centre", "Petit Robinson", "Vallée-aux-Renards"],
    metros: ["Métro 14 (selon connexions)", "RER B (proche)", "Bus vers Paris"],
    axes: ["A6", "A86", "D7"],
    specificites: [
      "Secteurs pavillonnaires + résidences",
      "Demandes de sécurisation et blindage",
      "Accès variable selon axes",
    ],
    delai: "20–25 min",
    introHint: "Du centre au secteur Vallée-aux-Renards",
  },
  {
    name: "Sucy-en-Brie",
    slug: "sucy-en-brie",
    cp: "94370",
    quartiers: ["Centre", "Le Fort", "La Fosse Rouge"],
    metros: ["RER A (Sucy–Bonneuil)", "Accès bus vers Créteil"],
    axes: ["N406", "D136", "Accès forêts/secteurs résidentiels"],
    specificites: [
      "Beaucoup de pavillons: portes d’entrée, volets",
      "Demandes sécurisation après sinistre",
      "Délais variables selon trafic périphérique",
    ],
    delai: "25–35 min",
    introHint: "Autour du centre et du Fort de Sucy",
  },
  {
    name: "Joinville-le-Pont",
    slug: "joinville-le-pont",
    cp: "94340",
    quartiers: ["Centre", "Polangis", "Palissy"],
    metros: ["RER A (Joinville-le-Pont)", "Accès bords de Marne"],
    axes: ["A4", "D86", "D120"],
    specificites: [
      "Quartiers bords de Marne: pavillonnaire",
      "Résidences: changements de cylindre fréquents",
      "Accès variable autour A4",
    ],
    delai: "20–25 min",
    introHint: "Entre Polangis et le centre, bords de Marne",
  },
  { name: "Gentilly", slug: "gentilly", cp: "94250", delai: "25–30 min" },
  { name: "Arcueil", slug: "arcueil", cp: "94110", delai: "25–30 min" },
  { name: "Chevilly-Larue", slug: "chevilly-larue", cp: "94550", delai: "25–30 min" },
  {
    name: "Villeneuve-Saint-Georges",
    slug: "villeneuve-saint-georges",
    cp: "94190",
    delai: "30–40 min",
  },
  { name: "Le Perreux-sur-Marne", slug: "le-perreux-sur-marne", cp: "94170", delai: "25–30 min" },
  { name: "Villiers-sur-Marne", slug: "villiers-sur-marne", cp: "94350", delai: "30–35 min" },
  { name: "Bonneuil-sur-Marne", slug: "bonneuil-sur-marne", cp: "94380", delai: "30–35 min" },
  { name: "Limeil-Brévannes", slug: "limeil-brevannes", cp: "94450", delai: "35–40 min" },
  { name: "Chennevières-sur-Marne", slug: "chennevieres-sur-marne", cp: "94430", delai: "30–35 min" },
  { name: "Boissy-Saint-Léger", slug: "boissy-saint-leger", cp: "94470", delai: "35–40 min" },
  { name: "Saint-Mandé", slug: "saint-mande", cp: "94160", delai: "20–25 min" },
  { name: "Marolles-en-Brie", slug: "marolles-en-brie", cp: "94440", delai: "35–40 min" },
  { name: "Noiseau", slug: "noiseau", cp: "94880", delai: "35–45 min" },
  { name: "Périgny", slug: "perigny", cp: "94520", delai: "35–45 min" },
  { name: "Santeny", slug: "santeny", cp: "94440", delai: "40–50 min" },
  { name: "Valenton", slug: "valenton", cp: "94460", delai: "30–35 min" },
  { name: "Villecresnes", slug: "villecresnes", cp: "94440", delai: "35–45 min" },
  { name: "Bry-sur-Marne", slug: "bry-sur-marne", cp: "94360", delai: "25–30 min" },
  { name: "Ablon-sur-Seine", slug: "ablon-sur-seine", cp: "94480", delai: "30–35 min" },
  { name: "Mandres-les-Roses", slug: "mandres-les-roses", cp: "94520", delai: "45–55 min" },
] as const;

export const PRIORITY_VILLES_SLUGS = new Set<string>([
  "creteil",
  "vitry-sur-seine",
  "saint-maur-des-fosses",
  "champigny-sur-marne",
  "ivry-sur-seine",
  "maisons-alfort",
  "fontenay-sous-bois",
  "villejuif",
  "vincennes",
  "alfortville",
  "choisy-le-roi",
  "le-kremlin-bicetre",
  "nogent-sur-marne",
  "thiais",
  "orly",
  "charenton-le-pont",
  "cachan",
  "l-hay-les-roses",
  "sucy-en-brie",
  "joinville-le-pont",
]);

export function getVilleBySlug(slug: string): Ville94 | undefined {
  return VILLES_94.find((v) => v.slug === slug);
}

