"use client";

import { Home, Link } from 'lucide-react';
import SearchBar from './search-bar'

export default function Header() {
  return (
    <header className="bg-gray-400/60 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">DreamHome</span>
          </a>
          <nav className="hidden md:flex space-x-6 text-gray-900">
            <Link href="/listings" className="text-gray-800 hover:text-blue-600">Properties</Link>
            <Link href="/about-us" className="text-gray-800 hover:text-blue-600">About Us</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
            <Link href="/create-new" className="text-gray-800 hover:text-blue-600">Create Property</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
