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

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className=" flex flex-col">
      <div className="flex w-full justify-end">
        <button className="border mb-3 text-black hover:border-black transition px-4 rounded py-2">+ Ajouter une nouvelle salle</button>
      </div>
      <table>
        <thead>
          <tr className="border text-slate-400  bg-slate-200">
            {headers.map(header => (
              <th
                key={header}
                className="first:rounded-tl-md last:rounded-tr-md border-gray-700 p-3 text-sm font-semibold"
              >
                {capitalize(header.toLowerCase())}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="rounded border">
          {salles.map((salle: Salle) => (
            <tr key={salle.idSalle}>
              <td className="border p-3">{salle.idSalle}</td>
              <td className="border p-3">{salle.titre}</td>
              <td className="border p-3">{salle.description}</td>
              <td className="border p-3">
                <img
                  className="rounded"
                  width={150}
                  src={salle.photo || ''}
                  alt=""
                />
              </td>
              <td className="border p-3">{salle.pays}</td>
              <td className="border p-3">{salle.ville}</td>
              <td className="border p-3">{salle.adresse}</td>
              <td className="border p-3">{salle.cp}</td>
              <td className="border p-3">{salle.capacite}</td>
              <td className="border p-3">{salle.categorie}</td>
              <td className="border p-3">ACTIONS</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
