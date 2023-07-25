import React from 'react';

export interface RegisterFieldProps {
  ref: React.LegacyRef<HTMLInputElement>;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: React.HTMLInputTypeAttribute;
  label: string;
}

export const RegisterField: React.FC<RegisterFieldProps> = ({
  ref,
  placeholder,
  onChange,
  inputType,
  label
}) => {

    
  return (
    <form className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
      <dd className="mt-1 rounded border p-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        <input
          autoComplete="on"
          className="w-full ps-1"
          type={inputType}
          ref={ref}
          onChange={onChange}
          placeholder={placeholder}
        />
      </dd>
    </form>
  );
};
