"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import {ArrowRight, Check} from "lucide-react";
import Link from "next/link";
import { offers } from "@/lib/utils";

/*const offers = [
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
      "Vidéo HD",
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
];*/

export function Offers() {
  return (
    <Section>
      <SectionHeader
        title="Nos Offres"
        description="Choisissez la formule qui vous correspond le mieux"
      />

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        {offers.map((offer, index) => (
            <motion.div
                key={offer.name}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className={`relative flex flex-col rounded-2xl ${
                    offer.popular
                        ? "border-2 border-red-500 shadow-xl"
                        : "border border-gray-200 dark:border-gray-700"
                } bg-white dark:bg-gray-800 p-8`}
            >
              {offer.popular && (
                  <div
                      className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                    Recommandée
                  </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {offer.name}
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {offer.description}
              </p>
              <p className="mt-8 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {offer.price}
              </span>
              </p>

              <ul className="mt-8 space-y-4">
                {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-red-500"/>
                      </div>
                      <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                        {feature}
                      </p>
                    </li>
                ))}
              </ul>
              <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <ArrowRight className="h-6 w-6 text-red-500"/>
                      </div>
                      <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                        {offer.punch}
                      </p>
                    </li>
              </ul>

              <div className="mt-8">
                <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 ${
                        offer.popular
                            ? "border-transparent text-white bg-red-600 hover:bg-red-700"
                            : "border-red-600 text-red-600 hover:bg-red-50"
                    }`}
                >
                  Choisir cette offre
                </Link>
              </div>
            </motion.div>
        ))}
      </div>

      {/* Note spéciale pour les maisons de retraite */}
      <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.4}}
          className="mt-12 text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Vous représentez une maison de séniors ?{" "}
          <Link
              href="/contact"
              className="text-red-600 hover:text-red-700 font-medium"
          >
            Contactez-nous pour des tarifs préférentiels
          </Link>
        </p>
      </motion.div>
    </Section>
  );
}
