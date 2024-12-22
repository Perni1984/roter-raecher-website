import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className }: HeroImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src="/images/ausgabe-0/2024-12-22-0001.jpg"
        alt="Der Rote Rächer Hero"
        className={cn(
          "w-full max-w-3xl mx-auto rounded-lg shadow-lg",
          className,
        )}
      />
    </>
  );
}
