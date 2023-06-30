import React from 'react';
import BannerImg from '../../../assets/banner.jpg';

export const BannerSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        className="h-96 w-full object-cover"
        src={BannerImg}
        alt="Women with smartphone and pen in a meeting room"
      />
    </div>
  );
};
