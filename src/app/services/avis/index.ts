import { AxiosRequestConfig } from 'axios';

export const getAvis = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/avis/get_avis.php',
  method: 'GET'
});

export const postAvis = (
  comment: string,
  date: string,
  id_avis: number,
  id_membre: number,
  id_salle: number,
  note: number
): AxiosRequestConfig => ({
  url: 'http://localhost:8888/avis/post_avis.php',
  method: 'POST',
  data: {
    id_membre: id_membre,
    id_avis: id_avis,
    id_salle: id_salle,
    commentaire: comment,
    note: note,
    date_enregistrement: date
  }
});

export const deleteAvis = (id: number): AxiosRequestConfig => ({
  url: 'http://localhost:8888/avis/delete_avis.php',
  method: 'DELETE',
  data: {
    id_avis: id
  }
});
