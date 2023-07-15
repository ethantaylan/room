import React from 'react';

export interface RegisterFieldProps {
  ref: React.LegacyRef<HTMLInputElement>;
  placerholder: string;
  onChange?: () => void;
}

export const RegisterField: React.FC<RegisterFieldProps> = ({
  ref,
  placerholder,
  onChange
}) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">Pseudo</dt>
      <dd className="mt-1 rounded border p-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        <input ref={ref} onChange={onChange} placeholder={placerholder} />
      </dd>
    </div>
  );
};
