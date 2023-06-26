import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { BannerSection } from '../components/banner-section';
import { BlogSection } from '../components/blog-section';
import { LogoSection } from '../components/logo-section';
import { ContentSection } from '../components/content-section';

export const Home: React.FC = () => {
  return (
    <AppLayout>
      <BannerSection />
      <LogoSection />
      <ContentSection />
      {/* <Features /> */}
      <BlogSection />
    </AppLayout>
  );
};
