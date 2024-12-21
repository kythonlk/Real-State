import React, { useState } from 'react';
import { Search, MapPin, Home as HomeIcon } from 'lucide-react';
import { listings } from '@/data/listings';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof listings>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      const filtered = listings.filter(listing =>
        listing.title.toLowerCase().includes(value.toLowerCase()) ||
        listing.city.toLowerCase().includes(value.toLowerCase()) ||
        listing.address.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div className="flex gap-2 bg-white p-3 rounded-lg shadow-lg">
        <div className="flex-1 flex items-center gap-2 border-r">
          <MapPin className="h-5 w-5 text-blue-600" />
          <input
            type="text"
            placeholder="Enter location ..."
            className="w-full focus:outline-none"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2">
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
          {results.map(result => (
            <a
              key={result.id}
              href={`/listings/${result.id}`}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b last:border-b-0"
            >
              <HomeIcon className="h-5 w-5 text-blue-600" />
              <div>
                <h4 className="font-medium text-gray-800">{result.title}</h4>
                <p className="text-sm text-gray-600">{result.address}, {result.city}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
