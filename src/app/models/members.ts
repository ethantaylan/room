export interface MemberResponse {
  id_membre: number;
  pseudo: string;
  date_enregistrement: string;
  email: string;
  mdp: string;
  nom: string;
  prenom: string;
  statut: string;
}

export class Member {
  idMembre: number;
  pseudo: string;
  dateEnregistrement: string;
  email: string;
  mdp: string;
  nom: string;
  prenom: string;
  statut: string;

  constructor({
    id_membre,
    pseudo,
    date_enregistrement,
    email,
    mdp,
    nom,
    prenom,
    statut
  }: MemberResponse) {
    this.idMembre = id_membre;
    this.pseudo = pseudo;
    this.dateEnregistrement = date_enregistrement;
    this.email = email;
    this.mdp = mdp;
    this.nom = nom;
    this.prenom = prenom;
    this.statut = statut;
  }

  isAdmin(): boolean {
    return this.statut === '2';
  }
}
