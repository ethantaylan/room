import React, { useState, ChangeEvent } from 'react';
import { Input } from 'src/app/components/generic-components/input';
import { Modal } from 'src/app/components/generic-components/modal';
import { useAxios } from 'src/app/hooks/use-axios';
import { SalleResponse } from 'src/app/models/salles';
import { getSalleById, postSalle } from 'src/app/services/salles';

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
  id: number | null;
}

export const UpdateSalleModal: React.FC<AjouterUneNouvelleSalleModalProps> = ({
  onConfirm,
  onClose,
  modal,
  id
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const getSalleByIdFetch = useAxios(getSalleById(id), false);

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

  // const updateSalleFetch = useAxios<SalleResponse>(
  //   postSalle(
  //     formState.title,
  //     formState.description,
  //     formState.photo,
  //     formState.pays,
  //     formState.ville,
  //     formState.adresse,
  //     formState.cp,
  //     formState.capacite,
  //     formState.categorie
  //   ),
  //   false
  // );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  React.useEffect(() => {
    if (modal === true) {
      getSalleByIdFetch.executeFetch();
      console.log(getSalleByIdFetch.response, id);
    }
  }, [modal]);

  // React.useEffect(() => {
  //   if (id !== null) {
  //     getSalleByIdFetch.executeFetch();
  //     console.log(getSalleByIdFetch.response, id);
  //   }
  // }, [id]);

  React.useEffect(() => {
    setIsLoading(getSalleByIdFetch.loading);
  }, [getSalleByIdFetch.loading]);

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

  return (
    <Modal
      title="Update salle"
      description={''}
      isModal={modal}
      onClose={onClose}
      onConfirm={onConfirm}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        inputFields.map(field => (
          <Input
            key={field.name}
            label={field.label}
            name={field.name}
            onChange={handleChange}
          />
        ))
      )}
    </Modal>
  );
};
