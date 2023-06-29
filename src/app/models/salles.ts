export class Salles {
  idSalle: number;
  titre: string;
  description: string;
  photo: string | null;
  pays: string;
  ville: string;
  adresse: string;
  cp: number;
  capacite: number;
  categorie: 'réunion' | 'bureau' | 'formation';

  constructor(
    idSalle: number,
    titre: string,
    description: string,
    photo: string | null,
    pays: string,
    ville: string,
    adresse: string,
    cp: number,
    capacite: number,
    categorie: 'réunion' | 'bureau' | 'formation'
  ) {
    this.idSalle = idSalle;
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
