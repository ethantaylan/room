import React from 'react';
import { useAxios } from 'src/app/hooks/use-axios';
import { Salle, SalleResponse } from 'src/app/models/salles';
import { getSalles } from 'src/app/services/salles';

export interface Row {
  header: string;
}

export const AdmininistrationSalles: React.FC = () => {
  const [salles, setSalles] = React.useState<Salle[]>([]);
  const getSallesFetch = useAxios<SalleResponse[]>(getSalles());

  const headers = [
    'ID',
    'SALLE',
    'DESCRIPTION',
    'IMAGE',
    'PAYS',
    'VILLE',
    'ADRESSE',
    'CP',
    'CAPACITE',
    'CATEGORIE',
    'ACTIONS'
  ];

  React.useEffect(() => {
    getSallesFetch.response &&
      setSalles(
        getSallesFetch.response?.map((s: SalleResponse) => new Salle(s))
      );
  }, [getSallesFetch.response]);

  console.log(salles);

  return (
    <div className="mt-10 flex">
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th className="pr-3 font-semibold last:pr-0">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {salles.map(salle => (
            <tr key={salle.idSalle}>
              <td className="py-3">{salle.idSalle}</td>
              <td>{salle.titre}</td>
              <td>{salle.description}</td>
              <td>
                <img
                  width={20}
                  className="rounded"
                  src={salle.photo || ''}
                  alt=""
                />
              </td>
              <td>{salle.pays}</td>
              <td>{salle.ville}</td>
              <td>{salle.adresse}</td>
              <td>{salle.cp}</td>
              <td>{salle.capacite}</td>
              <td>{salle.categorie}</td>
              <td>ACTIONS</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
