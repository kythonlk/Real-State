'use server';

import { listings } from '@/data/listings';
import { Listing } from '@/types/listing';

export async function getListingById(id: string): Promise<Listing | null> {
  const foundListing = listings.find(item => item.id === id);
  return foundListing || null;
}
