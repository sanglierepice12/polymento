"use client";

import { Section, SectionHeader } from "@/components/ui/section";

export default function PolitiqueDeConfidentialitePage() {
    return (
        <>
            <Section>
                <SectionHeader
                    title="Politique de Confidentialité"
                    description="Comment nous collectons, utilisons et protégeons vos informations"
                />
                <div className="prose dark:prose-dark">
                    <h2>Introduction</h2>
                    <p>
                        Nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
                    </p>
                    <h2>Données collectées</h2>
                    <p>
                        Nous pouvons collecter les types de données suivants :
                        <ul>
                            <li>Informations personnelles (nom, adresse e-mail, etc.)</li>
                            <li>Données de navigation (adresse IP, pages visitées, etc.)</li>
                        </ul>
                    </p>
                    <h2>Utilisation des données</h2>
                    <p>
                        Les données collectées sont utilisées pour :
                        <ul>
                            <li>Fournir et améliorer nos services</li>
                            <li>Communiquer avec vous</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>
                    </p>
                    <h2>Partage des données</h2>
                    <p>
                        Nous ne vendons pas, n&apos;échangeons pas et ne transférons pas vos données personnelles à des tiers sans votre consentement, sauf dans les cas suivants :
                        <ul>
                            <li>Obligations légales</li>
                            <li>Prestataires de services travaillant en notre nom</li>
                        </ul>
                    </p>
                    <h2>Sécurité des données</h2>
                    <p>
                        Nous mettons en œuvre des mesures de sécurité pour protéger vos données contre tout accès non autorisé.
                    </p>
                    <h2>Vos droits</h2>
                    <p>
                        Vous avez le droit d&apos;accéder, de rectifier ou de supprimer vos données personnelles. Pour exercer ces droits, veuillez nous contacter à l&apos;adresse suivante : [Adresse e-mail de contact]
                    </p>
                    <h2>Modifications de la politique de confidentialité</h2>
                    <p>
                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.
                    </p>
                    <h2>Contact</h2>
                    <p>
                        Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à l&apos;adresse suivante : info@polymento.fr
                    </p>
                </div>
            </Section>
        </>
    );
}