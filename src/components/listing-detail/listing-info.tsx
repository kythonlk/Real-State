import { Listing } from '@/types/listing';
import { BedDouble, Bath, Move, MapPin, Home } from 'lucide-react';

interface ListingInfoProps {
  listing: Listing;
}

export default function ListingInfo({ listing }: ListingInfoProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{listing.title}</h1>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{listing.address}, {listing.city}, {listing.state} {listing.zipCode}</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-blue-600">
          {formatter.format(listing.price)}
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <BedDouble className="h-5 w-5 text-gray-600" />
          <span>{listing.bedrooms} Beds</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="h-5 w-5 text-gray-600" />
          <span>{listing.bathrooms} Baths</span>
        </div>
        <div className="flex items-center gap-2">
          <Move className="h-5 w-5 text-gray-600" />
          <span>{listing.sqft} sqft</span>
        </div>
        <div className="flex items-center gap-2">
          <Home className="h-5 w-5 text-gray-600" />
          <span className="capitalize">{listing.propertyType}</span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{listing.description}</p>
      </div>
    </div>
  );
}
