export class Avis {
  id_avis: number;
  id_membre: number | null;
  id_salle: number | null;
  commentaire: string;
  note: number | null;
  date_enregistrement: string | null;

  constructor(
    id_avis: number,
    id_membre: number | null,
    id_salle: number | null,
    commentaire: string,
    note: number | null,
    date_enregistrement: string | null
  ) {
    this.id_avis = id_avis;
    this.id_membre = id_membre;
    this.id_salle = id_salle;
    this.commentaire = commentaire;
    this.note = note;
    this.date_enregistrement = date_enregistrement;
  }
}
