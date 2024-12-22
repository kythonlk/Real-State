"use client";

import React, { useState } from 'react';
import { Home } from 'lucide-react';
import BasicInfo from '@/components/create-listing/basic-info';
import PropertyDetails from '@/components/create-listing/property-details';
import LocationInfo from '@/components/create-listing/location';
import ImageUpload from '@/components/create-listing/image-upload';

export default function CreateListing() {
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(formData));
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Create New Listing</h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <BasicInfo />
            <PropertyDetails />
            <LocationInfo />

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <textarea
                name="description"
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your property..."
              ></textarea>
            </div>

            <ImageUpload images={images} onImagesChange={setImages} />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="h-5 w-5" />
              <span>Create Listing</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
