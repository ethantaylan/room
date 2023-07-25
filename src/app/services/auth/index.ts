import { AxiosRequestConfig } from 'axios';

export const login = (
  username: string,
  password: string
): AxiosRequestConfig => ({
  method: 'POST',
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/auth/v1/token?grant_type=password',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY,
    'Content-Type': 'application/json'
  },
  data: {
    email: username,
    password: password
  }
});

export const signUpWithDB = (
  username: string,
  password: string,
  userData: object
): AxiosRequestConfig => ({
  url: `https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/membres`,
  method: 'GET',
  params: {
    pseudo: `eq.${username}`,
    select: '*'
  },
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
  data: {
    pseudo: username,
    mdp: password
  }
});

export const connectedUser = (accessToken: string): AxiosRequestConfig => ({
  url: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/userinfo`,
  method: 'GET',
  data: { scope: 'email profile' },
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

export const signInSupabase = (): AxiosRequestConfig => ({
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/membres',
  method: 'GET',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  }
});

export const authenticateUser = (
  username: string,
  password: string
): AxiosRequestConfig => ({
  url: `https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/membres`,
  method: 'GET',
  params: {
    pseudo: `eq.${username}`,
    select: '*'
  },
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY
  },
  data: {
    pseudo: username,
    mdp: password
  }
});
