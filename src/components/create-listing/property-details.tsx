import React from 'react';

export default function PropertyDetails() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Property Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bedrooms
          </label>
          <input
            type="number"
            name="bedrooms"
            required
            min="0"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bathrooms
          </label>
          <input
            type="number"
            name="bathrooms"
            required
            min="0"
            step="0.5"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year Built
          </label>
          <input
            type="number"
            name="yearBuilt"
            min="1800"
            max={new Date().getFullYear()}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
