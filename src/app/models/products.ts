import { SalleResponse, Salles } from "./salles";

export type Etat = 'libre' | 'reservation';

export interface ProduitResponse extends SalleResponse {
  id_salle: number;
  date_depart: string;
  date_arrivee: string;
  prix: number;
  etat: Etat;
}

export class Produit {
  id: number;
  dateArrivee: string;
  dateDepart: string;
  prix: number;
  etat: Etat;
  salle: Salles;

  constructor({
    id_salle,
    date_arrivee,
    date_depart,
    prix,
    etat,
    ...rest
  }: ProduitResponse) {
    this.id = id_salle;
    this.dateArrivee = date_arrivee;
    this.dateDepart = date_depart;
    this.prix = prix;
    this.etat = etat;
    this.salle = new Salles(rest as SalleResponse);
  }
}