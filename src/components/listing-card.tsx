"use client";

import React from 'react';
import { Listing } from '@/types/listing';
import { BedDouble, Bath, Move } from 'lucide-react';
import Image from 'next/image';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  });

  return (
    <a
      href={`/listings/${listing.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="relative">
        <div className="absolute top-2 left-2 z-10">
          <div className="bg-red-600 px-2 py-1 text-white rounded-md text-sm">For rent</div>
        </div>
        <Image
          src={listing.imageUrl || "/placeholder.svg"}
          alt={listing.title}
          className="w-full h-48 object-cover"
          width={500}
          height={500}
        />
      </div>
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
