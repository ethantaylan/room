import { useQuery } from 'react-query';
import { Salles } from '../models/salles';

export const GetSalles: React.FC = () => {
  const { isLoading, error, data } = useQuery('salles', () =>
    fetch('http://localhost:8888/salles.php').then(res => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {data.map((salles: Salles, index: number) => (
            <div key={index} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  src={salles.photo || ''}
                  alt={salles.titre || ''}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <div className="w-full">
                  <div className="flex w-full justify-between">
                    <h3 className="text-sm text-gray-700">
                      <a href={''}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {salles.titre}
                      </a>
                    </h3>
                    <p className="whitespace-nowrap text-sm font-medium text-gray-900">
                      {salles.titre}
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="mt-1 text-sm text-gray-500">{salles.ville}</p>
                    <p className="pe-3 text-sm text-blue-600">Voir</p>
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
