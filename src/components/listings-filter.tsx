"use client";

import { useState } from "react";

interface ListingsFilterProps {
  onFilterChange: (filters: any) => void;
}

export default function ListingsFilter({ onFilterChange }: ListingsFilterProps) {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleInputChange = (key: string, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Filter Listings</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Price Range
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 p-2"
              onChange={(e) => handleInputChange("minPrice", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 p-2"
              onChange={(e) => handleInputChange("maxPrice", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Property Type
          </label>
          <select
            value={filters.propertyType}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 p-2"
            onChange={(e) => handleInputChange("propertyType", e.target.value)}
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Bedrooms
          </label>
          <select
            value={filters.bedrooms}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 p-2"
            onChange={(e) => handleInputChange("bedrooms", e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Bathrooms
          </label>
          <select
            value={filters.bathrooms}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 p-2"
            onChange={(e) => handleInputChange("bathrooms", e.target.value)}
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
