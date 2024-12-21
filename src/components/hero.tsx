import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl mb-8">
            Discover the perfect property in your favorite location
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Enter location..."
                className="flex-1 px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}