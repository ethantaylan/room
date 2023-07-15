import { RegisterField, RegisterFieldProps } from './register-field';

export interface UserInformations {
  firstnameRef: React.LegacyRef<HTMLInputElement>;
  lastnameRef: React.LegacyRef<HTMLInputElement>;
  emailRef: React.LegacyRef<HTMLInputElement>;
  pseudoRef: React.LegacyRef<HTMLInputElement>;
  civiliteRef: React.LegacyRef<HTMLInputElement>;
  mdpRef: React.LegacyRef<HTMLInputElement>;
}

export interface RegisterProps {
  userInformations: UserInformations | null;
}

export const Register: React.FC<RegisterProps> = ({ userInformations }) => {
  const RegisterFields: RegisterFieldProps[] = [
    { ref: userInformations?.firstnameRef || '', placerholder: 'John' },
    { ref: userInformations?.lastnameRef || '', placerholder: 'Doe' },
    {
      ref: userInformations?.emailRef || '',
      placerholder: 'john.doe@room.fr'
    },
    {
      ref: userInformations?.pseudoRef || '',
      placerholder: 'JohnDoe999'
    },
    {
      ref: userInformations?.mdpRef || '',
      placerholder: '***********'
    }
  ];

  return (
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        {RegisterFields.map(field => (
          <RegisterField ref={field.ref} placerholder={field.placerholder} />
        ))}
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Attachments
          </dt>
        </div>
      </dl>
    </div>
  );
};
