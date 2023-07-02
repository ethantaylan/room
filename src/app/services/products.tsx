import React from 'react';
import { useAxios } from '../hooks/use-axios';
import { Produit } from '../models/products';
import { getProducts } from './products/index';

export const Products: React.FC = () => {
  const [products, setProducts] = React.useState<Produit[]>([]);

  const getProductsFetch = useAxios<[]>(getProducts())


  React.useEffect(() => {
    getProductsFetch.response &&
      setProducts(getProductsFetch.response.map(produit => new Produit(produit)));
  }, [getProductsFetch.response]);

  if (getProductsFetch.loading) return 'Loading...';

  if (getProductsFetch.error) return 'An error has occurred';

  return (
    <ul>
      {products.map((product: Produit, index: number) => (
        <li key={index}>{product.dateArrivee}</li>
      ))}
    </ul>
  );
};
