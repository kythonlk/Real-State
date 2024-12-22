import React from 'react';
import { Home, Building2, Building } from 'lucide-react';

interface PropertyTypeFilterProps {
  onTypeChange: (type: string) => void;
}

export default function PropertyTypeFilter({ onTypeChange }: PropertyTypeFilterProps) {
  return (
    <div className="filter-card">
      <h3 className="font-semibold mb-3">Property Type</h3>
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => onTypeChange('house')}
          className="filter-button"
        >
          <Home className="h-5 w-5" />
          <span>House</span>
        </button>
        <button
          onClick={() => onTypeChange('apartment')}
          className="filter-button"
        >
          <Building2 className="h-5 w-5" />
          <span>Apartment</span>
        </button>
        <button
          onClick={() => onTypeChange('condo')}
          className="filter-button"
        >
          <Building className="h-5 w-5" />
          <span>Condo</span>
        </button>
      </div>
    </div>
  );
}