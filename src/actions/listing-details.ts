'use server';

import { listings } from '@/data/listings';
import { Listing } from '@/types/listing';

export async function getListingById(id: string): Promise<Listing | any> {
  const foundListing = listings.find(item => item.id === id);
  return foundListing || { "title": "Listing not found", "description": "View details of a real estate listing" };
}
