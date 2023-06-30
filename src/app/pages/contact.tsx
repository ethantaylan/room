import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { ContactSection } from '../components/contact/contact-section';

export const Contact: React.FC = () => {
  return (
    <AppLayout>
      <ContactSection />
    </AppLayout>
  );
};
