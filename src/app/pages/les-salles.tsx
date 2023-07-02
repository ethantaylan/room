import React from 'react';
import { CategoryFilters } from '../components/les-salles/category-filters';
import { AppLayout } from '../app-layout/app-layout';
import { LesSallesSection } from '../components/les-salles/les-salles-section';
import { Salles } from '../components/salles';

export const LesSalles: React.FC = () => {
  return (
    <AppLayout>
      <LesSallesSection />
      <CategoryFilters>
        <Salles />
      </CategoryFilters>
    </AppLayout>
  );
};
