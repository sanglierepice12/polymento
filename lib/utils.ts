import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const offers = [
  {
    name: "Memento Essentiel",
    price: "950€",
    description: "L'essentiel pour préserver vos souvenirs",
    features: [
      "Interview professionnelle de 45 minutes",
      "Montage soigné",
      "Musique d'ambiance personnalisée",
      "Clé USB",
      "Accès cloud sécurisé à vie",
      "Vidéo HD/4K",
    ],
    punch:"Un témoignage sincère et authentique pour préserver l’essentiel de votre histoire.",
  },
  {
    name: "Memento Intégral",
    price: "à partir de 1100€",
    description: "L'expérience complète pour un héritage parfait",
    features: [
      "Tout ce qui est inclus dans l'Essentiel",
      "Plusieurs interviews thématiques (minimum deux vidéos de 30 min)",
      "Approfondissement de chaque grande étape de la vie (enfance, amour, carrière, voyages…)",
      "Intégration de photos d’archives pour enrichir le récit",
      "Organisation en chapitres de vie pour une navigation fluide",
    ],
    punch:"Pour aller plus loin et préserver chaque moment important de votre histoire.",
    popular: true,
  },
  {
    name: "Memento Historique",
    price: "à partir de 3000€",
    description: "Un documentaire personnalisé pour un récit unique et inoubliable",
    features: [
      "Tout ce qui est inclus dans Memento Intégral",
      "Documentaire sur-mesure, scénarisé selon vos souhaits",
      "Interviews multiples avec vous et vos proches",
      "Images d’archives (photos, vidéos personnelles, documents)",
      "Tournage sur plusieurs lieux emblématiques de votre histoire",
      "Clé USB + accès cloud sécurisé à vie",
    ],
    punch:"Une œuvre intime et précieuse pour transmettre votre héritage de façon exceptionnelle.",
  },
];
