import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import Banner from '../../assets/banner.jpg';
import { Button } from '../components/category-filters/button';

export const Home: React.FC = () => {
  return (
    <AppLayout>
      <div className="relative">
        <img className="h-96 w-full object-cover" src={Banner} alt="" />
        <div className="absolute ms-4 top-1/2">
          <h1 className="text-4xl font-black text-white">
            LOREM IPSUM.
          </h1>
          <Button text='CTA button' />
        </div>
      </div>
    </AppLayout>
  );
};
