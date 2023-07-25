import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { CategoryFilters } from '../components/les-salles/category-filters';
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
