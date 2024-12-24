import { getListingById } from '@/actions/listing-details'
import ListingGallery from '@/components/listing-detail/listing-gallery';
import ListingInfo from '@/components/listing-detail/listing-info';
import ListingAmenities from '@/components/listing-detail/listing-amenities';
import ListingContact from '@/components/listing-detail/listing-contact';
import ListingSimilar from '@/components/listing-detail/listing-similar';

interface Props {
  params: Promise<{ id: string }>
}

export default async function ListingDetail({ params }: Props) {
  const id = (await params).id
  const listing = await getListingById(id);

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
