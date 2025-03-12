"use client";

import { Section, SectionHeader } from "@/components/ui/section";

export default function CGVPage() {
    return (
        <>
            <Section>
                <SectionHeader
                    title="Conditions Générales de Vente (CGV)"
                    description="Les termes et conditions de vente de nos produits"
                />
                <div className="prose dark:prose-dark">
                    <h2>Préambule</h2>
                    <p>
                        Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre [Votre entreprise] et le client.
                    </p>
                    <h2>Produits</h2>
                    <p>
                        Les caractéristiques essentielles des produits sont décrites sur notre site. Les photographies n&apos;ont pas de valeur contractuelle.
                    </p>
                    <h2>Commande</h2>
                    <p>
                        Le client passe sa commande en ligne à partir du catalogue en ligne. Toute commande implique l&apos;acceptation des présentes CGV.
                    </p>
                    <h2>Prix</h2>
                    <p>
                        Les prix sont indiqués en euros, toutes taxes comprises. Les frais de livraison sont précisés avant la validation de la commande.
                    </p>
                    <h2>Paiement</h2>
                    <p>
                        Le paiement est effectué en ligne par carte bancaire, virement ou tout autre moyen de paiement accepté sur notre site.
                    </p>
                    <h2>Livraison</h2>
                    <p>
                        Les produits sont livrés à l&apos;adresse indiquée par le client lors de la commande. Les délais de livraison sont donnés à titre indicatif.
                    </p>
                    <h2>Rétractation</h2>
                    <p>
                        Le client dispose d&apos;un délai de 14 jours pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
                    </p>
                    <h2>Garantie</h2>
                    <p>
                        Les produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés.
                    </p>
                    <h2>Responsabilité</h2>
                    <p>
                        [Votre entreprise] ne peut être tenue responsable des dommages indirects résultant de l&apos;utilisation des produits.
                    </p>
                    <h2>Litiges</h2>
                    <p>
                        Les présentes CGV sont soumises à la loi française. En cas de litige, les tribunaux français seront seuls compétents.
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