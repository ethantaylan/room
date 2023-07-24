import { AxiosRequestConfig } from 'axios';
import { UserData } from 'src/app/pages/register';

export const getMembers = (): AxiosRequestConfig => ({
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/membres',
  method: 'GET',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  }
});

export const getMemberByEmail = (email: string): AxiosRequestConfig => ({
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/membres',
  method: 'GET',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
  params: {
    email: `eq.${email}`,
    select: '*'
  },
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
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/membres',
  method: 'POST',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
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
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/membres',
  method: 'DELETE',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
  data: {
    id_membre: idMembre
  }
});
