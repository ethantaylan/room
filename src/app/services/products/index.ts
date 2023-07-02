import { AxiosRequestConfig } from 'axios';

export const getProducts = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/products/get_products.php',
  method: 'GET'
});
