import { AxiosRequestConfig } from 'axios';
import { UserData } from 'src/app/components/auth/register';

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

export const postMembre = ({
  pseudo,
  mdp,
  lastName,
  firstName,
  email,
  statut,
  dateEnregistrement
}: UserData): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/post_membre.php',
  method: 'POST',
  data: {
    pseudo: pseudo,
    mdp: mdp,
    nom: lastName,
    prenom: firstName,
    email: email,
    statut: statut,
    date_enregistrement: dateEnregistrement
  }
});

export const deleteMemberById = (idMembre: number): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/delete_membre.php',
  method: 'DELETE',
  data: {
    id_membre: idMembre
  }
});
