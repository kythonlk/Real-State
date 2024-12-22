import React from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  images: FileList | null;
  onImagesChange: (files: FileList | null) => void;
}

export default function ImageUpload({ images, onImagesChange }: ImageUploadProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Property Images</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
        <div className="text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <div className="text-sm text-gray-600">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
              <span>Upload files</span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="sr-only"
                onChange={(e) => onImagesChange(e.target.files)}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
        </div>
      </div>
      {images && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from(images).map((file, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
