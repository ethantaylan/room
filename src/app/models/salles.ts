type Categorie = 'réunion' | 'bureau' | 'formation';

export interface SalleResponse {
  id_salle: number;
  titre: string;
  description: string;
  photo: string;
  pays: string;
  ville: string;
  adresse: string;
  cp: number;
  capacite: number;
  categorie: Categorie;
}

export class  Salle {
  idSalle: number;
  titre: string;
  description: string;
  photo: string | null;
  pays: string;
  ville: string;
  adresse: string;
  cp: number;
  capacite: number;
  categorie: Categorie;

  constructor({
    id_salle,
    titre,
    description,
    photo,
    pays,
    ville,
    adresse,
    cp,
    capacite,
    categorie
  }: SalleResponse) {
    this.idSalle = id_salle;
    this.titre = titre;
    this.description = description;
    this.photo = photo;
    this.pays = pays;
    this.ville = ville;
    this.adresse = adresse;
    this.cp = cp;
    this.capacite = capacite;
    this.categorie = categorie;
  }
}
