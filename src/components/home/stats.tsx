import React from 'react';
import { Users, Building, Award, Heart } from 'lucide-react';

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">15K+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">2.5K+</h3>
            <p className="text-gray-600">Properties Sold</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">99%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}