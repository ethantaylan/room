import React from 'react';
import { CategoryFilters } from '../components/category-filters/category-filters';
import { ProductCard } from '../components/category-filters/product-card';
import { AppLayout } from '../app-layout/app-layout';

export const LesSalles: React.FC = () => {
  return (
    <AppLayout>
    <CategoryFilters>
      <ProductCard />
    </CategoryFilters>
    </AppLayout>
  );
};
