import React from 'react';
import { useQuery } from 'react-query';

export class Commande {
  id_commande: number;
  id_membre: number | null;
  id_produit: number | null;
  date_enregistrement: string | null;

  constructor(
    id_commande: number,
    id_membre: number | null,
    id_produit: number | null,
    date_enregistrement: string | null
  ) {
    this.id_commande = id_commande;
    this.id_membre = id_membre;
    this.id_produit = id_produit;
    this.date_enregistrement = date_enregistrement;
  }
}

export const GetCommandes: React.FC = () => {
  const { isLoading, error, data } = useQuery('commandes', () =>
    fetch('http://localhost:8888/commandes/commandes.php').then(res => res.json())
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <ul>
      {data.map((commande: Commande, index: number) => (
        <li key={index}>
          <p>Commande ID: {commande.id_commande}</p>
          <p>Membre ID: {commande.id_membre}</p>
          <p>Produit ID: {commande.id_produit}</p>
          <p>Date d'enregistrement: {commande.date_enregistrement}</p>
        </li>
      ))}
    </ul>
  );
};
