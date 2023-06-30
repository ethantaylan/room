import { useQuery } from 'react-query';

export class Members {
  idMembre: number;
  pseudo: string;
  civilite: string;
  dateEnregistrement: string;
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
    this.idMembre = id_membre;
    this.pseudo = pseudo;
    this.civilite = civilite;
    this.dateEnregistrement = date_enregistrement;
    this.email = email;
    this.mdp = mdp;
    this.nom = nom;
    this.prenom = prenom;
    this.statut = statut;
  }
}

export const GetMembers: React.FC = () => {
  const { isLoading, error, data } = useQuery('membres', () =>
    fetch('http://localhost:8888/membres.php').then(res => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  console.log(data);

  return (
    <ul>
      {data.map((member: Members, index: number) => (
        <li key={index}>{member.pseudo}</li>
      ))}
    </ul>
  );
};
