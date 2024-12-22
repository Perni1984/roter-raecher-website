import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className }: HeroImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src="/src/images/ausgabe-0/2024-12-22-0001.jpg"
        alt="Der Rote Rächer Hero"
        className={cn(
          "w-full max-w-3xl mx-auto rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-[1.02]",
          className
        )}
        onClick={() => setIsOpen(true)}
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
          <ScrollArea className="w-full h-full" type="hover">
            <div className="min-w-fit min-h-fit p-4">
              <img
                src="/src/images/ausgabe-0/2024-12-22-0001.jpg"
                alt="Der Rote Rächer Hero"
                className="w-auto h-auto max-w-none"
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}