import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { GestionDesAvis } from 'src/app/admin/pages/gestion-des-avis';
import { GestionDesCommandes } from 'src/app/admin/pages/gestion-des-commandes';
import { GestionDesProduits } from 'src/app/admin/pages/gestion-des-produits';
import { GestionDesSalles } from 'src/app/admin/pages/gestion-des-salles';
import { GestionDesStatistiques } from 'src/app/admin/pages/gestion-des-statistiques';
import { GestionDesMembres } from 'src/app/admin/pages/membres/gestion-des-membres';

export interface AdministrationRoutes {
  title: string;
  href: string;
  element?: React.ReactElement;
}

export const administrationRoutes: AdministrationRoutes[] = [
  {
    title: 'Salles',
    href: '/administration/gestion-des-salles',
    element: <GestionDesSalles />
  },
  {
    title: 'Produits',
    href: '/administration/gestion-des-produits',
    element: <GestionDesProduits />
  },
  {
    title: 'Membres',
    href: '/administration/gestion-des-membres',
    element: <GestionDesMembres />
  },
  {
    title: 'Avis',
    href: '/administration/gestion-des-avis',
    element: <GestionDesAvis />
  },
  {
    title: 'Commandes',
    href: '/administration/gestion-des-commandes',
    element: <GestionDesCommandes />
  },
  {
    title: 'Statistiques',
    href: '/administration/gestion-des-statistiques',
    element: <GestionDesStatistiques />
  }
];

export const AdministrationNavbar: React.FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <>
      <h1 className="my-5 text-center text-lg font-bold">Administration</h1>
      <div className="mt-5 h-auto w-full rounded-md border p-5 text-black">
        {children}

        <div className="flex flex-col">
          <ul className="flex justify-around">
            {administrationRoutes.map(
              (route: AdministrationRoutes, index: number) => (
                <li
                  key={index}
                  className="mx-2 text-slate-500 transition hover:text-slate-700"
                >
                  <NavLink to={route.href}>{route.title}</NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
