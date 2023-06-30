export class Avis {
    idAvis: number;
    idMembre: number | null;
    idSalle: number | null;
    commentaire: string;
    note: number | null;
    dateEnregistrement: string | null;
  
    constructor(
      id_avis: number,
      id_membre: number | null,
      id_salle: number | null,
      commentaire: string,
      note: number | null,
      date_enregistrement: string | null
    ) {
      this.idAvis = id_avis;
      this.idMembre = id_membre;
      this.idSalle = id_salle;
      this.commentaire = commentaire;
      this.note = note;
      this.dateEnregistrement = date_enregistrement;
    }
  }