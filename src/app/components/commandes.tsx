import React from 'react';
import { useAxios } from '../hooks/use-axios';
import { Commande, CommandeResponse } from '../models/commandes';
import { getCommandes } from '../services/commandes/index';

export const Commandes: React.FC = () => {
  const [commandes, setCommandes] = React.useState<Commande[]>([]);

  const getCommandesFetch = useAxios<CommandeResponse[]>(getCommandes());

  React.useEffect(() => {
    getCommandesFetch.response &&
      setCommandes(
        getCommandesFetch.response?.map(
          (a: CommandeResponse) => new Commande(a)
        )
      );
  }, [getCommandesFetch.response]);

  return (
    <ul>
      {commandes.map((commande: Commande, index: number) => (
        <li key={index}>
          <p>Commande ID: {commande.idCommande}</p>
          <p>Membre ID: {commande.idMembre}</p>
          <p>Produit ID: {commande.idProduit}</p>
          <p>Date d'enregistrement: {commande.dateEnregistrement}</p>
        </li>
      ))}
    </ul>
  );
};
