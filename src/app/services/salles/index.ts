import { AxiosRequestConfig } from 'axios';

export const getSalles = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/salles/salles.php',
  method: 'GET'
});

export const postSalle = (
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
  url: 'http://localhost:8888/salles/post_salle.php',
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

export const deleteSalleById = (
  idSalle: number | null
): AxiosRequestConfig => ({
  url: 'http://localhost:8888/salles/delete_salle.php',
  method: 'DELETE',
  data: {
    id_salle: idSalle
  }
});

export const getSalleById = (idSalle: number | null): AxiosRequestConfig => ({
  url: 'http://localhost:8888/salles/get_salle_by_id.php',
  method: 'GET',
  data: {
    id_salle: idSalle
  }
});

export const updateSalle = (
  title?: string,
  description?: string,
  photo?: string,
  pays?: string,
  ville?: string,
  adresse?: string,
  cp?: number,
  capacite?: number,
  categorie?: string
): AxiosRequestConfig => ({
  url: 'http://localhost:8888/salles/update_salle.php',
  method: 'UPDATE',
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
