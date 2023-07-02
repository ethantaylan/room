import { AxiosRequestConfig } from 'axios';

export const getCommandes = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/commandes/commandes.php',
  method: 'GET'
});
