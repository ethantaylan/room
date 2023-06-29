import React from 'react';
import { CategoryFilters } from '../components/category-filters';
import { ProductCard } from '../components/product-card';
import { AppLayout } from '../app-layout/app-layout';
import { LesSallesSection } from '../components/hero-section';

export const LesSalles: React.FC = () => {
  return (
    <AppLayout>
      <LesSallesSection />
      <CategoryFilters>
        <ProductCard />
      </CategoryFilters>
    </AppLayout>
  );
};
