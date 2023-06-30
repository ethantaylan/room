import { useQuery } from 'react-query';

export class Members {
  id_membre: number;
  pseudo: string;
  civilite: string;
  date_enregistrement: string;
  email: string;
  mdp: string;
  nom: string;
  prenom: string;
  statut: string;

  constructor(
    id_membre: number,
    pseudo: string,
    civilite: string,
    date_enregistrement: string,
    email: string,
    mdp: string,
    nom: string,
    prenom: string,
    statut: string
  ) {
    this.id_membre = id_membre;
    this.pseudo = pseudo;
    this.civilite = civilite;
    this.date_enregistrement = date_enregistrement;
    this.email = email;
    this.mdp = mdp;
    this.nom = nom;
    this.prenom = prenom;
    this.statut = statut;
  }
}

export const GetMembers: React.FC = () => {
  const { isLoading, error, data } = useQuery('membres', () =>
    fetch('http://localhost:8888/membres/membres.php').then(res => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  return (
    <ul>
      {data.map((member: Members, index: number) => (
        <li key={index}>{member.pseudo}</li>
      ))}
    </ul>
  );
};
