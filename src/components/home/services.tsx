import React from 'react';
import { Home, Key, Percent, Shield } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Buy a Home</h3>
            <p className="text-gray-600">Find your place with an immersive photo experience and the most listings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Key className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rent a Home</h3>
            <p className="text-gray-600">We are creating a seamless online experience from shopping to signing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Percent className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sell a Home</h3>
            <p className="text-gray-600">Get a better picture of your home is value and connect with an agent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Management</h3>
            <p className="text-gray-600">Professional property management services for landlords and investors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
