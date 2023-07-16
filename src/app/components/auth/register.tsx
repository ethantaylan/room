import React, { useRef } from 'react';
import { RegisterField, RegisterFieldProps } from './register-field';

export interface UserInformationsProps {
  firstnameRef: React.LegacyRef<HTMLInputElement>;
  lastnameRef: React.LegacyRef<HTMLInputElement>;
  emailRef: React.LegacyRef<HTMLInputElement>;
  pseudoRef: React.LegacyRef<HTMLInputElement>;
  civiliteRef: React.LegacyRef<HTMLInputElement>;
  mdpRef: React.LegacyRef<HTMLInputElement>;
  registerFields: RegisterFieldProps[]
}

export const Register: React.FC<UserInformationsProps> = ({ registerFields }) => {

  return (
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        {registerFields.map(field => (
          <RegisterField
            ref={field.ref}
            onChange={field.onChange}
            placerholder={field.placerholder}
          />
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
