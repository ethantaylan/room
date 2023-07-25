import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef } from 'react';
import { Connect } from './connect';
import { Register } from './register/register';

export interface ModalProps {
  isModal: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<ModalProps> = ({ isModal, onClose }) => {
  const cancelButtonRef = useRef(null);

  const [register, setRegister] = React.useState<boolean>(false);

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
          <div className="fixed inset-0  bg-neutral-800 bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {/* <Auth
                  redirectTo="/"
                  supabaseClient={supabase}
                  socialLayout="horizontal"
                  appearance={{
                    theme: ThemeSupa,
                    className: {
                      input: 'text-dark',
                      button: 'text-black hover:text-white'
                    }
                  }}
                  providers={['discord', 'google']}
                  localization={{
                    variables: {
                      sign_in: {
                        email_label: 'Votre adresse mail',
                        password_label: 'Mot de passe',
                        email_input_placeholder: '',
                        password_input_placeholder: '',
                        button_label: 'Se connecter',
                        social_provider_text: '',
                        link_text: 'Déjà inscrit ? Connectez-vous'
                      },
                      forgotten_password: {
                        button_label: 'Envoyer',
                        email_input_placeholder: '',
                        email_label: 'Adresse mail',
                        link_text: 'Mot de passe oublié'
                      },
                      sign_up: {
                        link_text: "S'inscrire",
                        email_input_placeholder: '',
                        email_label: 'Adresse mail',
                        password_input_placeholder: '',
                        password_label: 'Mot de passe',
                        button_label: "S'inscrire"
                      }
                    }
                  }}
                /> */}
                <div className="flex min-h-full flex-1 flex-col justify-center p-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      {register ? 'Inscription' : 'Connectez-vous'}
                    </h2>
                  </div>
                  {register ? (
                    <Register
                      onClick={() => setRegister(false)}
                      onRegister={() => {
                        setRegister(false);
                        onClose();
                      }}
                      forAdminPage={false}
                    />
                  ) : (
                    <Connect
                      onRegister={() => setRegister(true)}
                      onClose={onClose}
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
