import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { SEO } from 'utils/SEO';

const HomePage = () => {
  return (
    <>
      <SEO title="Home" description="Take good care of your small pets" />

      <Hero />
    </>
  );
};

export default HomePage;
