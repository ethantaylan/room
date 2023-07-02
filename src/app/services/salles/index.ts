import { AxiosRequestConfig } from 'axios';

export const getSalles = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/salles/salles.php',
  method: 'GET'
});
