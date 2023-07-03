import { AxiosRequestConfig } from 'axios';

export const login = (
  username: string,
  password: string
): AxiosRequestConfig => ({
  method: 'POST',
  url: 'http://localhost:8888/auth/auth.php',
  data: {
    pseudo: username,
    mdp: password
  }
});
