import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  images: string[];
  className?: string;
}

export function PhotoGallery({ images, className }: PhotoGalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((src) => ({ src }));

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className,
        )}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setIndex(idx)}
          >
            <img
              src={image}
              alt={`Gallery image ${idx + 1}`}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
