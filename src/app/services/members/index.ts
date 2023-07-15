import { AxiosRequestConfig } from 'axios';

export const getMembers = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/membres.php',
  method: 'GET'
});

export const getMemberByEmail = (email: string): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/get_member_by_email.php',
  method: 'GET',
  params: {
    email
  }
});

export const postMembre = (
  pseudo: string,
  mdp: string,
  nom: string,
  prenom: string,
  email: string,
  civilite: string,
  statut: number,
  dateEnregistrement: string
): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/post_membre.php',
  method: 'POST',
  data: {
    pseudo: pseudo,
    mdp: mdp,
    nom: nom,
    prenom: prenom,
    email: email,
    civilite: civilite,
    statut: statut,
    date_enregistrement: dateEnregistrement
  }
});
