import { AxiosRequestConfig } from 'axios';

export const getMembers = (): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/membres.php',
  method: 'GET'
});

export const getMemberByEmail = (email: string): AxiosRequestConfig => ({
  url: 'http://localhost:8888/membres/get_member_by_email.php',
  method: 'GET',
  params: {
    email
  }
});
