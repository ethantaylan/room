import React from 'react';
import { CategoryFilters } from '../components/category-filters';
import { ProductCard } from '../components/product-card';
import { AppLayout } from '../app-layout/app-layout';
import { Section } from '../components/hero-section';
import { LogoSection } from '../components/logo-section';

export const LesSalles: React.FC = () => {
  return (
    <AppLayout>
      <Section />
      <CategoryFilters>
        <ProductCard />
      </CategoryFilters>
    </AppLayout>
  );
};
