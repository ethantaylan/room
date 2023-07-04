import React from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';

export interface AppLayoutProps {
  children: React.ReactNode;
  withFooter?: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  withFooter = true
}) => {
  return (
    <div className="mx-auto h-full max-w-7xl sm:px-6 lg:px-8">
      <Header />
      {children}
      {withFooter && <Footer />}
    </div>
  );
};
