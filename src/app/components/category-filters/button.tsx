import React from 'react';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className="bg-black px-5 py-2 text-white">{text}</button>;
};
