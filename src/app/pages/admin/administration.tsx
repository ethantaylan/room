import React from 'react';
import { AppLayout } from 'src/app/app-layout/app-layout';
import { Sidebar } from 'src/app/components/generic-components/sidebar';

export const Administration: React.FC = () => {
  return (
    <AppLayout withFooter={false}>
      <hr />

      <div className="flex">
        <div className="flex flex-col">
          <Sidebar />
        </div>
      </div>
    </AppLayout>
  );
};
