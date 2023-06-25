import React from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';

export interface AppLayoutProps {
  children: React.ReactElement;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
