"use client";

import { Section, SectionHeader } from "@/components/ui/section";

export default function MentionsLegalesPage() {
    return (
        <>
            <Section>
                <SectionHeader
                    title="Mentions Légales"
                    description="Les informations légales concernant notre site"
                />
                <div className="prose dark:prose-dark">
                    <h2>Éditeur du site</h2>
                    <p>
                        Nom de l&apos;entreprise : Shauni Studio <br />
                        Adresse : 32 Cours de la Liberté, Lyon 69003 <br />
                        Téléphone : 06 25 16 96 32 <br />
                        Adresse e-mail : info@polymento.fr
                    </p>
                    <h2>Hébergement</h2>
                    <p>
                        Nom de l&apos;hébergeur : O2Switch <br />
                        Adresse : Chem. des Pardiaux, 63000 Clermont-Ferrand <br />
                        Téléphone : 04 44 44 60 40 <br />
                    </p>
                    <h2>Propriété intellectuelle</h2>
                    <p>
                        Le contenu de ce site est protégé par la législation en vigueur sur les droits d&apos;auteur et la propriété intellectuelle. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
                    </p>
                    <h2>Responsabilité</h2>
                    <p>
                        [Votre entreprise] ne peut être tenue responsable des dommages directs ou indirects résultant de l&apos;utilisation du site.
                    </p>
                    <h2>Cookies</h2>
                    <p>
                        Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l&apos;utilisation de cookies.
                    </p>
                    <h2>Loi applicable</h2>
                    <p>
                        Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
                    </p>
                    <h2>Contact</h2>
                    <p>
                        Pour toute question, vous pouvez nous contacter à l&apos;adresse suivante : info@polymento.fr
                    </p>
                </div>
            </Section>
        </>
    );
}