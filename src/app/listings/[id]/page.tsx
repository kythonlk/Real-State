import { getListingById } from '@/actions/useListingDetail'
import ListingGallery from '@/components/listing-detail/ListingGallery';
import ListingInfo from '@/components/listing-detail/ListingInfo';
import ListingAmenities from '@/components/listing-detail/ListingAmenities';
import ListingContact from '@/components/listing-detail/ListingContact';
import ListingSimilar from '@/components/listing-detail/ListingSimilar';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const listing = await getListingById(params.id)

  return {
    title: listing.title || 'Listing not found',
    description: listing.description || 'View details of a real estate listing',
  };
}

export default async function ListingDetail({ params }: Props) {

  const listing = await getListingById(params.id);


  if (!listing) return <div>Listing Not Found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ListingGallery images={[listing.imageUrl]} />
          <ListingInfo listing={listing} />
          <ListingAmenities />
          <div className="lg:col-span-3 w-full aspect-w-40 aspect-h-40 h-80">
            <iframe
              src={listing.mapLink}
              className="w-full h-full border border-gray-400 rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="space-y-8">
          <ListingContact />
          <ListingSimilar currentId={listing.id} />
        </div>
      </div>

    </div>
  );
}
