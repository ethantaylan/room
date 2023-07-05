import React from 'react';

export interface AdministrationSecionTitleProps {
  title: string;
}

export const AdministrationSecionTitle: React.FC<
  AdministrationSecionTitleProps
> = ({ title }) => {
  return <h1 className="p-4 text-xl">{title}</h1>;
};
