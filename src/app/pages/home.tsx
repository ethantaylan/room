import React from 'react';
import { AppLayout } from '../app-layout/app-layout';
import { BannerSection } from '../components/banner-section';
import { BlogSection } from '../components/blog-section';
import { LogoSection } from '../components/logo-section';
import { ContentSection } from '../components/content-section';
import { useAxios } from '../hooks/use-axios';
import axios from 'axios';

export const Home: React.FC = () => {
  const getAvisFetch = () => {
    axios.get('http://localhost/avis.php').then(response => {
      console.log(response.data);
    });
  };
  getAvisFetch();

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
