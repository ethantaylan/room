import { AxiosRequestConfig } from 'axios';

export const getSalles = (): AxiosRequestConfig => ({
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/salles',
  method: 'GET',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  }
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
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/salles',
  method: 'POST',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
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
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/salles',
  method: 'DELETE',
  params: {
    id_salle: `eq.${idSalle}`,
    select: '*'
  },
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
  data: {
    id_salle: idSalle
  }
});

export const getSalleById = (idSalle: number | null): AxiosRequestConfig => ({
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/salles',
  method: 'GET',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
  data: {
    id_salle: idSalle
  }
});

export const updateSalle = (body: {
  idSalle?: number;
  titre?: string;
  description?: string;
  photo?: string;
  pays?: string;
  ville?: string;
  adresse?: string;
  cp?: number;
  capacite?: number;
  categorie?: string;
}): AxiosRequestConfig => ({
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/salles',
  method: 'PUT',
  data: { ...body },
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  }
});
