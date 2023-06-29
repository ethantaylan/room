import React from 'react';
import { CategoryFilters } from '../components/category-filters';
import { AppLayout } from '../app-layout/app-layout';
import { LesSallesSection } from '../components/les-salles-section';
import { GetSalles } from '../services/salles';

export const LesSalles: React.FC = () => {
  return (
    <AppLayout>
      <LesSallesSection />
      <CategoryFilters>
        <GetSalles />
      </CategoryFilters>
    </AppLayout>
  );
};
