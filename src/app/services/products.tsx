import React from 'react';
import { useAxios } from '../hooks/use-axios';
import { Produit } from '../models/products';

export const GetProducts: React.FC = () => {
  const [products, setProducts] = React.useState<Produit[]>([]);
  const getProducts = useAxios<[]>({
    url: 'http://localhost:8888/products/get_products.php',
    method: 'GET'
  });

  React.useEffect(() => {
    getProducts.response &&
      setProducts(getProducts.response.map(produit => new Produit(produit)));
  }, [getProducts.response]);

  if (getProducts.loading) return 'Loading...';

  if (getProducts.error) return 'An error has occurred';

  return (
    <ul>
      {products.map((product: Produit, index: number) => (
        <li key={index}>{product.dateArrivee}</li>
      ))}
    </ul>
  );
};
