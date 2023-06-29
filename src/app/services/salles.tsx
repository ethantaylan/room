import { useQuery } from 'react-query';

export class Salles {
  idSalle: number;
  titre: string;
  description: string;
  photo: string | null;
  pays: string;
  ville: string;
  adresse: string;
  cp: number;
  capacite: number;
  categorie: 'réunion' | 'bureau' | 'formation';

  constructor(
    idSalle: number,
    titre: string,
    description: string,
    photo: string | null,
    pays: string,
    ville: string,
    adresse: string,
    cp: number,
    capacite: number,
    categorie: 'réunion' | 'bureau' | 'formation'
  ) {
    this.idSalle = idSalle;
    this.titre = titre;
    this.description = description;
    this.photo = photo;
    this.pays = pays;
    this.ville = ville;
    this.adresse = adresse;
    this.cp = cp;
    this.capacite = capacite;
    this.categorie = categorie;
  }
}

export const GetSalles: React.FC = () => {
  const { isLoading, error, data } = useQuery('salles', () =>
    fetch('http://localhost/salles.php').then(res => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  console.log(data);

  return (
    <ul>
      {data.map((salle: Salles, index: number) => (
        <li key={index}>{salle.titre}</li>
      ))}
    </ul>
  );
};
