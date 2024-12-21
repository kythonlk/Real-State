"use client";

import React from 'react';
import { Home } from 'lucide-react';
import SearchBar from './search-bar'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">DreamHome</span>
          </a>

          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/listings" className="text-gray-600 hover:text-blue-600">Listings</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
