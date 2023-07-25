import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  ArrowUpLeftIcon
} from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppLayout } from 'src/app/app-layout/app-layout';
import { Register } from 'src/app/pages/register';
import { AdministrationNavbar } from '../../components/administration-navbar';

export const AJouterUnNouveauMembre = () => {
  return (
    <AppLayout withFooter={false}>
      <AdministrationNavbar />
      <div className='my-20 pb-20'>
        <h1 className="text-center text-2xl font-bold">
          Ajouter un nouveau membre
        </h1>
        <Register forAdminPage={true} />
      </div>
    </AppLayout>
  );
};
