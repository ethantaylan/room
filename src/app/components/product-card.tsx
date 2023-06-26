const products = [
  {
    id: 1,
    name: 'Bureau Monet',
    href: '#',
    imageSrc:
      'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Salle de réunion avec plusieurs chaises',
    price: '120 €',
    ville: 'Paris'
  },
  {
    id: 2,
    name: 'Salle Sézanne',
    href: '#',
    imageSrc:
      'https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Salle de réunion avec plusieurs chaises',
    price: '100 €',
    ville: 'Paris'
  },
  {
    id: 3,
    name: 'Salle Renoir',
    href: '#',
    imageSrc:
      'https://images.pexels.com/photos/260928/pexels-photo-260928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Salle de réunion avec plusieurs chaises',
    price: '210 €',
    ville: 'Lyon'
  },
  {
    id: 4,
    name: 'Salle Van Gogh',
    href: '#',
    imageSrc:
      'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Salle de réunion avec plusieurs chaises',
    price: '100 €',
    ville: 'Marseille'
  }
];

export const ProductCard = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {products.map(product => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <div className="w-full">
                  <div className="flex w-full justify-between">
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>

                  <div className="flex w-full justify-between">
                    <p className="mt-1 text-sm text-gray-500">
                      {product.ville}
                    </p>
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
