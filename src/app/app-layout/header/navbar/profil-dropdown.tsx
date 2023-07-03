import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthModal } from 'src/app/components/auth/auth-modal';
import { useGlobalContext } from 'src/app/context/context';
import { Bars3Icon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid';

export const ProfilDropdown: React.FC = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const { member } = useGlobalContext();

  const [authModal, setAuthModal] = React.useState<boolean>(false);

  const formattedAvatar = `${member?.prenom
    .charAt(0)
    .toUpperCase()}${member?.nom.charAt(0).toUpperCase()}`;

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Menu as="div" className="relative ml-3">
        {member?.idMembre ? (
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-indigo-200 p-1 font-bold text-indigo-400">
              {formattedAvatar}
            </div>
          </div>
        ) : (
          <button
            className="p-1"
            onClick={() => setAuthModal(true)}
          >
            <UserIcon className="w-5 text-slate-400 hover:text-slate-500" />
          </button>
        )}
        <AuthModal
          isModal={authModal}
          onClose={() => setAuthModal(false)}
          onSignIn={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Your Profile
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Settings
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Sign out
                </NavLink>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
