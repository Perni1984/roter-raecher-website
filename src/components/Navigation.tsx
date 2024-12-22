import React from "react";
import { Book, Home, Pencil } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b pl-4">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center space-x-2">
          <img src="/logo-grayscale.svg" alt="Book" className="h-6 w-6" />
          <span className="font-bold text-xl">Der Rote Rächer</span>
        </div>
        <div className="flex space-x-6">
          <Button variant="ghost" className="flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Start</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Book className="h-4 w-4" />
            <span>Ausgaben</span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center space-x-2"
            onClick={() => scrollToSection("aboutTheDrawer")}
          >
            <Pencil className="h-4 w-4" />
            <span>Über den Zeichner</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
