import React from 'react';

export interface AdministrationSectionTitleProps {
  title: string;
}

export const AdministrationSectionTitle: React.FC<
  AdministrationSectionTitleProps
> = ({ title }) => {
  return <h1 className="text-xl">{title}</h1>;
};
