import React from 'react';

export interface ConnectProps {
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: () => void;
  onSubmit: (_: any) => void;
  onRegister: () => void;
  usernameRef: React.LegacyRef<HTMLInputElement>;
  passwordRef: React.LegacyRef<HTMLInputElement>;
}

export const Connect: React.FC<ConnectProps> = ({
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  onRegister,
  usernameRef,
  passwordRef
}) => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Pseudo
          </label>
          <div className="mt-2">
            <input
              ref={usernameRef}
              onChange={onUsernameChange}
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
              ref={passwordRef}
              onChange={onPasswordChange}
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
          <button
            onClick={onSubmit}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Se connecter
          </button>
        </div>
      </form>
      <p
        onClick={onRegister}
        className="mt-10 cursor-pointer text-center text-sm font-semibold text-indigo-600"
      >
        S'inscrire
      </p>
    </div>
  );
};
