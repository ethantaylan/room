import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { useGlobalContext, useGlobalDispatch } from 'src/app/context/context';
import { useAxios } from 'src/app/hooks/use-axios';
import { MemberResponse } from 'src/app/models/members';
import { login } from 'src/app/services/auth';
import swal from 'sweetalert';
import { RegisterModal } from './register-modal';

export interface ModalProps {
  isModal: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<ModalProps> = ({ isModal, onClose }) => {
  const cancelButtonRef = useRef(null);

  const [isRegisterModal, setIsRegisterModal] = React.useState<boolean>(false);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useGlobalDispatch();
  const { member } = useGlobalContext();

  const loginFetch = useAxios<MemberResponse>(login(username, password), false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginFetch.executeFetch();
    setUsername('');
    setPassword('');

    loginFetch.clear();

    onClose();
  };

  React.useEffect(() => {
    if (loginFetch.response) {
      dispatch({
        type: 'CONNECTED',
        payload: loginFetch.response
      });
      swal('Authentification réussie', '', 'success');
    }
  }, [loginFetch.response]);

  React.useEffect(() => {
    if (loginFetch.error) {
      swal(
        'Erreur',
        "Impossible de se connecter car le nom d'utilisateur et le mot de passe sont incorrects.",
        'error'
      );
    }
  }, [loginFetch.error]);

  React.useEffect(() => {
    if (member) {
      const connectedUser = localStorage.getItem('connectedUser');
      if (connectedUser !== member.email) {
        localStorage.setItem('connectedUser', member.email);
      }
    }
  }, [member]);

  return (
    <Transition.Root show={isModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <RegisterModal
                      isOpen={false}
                      onClose={function (): void {
                        throw new Error('Function not implemented.');
                      }}
                      onRegister={function (): void {
                        throw new Error('Function not implemented.');
                      }}
                    />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                      className="mx-auto h-10 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign in to your account
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Pseudo x
                        </label>
                        <div className="mt-2">
                          <input
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
                              href="#"
                              className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                              Mot de passe oublié
                            </a>
                          </div>
                        </div>
                        <div className="mt-2">
                          <input
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
                      onClick={() => {
                        onClose();
                        setIsRegisterModal(true);
                      }}
                      className="mt-10 text-center text-sm text-gray-500"
                    >
                      <a
                        href="#"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        S'inscrire
                      </a>
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
