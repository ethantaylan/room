import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useGlobalContext, useGlobalDispatch } from 'src/app/context/context';
import { Salle } from 'src/app/models/salles';
import Swal from 'sweetalert2';

export interface SalleCardProps {
  salle: Salle | null;
}

export const SalleCard: React.FC<SalleCardProps> = ({ salle }) => {
  const dispatch = useGlobalDispatch();

  const handleRemoveBooking = () => {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir annuler la réservation ?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Retour'
    }).then(result => {
      if (result.isConfirmed) {
        dispatch({
          type: 'REMOVE_CART'
        });
        Swal.fire('Reservation annuler', '', 'success');
      }
    });
  };

  //   dispatch({
  //     type: 'REMOVE_CART'
  //   });

  const { cart, dateValues, member } = useGlobalContext();

  return (
    <div>
      {cart ? (
        <div className="my-20 flex h-screen w-6/12">
          <div className="ms-5">
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="h-full rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img
                  src={salle?.photo || ''}
                  alt={salle?.titre}
                  className="h-full object-cover object-center"
                />
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-6">
                  {salle?.titre}
                </h2>
                <h3 className="text-sm">
                  {salle?.adresse} {salle?.cp} {salle?.ville}
                </h3>

                <h3 className="mt-3 text-slate-500">{salle?.description}</h3>
                <h3 className="mt-3">
                  Capacité: <strong>{salle?.capacite}</strong>
                </h3>
                <h3 className="mt-3">
                  Catégorie: <strong>{salle?.categorie}</strong>
                </h3>
                <h3>
                  Date de réservation :{' '}
                  <strong>
                    {dateValues?.startDate} {dateValues?.endDate}
                  </strong>
                </h3>

                <h3 className="mb-5 mt-5">
                  par:{' '}
                  <strong className="text-slate-600">
                    {member?.nom} {member?.prenom}
                  </strong>
                </h3>
                <button
                  onClick={e => {
                    e.preventDefault();
                    handleRemoveBooking();
                  }}
                  className="rounded bg-red-500 px-4 py-1.5 text-white"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-full justify-center">
          <div className="flex-col items-center justify-center">
            <ExclamationCircleIcon height={200} />
            <h1 className="text-center">Pas de réservations </h1>
          </div>
        </div>
      )}
    </div>
  );
};
