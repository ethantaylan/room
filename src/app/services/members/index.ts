import { AxiosRequestConfig } from 'axios';

export const getMembers = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/membres.php',
  method: 'GET'
});
