import dynamic from 'next/dynamic'
import Map from '../components/map-listings'
import Hero from '../components/hero';
import FeaturedListings from '../components/featured-listings';
import Stats from '../components/home/stats';
import Services from '../components/home/services';
import Testimonials from '../components/home/testimonials';
import { listings } from '../data/listings';

export default function Home() {
  return (
    <div>
      <Hero />
      <Map properties={listings} />
      <Stats />
      <FeaturedListings />
      <Services />
      <Testimonials />
    </div>
  );
}
