import React from 'react';

export interface InputProps {
  label: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  name
}) => {
  return (
    <div className="mt-5 flex w-full items-center justify-center">
      <label className="me-5 w-60 text-right">{label}</label>
      <input
        name={name}
        onChange={onChange}
        id={label}
        type="text"
        value={value}
        className="w-full rounded border px-2"
      />
    </div>
  );
};
