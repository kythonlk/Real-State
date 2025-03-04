import React from 'react';
import { listings } from '@/data/listings';
import ListingCard from './listing-card';

export default function FeaturedListings() {
  const featuredListings = listings.filter(listing => listing.featured);
  const limit = featuredListings.length > 4 ? featuredListings.slice(0, 4) : featuredListings;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {limit.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
