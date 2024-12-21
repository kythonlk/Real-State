import { listings } from '@/data/listings';
import ListingCard from '../listing-card';

interface ListingSimilarProps {
  currentId: string;
}

export default function ListingSimilar({ currentId }: ListingSimilarProps) {
  const similarListings = listings
    .filter(listing => listing.id !== currentId)
    .slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Similar Properties</h2>
      <div className="space-y-4">
        {similarListings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
