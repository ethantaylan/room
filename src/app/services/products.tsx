import { useQuery } from 'react-query';

export class Product {
  idProduit: number;
  idSalle: number;
  dateArrivee: string;
  dateDepart: string;
  prix: number;
  etat: string;

  constructor(
    id_produit: number,
    id_salle: number,
    date_arrivee: string,
    date_depart: string,
    prix: number,
    etat: string
  ) {
    this.idProduit = id_produit;
    this.idSalle = id_salle;
    this.dateArrivee = date_arrivee;
    this.dateDepart = date_depart;
    this.prix = prix;
    this.etat = etat;
  }
}

export const GetProducts: React.FC = () => {
  const { isLoading, error, data } = useQuery('products', () =>
    fetch('http://localhost/products.php').then(res => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  console.log(data);

  return (
    <ul>
      {data.map((product: any, index: number) => (
        <li key={index}>{product.date_arrivee}</li>
      ))}
    </ul>
  );
};
