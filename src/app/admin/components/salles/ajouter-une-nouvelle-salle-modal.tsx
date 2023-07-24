import React, { ChangeEvent } from 'react';
import { Input } from 'src/app/components/generic-components/input';
import { Modal } from 'src/app/components/generic-components/modal';
import { useAxios } from 'src/app/hooks/use-axios';
import { SalleResponse } from 'src/app/models/salles';
import { getSalles, postSalle } from 'src/app/services/salles';

interface FormState {
  title: string;
  description: string;
  photo: string;
  pays: string;
  ville: string;
  adresse: string;
  cp: number;
  categorie: string;
  capacite: number;
}

interface InputField {
  label: string;
  name: keyof FormState;
  isSelect?: boolean;
  isSlider?: boolean;
}

export interface AjouterUneNouvelleSalleModalProps {
  onClose: () => void;
  modal: boolean;
}

export const AjouterUneNouvelleSalleModal: React.FC<
  AjouterUneNouvelleSalleModalProps
> = ({ onClose, modal }) => {
  const initialState: FormState = {
    title: '',
    description: '',
    photo: '',
    pays: '',
    ville: '',
    adresse: '',
    cp: 0,
    categorie: 'Réunion',
    capacite: 0
  };

  const [formState, setFormState] = React.useState<FormState>(initialState);
  const [capacite, setCapacite] = React.useState<number>(0);

  const postSalleFetch = useAxios<SalleResponse>(
    postSalle(
      formState.title,
      formState.description,
      formState.photo,
      formState.pays,
      formState.ville,
      formState.adresse,
      formState.cp,
      capacite,
      formState.categorie
    ),
    false
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueAsNumber = parseInt(e.target.value, 10);
    setCapacite(valueAsNumber);
  };

  const inputFields: InputField[] = [
    { label: 'Nom de la salle', name: 'title' },
    { label: 'Description', name: 'description' },
    { label: 'Image', name: 'photo' },
    { label: 'Pays', name: 'pays' },
    { label: 'Ville', name: 'ville' },
    { label: 'Adresse', name: 'adresse' },
    { label: 'CP', name: 'cp' },
    { label: 'Capacité', name: 'capacite', isSlider: true },
    { label: 'Catégorie', name: 'categorie', isSelect: true }
  ];

  const handleConfirm = () => {
    postSalleFetch.executeFetch();
  };

  React.useEffect(() => {
    console.log('test');
  }, [postSalleFetch.response]);

  const { response, executeFetch } = useAxios(getSalles(), false);

  return (
    <Modal
      title="Nouvelle salle"
      description={''}
      isModal={modal}
      onClose={onClose}
      onConfirm={handleConfirm}
    >
      {inputFields.map(field =>
        field.isSlider ? (
          <div className="mt-3 flex w-full" key={field.name}>
            <label className="me-5 w-60 text-right">Capacité</label>
            <div className="flex w-full flex-col pt-2">
              <input
                name={field.name}
                min={0}
                max={200}
                onChange={handleSliderChange}
                id="default-range"
                type="range"
                value={capacite}
                className="dark:bg-slant-200 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              />
              <p className="text-center">{capacite}</p>
            </div>
          </div>
        ) : field.isSelect ? (
          <div
            className="mt-5 flex w-full items-center justify-center"
            key={field.name}
          >
            <label className="me-5 w-60 text-right">Catégorie</label>
            <select
              name={field.name}
              onChange={handleChange}
              className="w-full rounded bg-indigo-100 px-2 py-1.5"
              value={formState.categorie}
            >
              <option value="réunion">Réunion</option>
              <option value="bureau">Bureau</option>
              <option value="formation">Formation</option>
            </select>
          </div>
        ) : (
          <Input
            key={field.name}
            label={field.label}
            name={field.name}
            onChange={handleChange}
          />
        )
      )}
    </Modal>
  );
};
