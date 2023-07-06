import React, { useState, ChangeEvent } from 'react';
import { Input } from 'src/app/components/generic-components/input';
import { Modal } from 'src/app/components/generic-components/modal';
import { useAxios } from 'src/app/hooks/use-axios';
import { Salle, SalleResponse } from 'src/app/models/salles';
import { getSalles, postSalles } from 'src/app/services/salles';

interface FormState {
  title: string;
  description: string;
  photo: string;
  pays: string;
  ville: string;
  adresse: string;
  cp: number;
  capacite: number;
  categorie: string;
}

interface InputField {
  label: string;
  name: keyof FormState;
}

export interface AjouterUneNouvelleSalleModalProps {
  onConfirm: () => void;
  onClose: () => void;
  modal: boolean;
}

export const AjouterUneNouvelleSalleModal: React.FC<
  AjouterUneNouvelleSalleModalProps
> = ({ onConfirm, onClose, modal }) => {
  const initialState: FormState = {
    title: '',
    description: '',
    photo: '',
    pays: '',
    ville: '',
    adresse: '',
    cp: 0,
    capacite: 0,
    categorie: ''
  };

  const [formState, setFormState] = React.useState<FormState>(initialState);

  const postSallesFetch = useAxios<SalleResponse>(
    postSalles(
      formState.title,
      formState.description,
      formState.photo,
      formState.pays,
      formState.ville,
      formState.adresse,
      formState.cp,
      formState.capacite,
      formState.categorie
    ),
    false
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const inputFields: InputField[] = [
    { label: 'Nom de la salle', name: 'title' },
    { label: 'Description', name: 'description' },
    { label: 'Image', name: 'photo' },
    { label: 'Pays', name: 'pays' },
    { label: 'Ville', name: 'ville' },
    { label: 'Adresse', name: 'adresse' },
    { label: 'CP', name: 'cp' },
    { label: 'Capacité', name: 'capacite' },
    { label: 'Catégorie', name: 'categorie' }
  ];

  const handleConfirm = async () => {
    await postSallesFetch.executeFetch();
    if (postSallesFetch.response) {
      // Mettre à jour les salles
      onConfirm();
    }
  };
  
  return (
    <Modal
      title="Nouvelle salle"
      description={''}
      isModal={modal}
      onClose={onClose}
      onConfirm={handleConfirm}
    >
      {inputFields.map(field => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          onChange={handleChange}
        />
      ))}
    </Modal>
  );
};
