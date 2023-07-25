import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Dropdown,
  ItemsProps
} from 'src/app/components/generic-components/dropdown';
import { useGlobalContext } from 'src/app/context/context';
import Swal from 'sweetalert2';

export const ProfilDropdown: React.FC = () => {
  const [dropdownItems, setDropdownItems] = React.useState<ItemsProps[]>([
    { href: '/profil', title: 'Profil' },
    { href: '/reservations', title: 'Vos réservations' },
    {
      title: 'Se déconnecter',
      onDisconnect: () => handleDisconnect()
    }
  ]);

  const { member } = useGlobalContext();

  const formattedAvatar = `${member?.nom
    ?.charAt(0)
    .toUpperCase()}${member?.prenom?.charAt(0).toUpperCase()}`;

  React.useEffect(() => {
    if (member?.isAdmin()) {
      setDropdownItems([
        ...dropdownItems,
        { href: '/administration/gestion-des-salles', title: 'Administration' }
      ]);
    }
  }, [member]);

  const handleDisconnect = () => {
    localStorage.removeItem('sb-qtihtykvrjjjkztgiddt-auth-token');

    if (!!localStorage.getItem('connectedUser') === false) {
      Swal.fire('Vous avez été déconnecté', '', 'success');
      location.reload();
    } else {
      Swal.fire('Erreur lors de la déconnexion', '', 'error');
    }
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Menu as="div" className="relative ml-3">
        {member ? (
          <div className="flex items-center justify-center">
            <Dropdown items={dropdownItems}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200 font-bold text-indigo-400">
                {formattedAvatar}
              </div>
            </Dropdown>
          </div>
        ) : (
          <NavLink to="/login" className="p-1">
            <UserIcon className="w-5 text-slate-400 hover:text-slate-500" />
          </NavLink>
        )}
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
