import React from 'react';
import { DollarSign } from 'lucide-react';

interface PriceRangeFilterProps {
  onPriceChange: (min: string, max: string) => void;
}

export default function PriceRangeFilter({ onPriceChange }: PriceRangeFilterProps) {
  return (
    <div className="filter-card">
      <div className="flex items-center gap-2 mb-3">
        <DollarSign className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold">Price Range</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <input
            type="number"
            placeholder="Min"
            className="filter-input pl-8"
            onChange={(e) => onPriceChange(e.target.value, '')}
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        </div>
        <div className="relative">
          <input
            type="number"
            placeholder="Max"
            className="filter-input pl-8"
            onChange={(e) => onPriceChange('', e.target.value)}
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        </div>
      </div>
    </div>
  );
}