import React, { ChangeEvent } from 'react';
import { Input } from 'src/app/components/generic-components/input';
import { Modal } from 'src/app/components/generic-components/modal';
import { useAxios } from 'src/app/hooks/use-axios';
import { Salle } from 'src/app/models/salles';
import { updateSalle } from 'src/app/services/salles';

interface FormState {
  titre: string;
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
  salle: Salle | null;
}

export const UpdateSalleModal: React.FC<AjouterUneNouvelleSalleModalProps> = ({
  onConfirm,
  onClose,
  modal,
  salle
}) => {
  const initialState: FormState = {
    titre: '',
    description: '',
    photo: '',
    pays: '',
    ville: '',
    adresse: '',
    cp: 0,
    capacite: 0,
    categorie: ''
  };

  const inputFields: InputField[] = [
    { label: 'Nom de la salle', name: 'titre' },
    { label: 'Description', name: 'description' },
    { label: 'Image', name: 'photo' },
    { label: 'Pays', name: 'pays' },
    { label: 'Ville', name: 'ville' },
    { label: 'Adresse', name: 'adresse' },
    { label: 'CP', name: 'cp' },
    { label: 'Capacité', name: 'capacite' },
    { label: 'Catégorie', name: 'categorie' }
  ];

  const [formState, setFormState] = React.useState<FormState>(initialState);
  const updateSalleFetch = useAxios(
    updateSalle({ id_salle: salle?.idSalle, ...formState }),
    false
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  React.useEffect(() => {
    salle &&
      setFormState({
        titre: salle?.titre || '',
        description: salle?.description || '',
        photo: salle?.photo || '',
        pays: salle?.pays || '',
        ville: salle?.ville || '',
        adresse: salle?.adresse || '',
        cp: salle?.cp || 0,
        capacite: salle?.capacite || 0,
        categorie: salle?.categorie || ''
      });
  }, [modal]);

  React.useEffect(() => {
    updateSalleFetch.response && onConfirm();
  }, [updateSalleFetch.response]);

  const updateSalleHandler = () => {
    updateSalleFetch.executeFetch();
  };

  return (
    <Modal
      title="Update salle"
      description={''}
      isModal={modal}
      onClose={onClose}
      onConfirm={updateSalleHandler}
    >
      {inputFields.map(field => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          onChange={handleChange}
          value={formState[field.name]}
        />
      ))}
    </Modal>
  );
};
