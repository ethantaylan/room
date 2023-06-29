import React from 'react';
import BannerImg from '../../assets/banner.jpg';
import { GetCommandes } from '../services/commandes';

export const BannerSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        className="h-96 w-full object-cover"
        src={BannerImg}
        alt="Women with smartphone and pen in a meeting room"
      />
      <GetCommandes />
    </div>
  );
};
