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

export const signIn = (
  username: string,
  password: string
): AxiosRequestConfig => ({
  url: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/oauth/token`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    username: username,
    password: password,
    connection: 'Username-Password-Authentication',
    grant_type: 'password'
  }
});

export const signUpWithDB = (
  email: string,
  password: string,
  userData: object
): AxiosRequestConfig => ({
  url: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/dbconnections/signup`,
  method: 'POST',
  data: {
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
    audience: 'https://dev-20cf07b3bhdhpvv1.us.auth0.com/api/v2/',
    grant_type: 'password',
    email: email,
    password: password,
    connection: 'Username-Password-Authentication',
    user_metadata: userData
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
