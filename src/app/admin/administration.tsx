import React, { PropsWithChildren } from 'react';
import { AdministrationSectionLayout } from './components/administration-section-layout';

export interface AdministrationProps {
  title?: string;
}

export const Administration: React.FC<
  PropsWithChildren<AdministrationProps>
> = ({ children, title }) => {
  return (
    <AdministrationSectionLayout children={children} title={title || ''} />
  );
};
