"use client";

import React, { useState } from 'react';
import { listings } from '@/data/listings';
import ListingCard from '@/components/listing-card';
import ListingsFilter from '@/components/listings-filter';
import { Filter, Listing } from '@/types/listing';

export default function Listings() {
  const [filters, setFilters] = useState<Filter>({} as Filter);

  const handleFilterChange = (newFilters: Partial<Filter>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const filteredListings = listings.filter((listing: Listing) => {
    if (filters.propertyType && listing.propertyType !== filters.propertyType) return false;
    if (typeof filters.minPrice === 'number' && listing.price < filters.minPrice) return false;
    if (typeof filters.maxPrice === 'number' && listing.price > filters.maxPrice) return false;
    if (typeof filters.bedrooms === 'number' && listing.bedrooms < filters.bedrooms) return false;
    if (typeof filters.bathrooms === 'number' && listing.bathrooms < filters.bathrooms) return false;
    return true;
  });


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Properties</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ListingsFilter onFilterChange={handleFilterChange} />
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
