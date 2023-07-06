import React from 'react';

export interface InputProps {
  label: string;
  value?: string;
  onChange: () => React.ChangeEvent<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className="mt-5 flex w-full items-center justify-center">
      <label className='me-5 w-60 text-right'>{label}</label>
      <input
        onChange={onChange}
        id={label}
        type="text"
        value={value}
        className="w-full rounded border px-2"
      />
    </div>
  );
};
