import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { AboutUsSection } from '../components/about-us-section';
import { FeedBackSection } from '../components/feedback-section';
import { NewsletterSection } from '../components/newsletter-section';

export const AboutUs: React.FC = () => {
  return (
    <AppLayout>
      <AboutUsSection />
      {/* <FeedBackSection /> */}
    </AppLayout>
  );
};
