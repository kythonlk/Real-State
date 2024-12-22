import React from 'react';
import { DollarSign } from 'lucide-react';

export default function BasicInfo() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Modern Waterfront Villa"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            name="propertyType"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="number"
              name="price"
              required
              min="0"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter price"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Square Feet
          </label>
          <input
            type="number"
            name="sqft"
            required
            min="0"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 2000"
          />
        </div>
      </div>
    </div>
  );
}
