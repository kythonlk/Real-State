import { Check } from 'lucide-react';

export default function ListingAmenities() {
  const amenities = [
    'Central Air Conditioning',
    'Hardwood Floors',
    'Walk-in Closets',
    'Stainless Steel Appliances',
    'Granite Countertops',
    'Private Balcony',
    'In-unit Laundry',
    'High-speed Internet Ready',
    'Smart Home Features',
    'Garage Parking',
    'Security System',
    'Pet Friendly'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-blue-100 p-1 rounded-full">
              <Check className="h-4 w-4 text-blue-600" />
            </div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
