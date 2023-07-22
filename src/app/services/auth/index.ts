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

// export const signUp = (): AxiosRequestConfig => ({
//   method: 'POST',
//   url: 'https://qtihtykvrjjjkztgiddt.supabase.co/auth/v1/token?grant_type=password',
//   headers: {
//     apikey: import.meta.env.VITE_SUPABASE_APIKEY,
//     'Content-Type': 'application/json'
//   }
// });

export const signUp = (
  email: string,
  password: string,
  userData: object
): AxiosRequestConfig => ({
  method: 'POST',
  url: 'https://qtihtykvrjjjkztgiddt.supabase.co/rest/v1/auth',
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY,
    'Content-Type': 'application/json'
  },
  data: { pseudo: email, mdp: password, user_data: userData }
});
