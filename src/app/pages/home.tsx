import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { CategoryFilters } from '../components/category-filters/category-filters';
import { ProductCard } from '../components/category-filters/product-card';

export const Home: React.FC = () => {
  return (
    <AppLayout>
        <CategoryFilters>
          <ProductCard />
        </CategoryFilters>
    </AppLayout>
  );
};
