"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Calendar, Camera, Film, Gift } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Calendar,
    title: "Prise de rendez-vous",
    description:
      "Premier contact et préparation des thématiques",
  },
  {
    icon: Camera,
    title: "Séance de 45 minutes",
    description:
      "Réalisation de l’enregistrement vidéo, dans un cadre familier et confortable",
  },
  {
    icon: Film,
    title: "Montage professionnel",
    description:
      "Montage de l’interview et livraison, création d'une capsule temporelle émotionnelle et authentique",
  },
  {
    icon: Gift,
    title: "Livraison personnalisée",
    description:
      "Recevez votre vidéo sur une clé USB et en accès cloud sécurisé",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <SectionHeader
        title="Comment ça marche ?"
        description="Un processus simple et efficace pour créer votre héritage vidéo"
      />

      <div className="mt-16 relative">
        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-red-500 z-10">
                <step.icon className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white text-center">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Une séance suffit pour créer un souvenir qui durera des générations
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
          >
            Réserver ma séance
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
