import React from 'react';
import { NavLink } from 'react-router-dom';
import { supabase } from '../config';
import { Salle } from '../models/salles';

export const Salles: React.FC = () => {
  const [salles, setSalles] = React.useState<Salle[]>([]);

  const getSallesSupabase = async () => {
    const { data: salles, error } = await supabase.from('salles').select('*');
    if (salles) {
      setSalles(salles);
    }
  };
  React.useEffect(() => {
    getSallesSupabase();
  }, []);

  // const getSallesFetch = useAxios<SalleResponse[]>(getSalles());

  // React.useEffect(() => {
  //   getSallesFetch.response &&
  //     setSalles(
  //       getSallesFetch.response.map((s: SalleResponse) => new Salle(s))
  //     );
  // }, [getSallesFetch.response]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {salles.map((salle: Salle, index: number) => (
            <div key={index} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  src={salle.photo || ''}
                  alt={salle.titre || ''}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <div className="w-full">
                  <div className="flex w-full justify-between">
                    <h3 className="text-sm text-gray-700">
                      {/* MODAL TO SHOW THE PRODUCT HERE */}

                      <NavLink to={'/les-salles'}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {salle.titre}
                      </NavLink>
                    </h3>
                    <p className="whitespace-nowrap text-sm font-medium text-gray-900">
                      {salle.titre}
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="mt-1 text-sm text-gray-500">{salle.ville}</p>
                    <p className="pe-3 text-sm text-indigo-600">Voir</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
