"use client";

import React from 'react';
import { Listing } from '@/types/listing';
import { BedDouble, Bath, Move } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `/listings/${listing.id}`;
  };

  return (
    <a
      href={`/listings/${listing.id}`}
      onClick={handleClick}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <img
        src={listing.imageUrl}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
          <span className="text-lg font-bold text-blue-600">
            {formatter.format(listing.price)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {listing.city}, {listing.state} {listing.zipCode}
        </p>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">{listing.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">{listing.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Move className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">{listing.sqft} sqft</span>
          </div>
        </div>
      </div>
    </a>
  );
}
