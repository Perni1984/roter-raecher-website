import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Comic {
  id: string;
  title: string;
  cover: string;
  description: string;
  pages?: string[];
}

interface ComicViewerProps {
  comic: Comic | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ComicViewer({ comic, isOpen, onClose }: ComicViewerProps) {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    if (bookRef.current) {
      // @ts-ignore - method exists on the ref
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleNextPage = () => {
    if (bookRef.current) {
      // @ts-ignore - method exists on the ref
      bookRef.current.pageFlip().flipNext();
    }
  };

  // Fallback pages if no pages are provided
  const fallbackPages = [
    'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80',
    'https://images.unsplash.com/photo-1614729939124-032d1e6d3f14?w=800&q=80',
    'https://images.unsplash.com/photo-1614731922837-0f99f9aa2ff3?w=800&q=80',
    'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=800&q=80'
  ];

  const pages = comic?.pages || fallbackPages;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh]">
        <div className="relative w-full h-full">
          <div className="absolute top-4 left-4 z-50">
            <h2 className="text-xl font-semibold">{comic?.title}</h2>
            <p className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {pages.length}
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="w-full h-full flex items-center justify-center">
              <HTMLFlipBook
                ref={bookRef}
                width={600}
                height={800}
                size="stretch"
                minWidth={300}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1000}
                showCover={true}
                className="shadow-xl"
                onFlip={(e) => setCurrentPage(e.data)}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={true}
                startZIndex={100}
                autoSize={true}
                maxShadowOpacity={0.5}
                showPageCorners={true}
                disableFlipByClick={false}
              >
                {pages.map((page, index) => (
                  <div key={index} className="relative bg-white">
                    <img
                      src={page}
                      alt={`Page ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
              onClick={handleNextPage}
              disabled={currentPage === pages.length - 1}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}