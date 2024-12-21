import React from 'react';
import Hero from '../components/hero';
import FeaturedListings from '../components/featured-listings';
import Stats from '../components/home/stats';
import Services from '../components/home/services';
import Testimonials from '../components/home/testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedListings />
      <Services />
      <Testimonials />
    </div>
  );
}
