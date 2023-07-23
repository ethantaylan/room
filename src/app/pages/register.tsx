import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAxios } from 'src/app/hooks/use-axios';
import { signUpWithDB } from 'src/app/services/auth';
import { postMembre } from 'src/app/services/members';
import swal from 'sweetalert';
import { AppLayout } from '../app-layout/app-layout';
import {
  RegisterField,
  RegisterFieldProps
} from '../components/auth/register-field';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  pseudo: string;
  mdp: string;
  statut?: 'membre' | 'admin';
  dateEnregistrement?: string;
}

export interface RegisterProps {
  onClick?: () => void;
  forAdminPage: boolean;
}

export const Register: React.FC<RegisterProps> = ({
  onClick,
  forAdminPage
}) => {
  const date = new Date();

  const annee = date.getFullYear();
  const mois = String(date.getMonth() + 1).padStart(2, '0');
  const jour = String(date.getDate()).padStart(2, '0');
  const heures = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const secondes = String(date.getSeconds()).padStart(2, '0');

  const dateEnregistrement = `${annee}-${mois}-${jour} ${heures}:${minutes}:${secondes}`;

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    pseudo: '',
    mdp: '',
    statut: 'membre',
    dateEnregistrement: dateEnregistrement
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputRefs = {
    firstNameRef: useRef<HTMLInputElement>(null),
    lastNameRef: useRef<HTMLInputElement>(null),
    emailRef: useRef<HTMLInputElement>(null),
    pseudoRef: useRef<HTMLInputElement>(null),
    mdpRef: useRef<HTMLInputElement>(null),
    confirmPasswordRef: useRef<HTMLInputElement>(null),
    statusRef: useRef<HTMLInputElement>(null)
  };

  const signUpWithDBFetch = useAxios(
    signUpWithDB(userData.email, userData.mdp, userData),
    false
  );

  const handleInputChange =
    (key: keyof UserData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserData(prevData => ({ ...prevData, [key]: e.target.value }));
    };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const RegisterFields: RegisterFieldProps[] = [
    {
      ref: inputRefs.firstNameRef,
      placeholder: 'John',
      onChange: handleInputChange('firstName'),
      inputType: 'text',
      label: 'Prénom'
    },
    {
      ref: inputRefs.lastNameRef,
      placeholder: 'Doe',
      onChange: handleInputChange('lastName'),
      inputType: 'text',
      label: 'Nom'
    },
    {
      ref: inputRefs.emailRef,
      placeholder: 'john.doe@room.com',
      onChange: handleInputChange('email'),
      inputType: 'email',
      label: 'Email'
    },
    {
      ref: inputRefs.pseudoRef,
      placeholder: 'JohnDoe777',
      onChange: handleInputChange('pseudo'),
      inputType: 'text',
      label: 'Pseudo'
    },
    {
      ref: inputRefs.mdpRef,
      placeholder: '',
      onChange: handleInputChange('mdp'),
      inputType: 'password',
      label: 'Mot de passe'
    },
    {
      ref: inputRefs.confirmPasswordRef,
      placeholder: '',
      onChange: handleConfirmPasswordChange,
      inputType: 'password',
      label: 'Confirmez le mot de passe'
    }
  ];

  const handleStatusChange = () => {
    setUserData(prevData => {
      const newStatut = prevData.statut === 'membre' ? 'admin' : 'membre';
      return { ...prevData, statut: newStatut };
    });
  };

  const { executeFetch, status } = useAxios<UserData>(
    postMembre(userData),
    false
  );

  const handleRegister = () => {
    // Validate email format
    // if (!emailRegex.test(userData.email)) {
    //   swal('Veuillez saisir une adresse email valide !', '', 'error');
    //   return;
    // }

    // if (userData.mdp !== confirmPassword) {
    //   swal('Les mots de passe ne correspondent pas !', '', 'error');
    //   return;
    // }

    // if (
    //   !nameRegex.test(userData.firstName) ||
    //   !nameRegex.test(userData.lastName)
    // ) {
    //   swal('Veuillez saisir un prénom et un nom valides !', '', 'error');
    //   return;
    // }

    // if (!pseudoRegex.test(userData.pseudo)) {
    //   swal(
    //     'Le pseudo ne peut contenir que des lettres et des chiffres !',
    //     '',
    //     'error'
    //   );
    //   return;
    // }

    // if (!passwordRegex.test(userData.mdp)) {
    //   swal(
    //     'Le mot de passe doit contenir au moins 8 caractères, un symbole et un chiffre !',
    //     '',
    //     'error'
    //   );
    //   return;
    // }

    // Effectuer l'inscription si les mots de passe correspondent
    executeFetch();
    signUpWithDBFetch.executeFetch();
  };

  // After executeFetch is called, handle the response and status
  React.useEffect(() => {
    if (status === 404) {
      swal("Une erreur est survenue lors de l'inscription.", '', 'error');
    } else if (status === 200) {
      swal('', '', 'success');
    }
  }, [status]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]+(?: [A-Za-zÀ-ÖØ-öø-ÿ-]+)*$/;
  const pseudoRegex = /^[A-Za-z0-9]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  return (
    <AppLayout withFooter={false}>
      <div className="mt-20 flex w-full flex-col items-center justify-center">
        <dl className="w-6/12">
          {/* <h1 className="text-2xl font-bold">INSCRIPTION</h1> */}

          {RegisterFields.map((field, index) => (
            <RegisterField
              key={index}
              ref={field.ref}
              onChange={field.onChange}
              placeholder={field.placeholder}
              inputType={field.inputType}
              label={field.label}
            />
          ))}
          <form className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {forAdminPage && (
              <React.Fragment>
                <dt className="flex items-center text-sm font-medium leading-6 text-gray-900">
                  Statut
                </dt>
                <dd className="mt-1 flex items-center rounded p-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input
                    ref={inputRefs.statusRef}
                    onChange={handleStatusChange}
                    type="checkbox"
                    name="statut"
                  />
                  <span className="ms-2">Administrateur</span>
                </dd>
              </React.Fragment>
            )}
          </form>

          <div className="mb-3 flex flex-col items-center justify-center">
            <span
              onClick={handleRegister}
              className="mt-5 w-full cursor-pointer rounded-md bg-indigo-600 px-5 py-1.5 text-center font-semibold text-white hover:bg-indigo-700"
            >
              {forAdminPage ? 'Ajouter' : "S'inscrire"}
            </span>
            {!forAdminPage && (
              <NavLink
                onClick={onClick}
                className="mt-5 cursor-pointer px-5 py-1 text-sm font-semibold text-slate-600 hover:text-slate-800"
                to="/login"
              >
                Se connecter
              </NavLink>
            )}
          </div>
        </dl>
      </div>
    </AppLayout>
  );
};
