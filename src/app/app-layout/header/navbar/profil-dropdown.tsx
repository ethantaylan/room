import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { AuthModal } from 'src/app/components/auth/auth-modal';
import { useGlobalContext } from 'src/app/context/context';
import { UserIcon } from '@heroicons/react/24/solid';
import {
  Dropdown,
  ItemsProps
} from 'src/app/components/generic-components/dropdown';
import swal from 'sweetalert';

export const ProfilDropdown: React.FC = () => {
  const [dropdownItems, setDropdownItems] = React.useState<ItemsProps[]>([
    { href: '/profil', title: 'Profil' },
    { href: '/vos-reservations', title: 'Vos réservations' },
    { title: 'Se déconnecter' }
  ]);
  const [authModal, setAuthModal] = React.useState<boolean>(false);

  const { member } = useGlobalContext();

  const formattedAvatar = `${member?.prenom
    .charAt(0)
    .toUpperCase()}${member?.nom.charAt(0).toUpperCase()}`;

  React.useEffect(() => {
    if (member?.isAdmin()) {
      setDropdownItems([
        ...dropdownItems,
        { href: '/administration/gestion-des-salles', title: 'Administration' }
      ]);
    }
  }, [member]);

  const handleDisconnect = () => {
    localStorage.removeItem('connectedUser');

    if (!!localStorage.getItem('connectedUser') === false) {
      swal('Vous avez été déconnecté', '', 'success');
      location.reload();
    } else {
      swal('Erreur lors de la déconnexion', '', 'error');
    }
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Menu as="div" className="relative ml-3">
        {member?.idMembre ? (
          <div className="flex items-center justify-center">
            <Dropdown onDisconnect={handleDisconnect} items={dropdownItems}>
              <div className="rounded-full bg-indigo-200 p-1 font-bold text-indigo-400">
                {formattedAvatar}
              </div>
            </Dropdown>
          </div>
        ) : (
          <button className="p-1" onClick={() => setAuthModal(true)}>
            <UserIcon className="w-5 text-slate-400 hover:text-slate-500" />
          </button>
        )}
        <AuthModal isModal={authModal} onClose={() => setAuthModal(false)} />
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        ></Transition>
      </Menu>
    </div>
  );
};
