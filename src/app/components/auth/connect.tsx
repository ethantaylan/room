import React from 'react';
import { supabase } from 'src/app/config';
import { useGlobalContext, useGlobalDispatch } from 'src/app/context/context';
import Swal from 'sweetalert2';
import { UserData } from './register/register';

export interface ConnectProps {
  onClose: () => void;
  onRegister: () => void;
}

export const Connect: React.FC<ConnectProps> = ({ onClose, onRegister }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const dispatch = useGlobalDispatch();

  const { member } = useGlobalContext();

  const handleUsernameChange = () => {
    setEmail(usernameRef.current?.value || '');
  };

  const handlePasswordChange = () => {
    setPassword(passwordRef.current?.value || '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
    setPassword('');

    handleConnect();
    onClose();
  };

  const handleConnect = async () => {
    const { data } = await supabase
      .from('membres')
      .select('*')
      .eq('email', email)
      .eq('mdp', password);

    if (data?.length !== 0) {
      localStorage.setItem('connectedUser', email);
      Swal.fire('Vous êtes connecté', '', 'success');

      dispatch({
        type: 'CONNECTED',
        payload: data?.[0]
      });
    } else {
      Swal.fire("Erreur lors de l'authentification", '', 'error');
    }
  };

  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

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
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
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
            onClick={(_: any) => handleSubmit(_)}
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
