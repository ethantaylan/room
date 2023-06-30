export interface AvisResponse {
  id_avis: number;
  id_membre: number;
  id_salle: number;
  commentaire: string;
  note: string;
  date_enregistrement: string;
}

export class Avis {
  idAvis: number;
  idMembre: number | null;
  idSalle: number | null;
  commentaire: string;
  note: string | null;
  dateEnregistrement: string | null;

  constructor({
    id_avis,
    id_membre,
    id_salle,
    commentaire,
    note,
    date_enregistrement
  }: AvisResponse) {
    this.idAvis = id_avis;
    this.idMembre = id_membre;
    this.idSalle = id_salle;
    this.commentaire = commentaire;
    this.note = note;
    this.dateEnregistrement = date_enregistrement;
  }
}
