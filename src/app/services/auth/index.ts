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
  url: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/authorize`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    email: username,
    password: password,
    connection: 'room-auth'
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
    connection: 'room-auth',
    user_metadata: userData
  }
});

// export const signUp = (
//   email: string,
//   password: string,
//   userData: object
// ): AxiosRequestConfig => ({
//   method: 'POST',
//   url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/auth',
//   headers: {
//     apikey: import.meta.env.VITE_SUPABASE_APIKEY,
//     'Content-Type': 'application/json'
//   },
//   data: { pseudo: email, mdp: password, user_data: userData }
// });
