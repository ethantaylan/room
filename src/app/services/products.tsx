import { useQuery } from 'react-query';

export const GetProducts: React.FC = () => {
  const { isLoading, error, data } = useQuery('products', () =>
    fetch('http://localhost:8888/products/products.php').then(res => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  return (
    <ul>
      {data.map((product: any, index: number) => (
        <li key={index}>{product.date_arrivee}</li>
      ))}
    </ul>
  );
};
