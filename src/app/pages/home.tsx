import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { BannerSection } from '../components/home/banner-section';
import { BlogSection } from '../components/home/blog-section';
import { LogoSection } from '../components/home/logo-section';
import { ContentSection } from '../components/home/content-section';
import { PostAvis } from '../components/avis';

export const Home: React.FC = () => {

  return (
    <AppLayout>
      <PostAvis />
      <BannerSection />
      <LogoSection />
      <ContentSection />
      {/* <Features /> */}
      <BlogSection />
    </AppLayout>
  );
};
