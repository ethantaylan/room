import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { AboutUsSection } from '../components/about-us/about-us-section';

export const AboutUs: React.FC = () => {
  return (
    <AppLayout>
      <AboutUsSection />
      {/* <FeedBackSection /> */}
    </AppLayout>
  );
};
