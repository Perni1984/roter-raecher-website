import React from 'react';

interface ShelfLevelProps {
  children: React.ReactNode;
}

export function ShelfLevel({ children }: ShelfLevelProps) {
  return (
    <div className="relative mb-8">
      <div className="flex gap-2 p-4 items-end min-h-[320px] bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=800&q=80')] bg-cover">
        {children}
      </div>
      {/* Wooden shelf */}
      <div className="h-6 bg-[url('https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=800&q=80')] bg-cover relative">
        {/* Shelf shadow */}
        <div className="absolute -top-4 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-black/20" />
        {/* Shelf highlight */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20" />
      </div>
    </div>
  );
}