import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { LoginButton } from '../components/auth/auth0/login-button';
import { LogoutButton } from '../components/auth/auth0/logout-button';
import { UserData } from '../components/auth/auth0/user-data';

export const Login: React.FC = () => {
  return (
    <AppLayout withFooter={false}>
      <div className="flex mt-20 h-4/6 flex-col items-center justify-center">
        <form
          className="w-7/12 space-y-6 rounded border px-20 py-14"
          action="#"
          method="POST"
        >
          <h1 className="mb-10 text-center text-2xl font-bold">CONNEXION</h1>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Pseudo
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 ps-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de passe
              </label>
              <div className="text-sm">
                <a
                  href="/"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Mot de passe oublié
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 ps-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Se connecter
            </button>
            <p className="mt-10 cursor-pointer text-center text-sm font-semibold text-indigo-600">
              S'inscrire
            </p>
          </div>
        </form>
      </div>
      <LoginButton />
      <LogoutButton />
      <UserData />
    </AppLayout>
  );
};
