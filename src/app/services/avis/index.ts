import { AxiosRequestConfig } from 'axios';

export const getAvis = (): AxiosRequestConfig => ({
  url: 'http://localhost/avis/get-avis.php',
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
  url: 'http://localhost/avis/post-avis.php',
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
  url: 'http://localhost/avis/delete-avis.php',
  method: 'DELETE',
  data: {
    id_avis: id
  }
});
