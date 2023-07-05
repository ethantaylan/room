import React, { PropsWithChildren } from 'react';
import { AdministrationSectionTitle } from './administration-section-title';
import { AppLayout } from 'src/app/app-layout/app-layout';
import { AdministrationNavbar } from './administration-navbar';

export interface AdministrationSectionLayoutProps {
  title: string;
}

export const AdministrationSectionLayout: React.FC<
  PropsWithChildren<AdministrationSectionLayoutProps>
> = ({ title, children }) => {
  return (
    <AppLayout withFooter={false}>
      <AdministrationNavbar />

      <div className="p-5">
        <AdministrationSectionTitle title={title} />
        {children}
      </div>
    </AppLayout>
  );
};
