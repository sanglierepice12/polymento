/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ajout de l'option output: 'export' pour la génération statique
  output: 'export',

  // Optimisations de performance
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  // Configuration du cache et de la navigation
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
    ],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // Configuration du cache des pages
  staticPageGenerationTimeout: 120,

  // Optimisation des images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Ajout de cette option pour l'export statique
  },

  // Optimisation de la compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Suppression de la section headers car elle n'est pas compatible avec l'export statique
};

module.exports = nextConfig;