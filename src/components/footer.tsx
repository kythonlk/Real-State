import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">DreamHome</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property. Making dreams come true since 1970.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/listings" className="text-gray-400 hover:text-white">Properties</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Real Estate , Barsha Road</li>
              <li>Dubai, United Arab Emirates</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@dreamhome.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </div>
              <div className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </div>
              <div className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </div>
              <div className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DreamHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
