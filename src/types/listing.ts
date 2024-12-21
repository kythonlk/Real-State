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
}


export interface Filter {
  id: string;
  title: string;
  price: number;
  maxPrice: number;
  minPrice: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  featured: boolean;
  propertyType: 'house' | 'condo' | 'apartment' | 'villa';
}
