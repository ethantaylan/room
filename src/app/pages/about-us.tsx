import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { AboutUsSection } from '../components/about-us/about-us-section';
import { FeedBackSection } from '../components/about-us/feedback-section';
import { NewsletterSection } from '../components/about-us/newsletter-section';

export const AboutUs: React.FC = () => {
  return (
    <AppLayout>
      <AboutUsSection />
      {/* <FeedBackSection /> */}
    </AppLayout>
  );
};
