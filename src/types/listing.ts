export interface Listing {
  id: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  propertyType: 'house' | 'condo' | 'apartment' | 'villa';
  mapLink: string;
  location: {
    lat: number;
    lng: number;
  };
}


export interface Filter {
  minPrice?: string;
  maxPrice?: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  sqft?: string;
  price?: string;
  city?: string;
  state?: string;
  featured?: boolean;
  amenities?: string;
}
