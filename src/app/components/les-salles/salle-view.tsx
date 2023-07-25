import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';
import { useGlobalDispatch } from 'src/app/context/context';
import { Salle } from 'src/app/models/salles';
import Swal from 'sweetalert2';
import { DatepickerComponent } from './date-picker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import Datepicker from 'react-tailwindcss-datepicker';

export interface SalleViewProps {
  modal: boolean;
  onClose: () => void;
  salle: Salle;
}

export const SalleView: React.FC<SalleViewProps> = ({
  modal,
  onClose,
  salle
}) => {
  const [cart, setCart] = React.useState<Salle>();

  const [value, setValue] = React.useState<any>({
    startDate: null,
    endDate: null
  });

  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];

  React.useEffect(() => {
    setValue((prevValue: any) => ({ ...prevValue, startDate: formattedToday }));
  }, [formattedToday]);

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  const dispatch = useGlobalDispatch();

  React.useEffect(() => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: cart
    });

    dispatch({
      type: 'BOOKING_DATE',
      payload: value
    });

    cart && Swal.fire('Réservation réussie', '', 'success');
    cart && onClose();
  }, [cart]);

  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-visible bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img
                        src={salle.photo || ''}
                        alt={salle.titre}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-6">
                        {salle.titre}
                      </h2>
                      <h3 className="text-sm">
                        {salle.adresse} {salle.cp} {salle.ville}
                      </h3>

                      <h3 className="mt-3 text-slate-500">
                        {salle.description}
                      </h3>
                      <h3 className="mt-3">Capacité: {salle.capacite}</h3>
                      <h3 className="mt-3">Catégorie: {salle.categorie}</h3>

                      <h3 className="mt-3">Reserver la salle: </h3>
                      <Datepicker
                        placeholder={formattedToday + ' / ' + formattedToday}
                        value={value}
                        onChange={handleValueChange}
                      />
                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          <button
                            onClick={e => {
                              e.preventDefault();
                              setCart(salle);
                              onClose();
                            }}
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-1.5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Reserver
                          </button>
                        </form>
                      </section>
                    </div>
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
