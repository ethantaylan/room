import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef } from 'react';
import { useGlobalContext, useGlobalDispatch } from 'src/app/context/context';
import { useAxios } from 'src/app/hooks/use-axios';
import { MemberResponse } from 'src/app/models/members';
import { login } from 'src/app/services/auth';
import swal from 'sweetalert';
import { Connect } from './connect';
import { Register } from './register';
import { RegisterFieldProps } from './register-field';

export interface ModalProps {
  isModal: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<ModalProps> = ({ isModal, onClose }) => {
  const cancelButtonRef = useRef(null);

  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  // REGISTER STATES
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [pseudo, setPseudo] = React.useState<string>('');
  const [mdp, setMdp] = React.useState<string>('');

  const [register, setRegister] = React.useState<boolean>(false);

  const dispatch = useGlobalDispatch();
  const { member } = useGlobalContext();

  const loginFetch = useAxios<MemberResponse>(login(username, password), false);

  const handleUsernameChange = () => {
    setUsername(usernameRef.current?.value || '');
  };

  const handlePasswordChange = () => {
    setPassword(passwordRef.current?.value || '');
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

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pseudoRef = useRef<HTMLInputElement>(null);
  const civiliteRef = useRef<HTMLInputElement>(null);
  const mdpRef = useRef<HTMLInputElement>(null);

  const RegisterFields: RegisterFieldProps[] = [
    {
      ref: firstnameRef,
      placerholder: 'John',
      onChange: () => setFirstName(firstnameRef.current?.value || '')
    }
  ];

  React.useEffect(() => {
    console.log(firstnameRef?.current?.value);
  }, [firstnameRef?.current?.value])
  
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
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      {register ? 'Inscription' : 'Connectez-vous'}
                    </h2>
                  </div>
                  {register ? (
                    <Register
                      firstnameRef={firstnameRef}
                      lastnameRef={lastnameRef}
                      emailRef={emailRef}
                      pseudoRef={pseudoRef}
                      civiliteRef={civiliteRef}
                      mdpRef={mdpRef}
                      registerFields={RegisterFields}
                    />
                  ) : (
                    <Connect
                      onUsernameChange={handleUsernameChange}
                      onPasswordChange={handlePasswordChange}
                      onSubmit={(_: any) => handleSubmit(_)}
                      onRegister={() => setRegister(true)}
                      usernameRef={usernameRef}
                      passwordRef={passwordRef}
                    />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
