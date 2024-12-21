"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ListingGalleryProps {
  images: string[];
}

export default function ListingGallery({ images }: ListingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative rounded-lg overflow-hidden">
      <img
        src={images[activeIndex]}
        alt="Property"
        className="w-full h-[500px] object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setActiveIndex(i => (i > 0 ? i - 1 : images.length - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setActiveIndex(i => (i < images.length - 1 ? i + 1 : 0))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}
