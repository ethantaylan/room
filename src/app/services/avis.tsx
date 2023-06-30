import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export class Avis {
  id_avis: number;
  id_membre: number | null;
  id_salle: number | null;
  commentaire: string;
  note: number | null;
  date_enregistrement: string | null;

  constructor(
    id_avis: number,
    id_membre: number | null,
    id_salle: number | null,
    commentaire: string,
    note: number | null,
    date_enregistrement: string | null
  ) {
    this.id_avis = id_avis;
    this.id_membre = id_membre;
    this.id_salle = id_salle;
    this.commentaire = commentaire;
    this.note = note;
    this.date_enregistrement = date_enregistrement;
  }
}

export const GetAvis: React.FC = () => {
  const { isLoading, error, data } = useQuery('avis', () =>
    fetch('http://localhost/avis.php').then(res => res.json())
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  console.log(data);

  return (
    <ul>
      {data.map((avis: Avis, index: number) => (
        <li key={index}>
          <p>Commentaire: {avis.commentaire}</p>
          <p>Note: {avis.note}</p>
          <p>Date d'enregistrement: {avis.date_enregistrement}</p>
        </li>
      ))}
    </ul>
  );
};
