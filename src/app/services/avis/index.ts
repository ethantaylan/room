import { AxiosRequestConfig } from 'axios';

export const getAvisAxios = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/avis.php',
  method: 'GET'
});

export const postAvis = (
  comment: string,
  date: string,
  idAvis: number,
  idMembre: number,
  idSalle: number,
  note: number
): AxiosRequestConfig => ({
  url: 'http://localhost:8888/post-avis.php',
  method: 'POST',
  data: {
    id_membre: idMembre,
    id_avis: idAvis,
    id_salle: idSalle,
    commentaire: comment,
    note: note,
    date_enregistrement: date
  }
});

