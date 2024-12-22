import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ComicViewer } from './ComicViewer';
import { cn } from '@/lib/utils';

interface Comic {
  id: string;
  title: string;
  cover: string;
  description: string;
  pages?: string[];
  grayscale?: boolean;
}

interface BookShelfProps {
  comics: Comic[];
}

export function BookShelf({ comics }: BookShelfProps) {
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);

  const handleComicClick = (comic: Comic) => {
    if(!comic.grayscale) {
      setSelectedComic(comic);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {comics.map((comic) => (
        <Card 
          key={comic.id}
          className={cn(!comic.grayscale && "cursor-pointer transition-transform hover:scale-105")}
          onClick={() => handleComicClick(comic)}
        >
          <CardContent className="p-4">
            <div className="aspect-[2/3] relative overflow-hidden rounded-lg">
              <img
                src={comic.cover}
                alt={comic.title}
                className={cn(
                  "object-cover w-full h-full",
                  comic.grayscale && "grayscale opacity-70"
                )}
              />
            </div>
            <h3 className="mt-4 font-semibold">{comic.title}</h3>
            <p className="text-sm text-muted-foreground">{comic.description}</p>
          </CardContent>
        </Card>
      ))}

      <ComicViewer
        isOpen={!!selectedComic}
        onClose={() => setSelectedComic(null)}
        comic={selectedComic}
      />
    </div>
  );
}