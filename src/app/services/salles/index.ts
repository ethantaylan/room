import { AxiosRequestConfig } from 'axios';

export const getSalles = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/salles/salles.php',
  method: 'GET'
});

export const postSalles = (
  title: string,
  description: string,
  photo: string,
  pays: string,
  ville: string,
  adresse: string,
  cp: number,
  capacite: number,
  categorie: string
): AxiosRequestConfig => ({
  url: 'http://localhost:8888/salles/post_salles.php',
  method: 'POST',
  data: {
    titre: title,
    description,
    photo,
    pays,
    ville,
    adresse,
    cp,
    capacite,
    categorie
  }
});
