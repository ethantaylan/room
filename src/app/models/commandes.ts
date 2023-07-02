export interface CommandeResponse {
  id_commande: number;
  id_membre: number | null;
  id_produit: number | null;
  date_enregistrement: string | null;
}
export class Commande {
  idCommande: number;
  idMembre: number | null;
  idProduit: number | null;
  dateEnregistrement: string | null;

  constructor({
    id_commande,
    id_membre,
    id_produit,
    date_enregistrement
  }: CommandeResponse) {
    this.idCommande = id_commande;
    this.idMembre = id_membre;
    this.idProduit = id_produit;
    this.dateEnregistrement = date_enregistrement;
  }
}
