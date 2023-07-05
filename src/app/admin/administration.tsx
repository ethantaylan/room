import React, { PropsWithChildren } from 'react';
import { AppLayout } from 'src/app/app-layout/app-layout';
import { AdministrationNavbar } from 'src/app/admin/components/administration-navbar';

export const Administration: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppLayout withFooter={false}>
      <div className="flex w-full flex-col">
        <AdministrationNavbar />
        {children}
      </div>
    </AppLayout>
  );
};
