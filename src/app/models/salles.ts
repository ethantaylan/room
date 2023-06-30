export class Salles {
  id_salle: number;
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
    id_salle: number,
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
    this.id_salle = id_salle;
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
