import React from "react";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  images: string[];
  className?: string;
}

export function PhotoGallery({ images, className }: PhotoGalleryProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {images.map((image, index) => (
        <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}