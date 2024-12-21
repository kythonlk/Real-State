import React from 'react';

interface ListingsFilterProps {
  onFilterChange: (filters: any) => void;
}

export default function ListingsFilter({ onFilterChange }: ListingsFilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              onChange={(e) => onFilterChange({ minPrice: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              onChange={(e) => onFilterChange({ maxPrice: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            onChange={(e) => onFilterChange({ propertyType: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            onChange={(e) => onFilterChange({ bathrooms: e.target.value })}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
          </select>
        </div>
      </div>
    </div>
  );
}