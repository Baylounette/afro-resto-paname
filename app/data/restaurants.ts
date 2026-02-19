export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  country: string;
  arrondissement: number;
  address: string;
  description: string;
  speciality: string;
  priceRange: string;
  emoji: string;
  tags: string[];
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Chez Fatou",
    cuisine: "Sénégalaise",
    country: "Sénégal",
    arrondissement: 18,
    address: "12 Rue Doudeauville, 75018 Paris",
    description: "Un voyage culinaire authentique au cœur du Sénégal. Les saveurs de Dakar s'invitent à votre table dans une atmosphère chaleureuse et familiale.",
    speciality: "Thiéboudienne",
    priceRange: "€€",
    emoji: "🇸🇳",
    tags: ["Authentique", "Familial", "Thiéboudienne"],
  },
  {
    id: 2,
    name: "Le Djoliba",
    cuisine: "Malienne",
    country: "Mali",
    arrondissement: 10,
    address: "45 Rue du Faubourg Saint-Denis, 75010 Paris",
    description: "L'excellence de la cuisine malienne dans le 10e arrondissement. Un endroit incontournable pour découvrir les saveurs du fleuve Niger.",
    speciality: "Poulet Yassa",
    priceRange: "€€",
    emoji: "🇲🇱",
    tags: ["Yassa", "Attiéké", "Convivial"],
  },
  {
    id: 3,
    name: "Maquis du Roi",
    cuisine: "Ivoirienne",
    country: "Côte d'Ivoire",
    arrondissement: 11,
    address: "8 Rue de la Roquette, 75011 Paris",
    description: "L'ambiance des maquis d'Abidjan retranscrite fidèlement à Paris. Grillades parfumées et sauce graine qui font le bonheur des connaisseurs.",
    speciality: "Aloko & Poisson Braisé",
    priceRange: "€€",
    emoji: "🇨🇮",
    tags: ["Grillades", "Maquis", "Aloko"],
  },
  {
    id: 4,
    name: "Addis Amba",
    cuisine: "Éthiopienne",
    country: "Éthiopie",
    arrondissement: 5,
    address: "32 Rue Monge, 75005 Paris",
    description: "Une expérience sensorielle unique avec l'injera et les wots épicés. La gastronomie éthiopienne dans toute sa splendeur au Quartier Latin.",
    speciality: "Injera & Wot",
    priceRange: "€€€",
    emoji: "🇪🇹",
    tags: ["Injera", "Végétarien", "Épices"],
  },
  {
    id: 5,
    name: "Marrakech Nights",
    cuisine: "Marocaine",
    country: "Maroc",
    arrondissement: 19,
    address: "67 Avenue Jean Jaurès, 75019 Paris",
    description: "Les mille et une saveurs du Maghreb vous envoûtent dans ce restaurant aux décors somptueux. Couscous royaux et tajines d'exception.",
    speciality: "Couscous Royal",
    priceRange: "€€€",
    emoji: "🇲🇦",
    tags: ["Couscous", "Tajine", "Végans OK"],
  },
  {
    id: 6,
    name: "Dakar Street Food",
    cuisine: "Street Food Africaine",
    country: "Afrique de l'Ouest",
    arrondissement: 18,
    address: "3 Rue Myrha, 75018 Paris",
    description: "L'énergie vibrante de la street food africaine au cœur de la Goutte d'Or. Des saveurs explosives sur le pouce dans un cadre décontracté.",
    speciality: "Fataya & Dibi",
    priceRange: "€",
    emoji: "🌍",
    tags: ["Street Food", "Rapide", "Authentique"],
  },
  {
    id: 7,
    name: "Villa Cameroun",
    cuisine: "Camerounaise",
    country: "Cameroun",
    arrondissement: 13,
    address: "28 Avenue d'Ivry, 75013 Paris",
    description: "Le meilleur de la cuisine camerounaise dans un cadre élégant. Ndolé, eru et kondre préparés avec amour par un chef originaire de Douala.",
    speciality: "Ndolé au Poisson",
    priceRange: "€€",
    emoji: "🇨🇲",
    tags: ["Ndolé", "Eru", "Gastronomique"],
  },
  {
    id: 8,
    name: "Nubia Kitchen",
    cuisine: "Soudano-Égyptienne",
    country: "Soudan / Égypte",
    arrondissement: 2,
    address: "15 Rue Montorgueil, 75002 Paris",
    description: "La fusion fascinante des cuisines nubienne et égyptienne. Des épices envoûtantes et des recettes ancestrales dans un cadre moderne et chaleureux.",
    speciality: "Ful Medames & Kushari",
    priceRange: "€€",
    emoji: "🇪🇬",
    tags: ["Fusion", "Épices", "Végétarien"],
  },
  {
    id: 9,
    name: "Le Baobab d'Or",
    cuisine: "Guinéenne",
    country: "Guinée",
    arrondissement: 20,
    address: "74 Rue de Belleville, 75020 Paris",
    description: "Sous le baobab imaginaire de Belleville, cette adresse familiale perpétue les traditions culinaires guinéennes avec générosité et passion.",
    speciality: "Sauce Feuille & Riz",
    priceRange: "€",
    emoji: "🇬🇳",
    tags: ["Familial", "Généreux", "Traditionnel"],
  },
  {
    id: 10,
    name: "Cape Town Bistro",
    cuisine: "Sud-Africaine",
    country: "Afrique du Sud",
    arrondissement: 7,
    address: "9 Rue de Grenelle, 75007 Paris",
    description: "Une fenêtre ouverte sur l'arc-en-ciel sud-africain. Cuisine fusion afro-européenne raffinée avec des vins du Cap pour accompagner chaque plat.",
    speciality: "Bobotie & Braai",
    priceRange: "€€€",
    emoji: "🇿🇦",
    tags: ["Fusion", "Vins du Cap", "Raffiné"],
  },
];

export const arrondissements = [...new Set(restaurants.map((r) => r.arrondissement))].sort(
  (a, b) => a - b
);
