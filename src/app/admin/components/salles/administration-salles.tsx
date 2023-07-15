import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useAxios } from 'src/app/hooks/use-axios';
import { Salle, SalleResponse } from 'src/app/models/salles';
import { deleteSalleById, getSalles } from 'src/app/services/salles';
import { AjouterUneNouvelleSalleModal } from './ajouter-une-nouvelle-salle-modal';
import { UpdateSalleModal } from './update-salle-modal';

export interface Row {
  header: string;
}

export const AdmininistrationSalles: React.FC = () => {
  const headers: string[] = [
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

  const [salles, setSalles] = React.useState<Salle[]>([]);
  const [modal, setModal] = React.useState<boolean>(false);
  const [updateSalleModal, setUpdateSalleModal] =
    React.useState<boolean>(false);
  const [idSalle, setIdSalle] = React.useState<number | null>(null);
  const [selectedSalle, setSelectedSalle] = React.useState<Salle | null>(null);

  const getSallesFetch = useAxios<SalleResponse[]>(getSalles());

  const deleteSalleFetch = useAxios<SalleResponse>(
    deleteSalleById(+(idSalle || 0)),
    false
  );

  // const updateSalleFetch = useAxios<SalleResponse>(
  //   updateSalle(selectedSalle || null),
  //   false
  // );

  // const getSalleByIdFetch = useAxios<SalleResponse>(
  //   getSalleById(selectedSalle),
  //   false
  // );

  // React.useEffect(() => {
  //   getSalleByIdFetch.executeFetch();
  // }, []);

  React.useEffect(() => {
    if (getSallesFetch.response) {
      setSalles(
        getSallesFetch.response?.map((s: SalleResponse) => new Salle(s))
      );
    }
  }, [getSallesFetch.response]);

  React.useEffect(() => {
    idSalle && deleteSalleFetch.executeFetch();
  }, [idSalle]);

  React.useEffect(() => {
    deleteSalleFetch.response && getSallesFetch.executeFetch();
  }, [deleteSalleFetch.response]);

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleConfirm = () => {
    getSallesFetch.executeFetch();
    setModal(false);
  };

  const deleteSalleHandler = (id: number) => {
    setIdSalle(id);
  };

  const updateSalleHandler = (salle: Salle) => {
    setSelectedSalle(salle);
    setUpdateSalleModal(true);
  };

  return (
    <div className="flex flex-col">
      <AjouterUneNouvelleSalleModal
        onConfirm={handleConfirm}
        onClose={() => setModal(false)}
        modal={modal}
      />
      <UpdateSalleModal
        onClose={() => setUpdateSalleModal(false)}
        modal={updateSalleModal}
        salle={selectedSalle}
        onConfirm={() => {
          setUpdateSalleModal(false);
          getSallesFetch.executeFetch();
        }}
      />
      <div className="flex w-full justify-end">
        <button
          onClick={() => setModal(true)}
          className="mb-3 rounded border px-4 py-2 text-black transition hover:border-black"
        >
          + Ajouter une nouvelle salle
        </button>
      </div>
      <table>
        <thead>
          <tr className="border bg-slate-200 text-slate-400">
            {headers.map(header => (
              <th
                key={header}
                className="border-gray-700 p-3 text-sm font-semibold first:rounded-tl-md last:rounded-tr-md"
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
              <td className="border p-3">
                <button
                  onClick={() => deleteSalleHandler(salle.idSalle)}
                  className="me-3 text-red-500"
                >
                  <TrashIcon className="h-5" />
                </button>
                <button
                  onClick={() => {
                    updateSalleHandler(salle);
                  }}
                  className="text-gray-500"
                >
                  <PencilSquareIcon className="h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
