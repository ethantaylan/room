import React from 'react';

interface ButtonProps {
  text: string;
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return <button className={`bg-black px-5 py-2 text-white ${className}`}>{text}</button>;
};
