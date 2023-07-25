import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AppLayout } from '../app-layout/app-layout';
import { useGlobalContext, useGlobalDispatch } from '../context/context';
import { useAxios } from '../hooks/use-axios';
import { Member } from '../models/members';
import { authenticateUser, connectedUser } from '../services/auth';

export const Login: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const dispatch = useGlobalDispatch();

  const { member } = useGlobalContext();

  const { response, executeFetch } = useAxios<Member[]>(
    authenticateUser(username.toLowerCase(), password),
    false
  );

  React.useEffect(() => {
    const connectedUser = localStorage.getItem('connectedUser');

    if (response || connectedUser) {
      if (response?.length === 1) {
        dispatch({
          type: 'CONNECTED',
          payload: response?.[0]
        });
        Swal.fire('', '', 'success');
      } else {
        response?.length === 0 &&
          Swal.fire("Erreur lors de l'authentification", '', 'error');
      }
    }
  }, [response, connectedUser]);

  const handleSignIn = (event: React.ChangeEvent<HTMLButtonElement>) => {
    event.preventDefault();

    executeFetch();
    response?.length === 1 && navigate('/');
  };

  React.useEffect(() => {
    localStorage.setItem('connectedUser', member?.email || '');
  }, [member]);

  const navigate = useNavigate();

  return (
    <AppLayout withFooter={false}>
      <div className="mt-20 flex h-4/6 flex-col items-center justify-center">
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(event.target.value)
                }
                id="username"
                name="username"
                type="text"
                autoComplete="text"
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
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
              onClick={(_: any) => handleSignIn(_)}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Se connecter
            </button>
            <NavLink
              to="/register"
              className="mt-10 flex w-full cursor-pointer justify-center text-center text-sm font-semibold text-indigo-600"
            >
              S'inscrire
            </NavLink>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};
