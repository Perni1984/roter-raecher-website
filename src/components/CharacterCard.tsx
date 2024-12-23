import React from "react";
import { Card, CardContent } from "./ui/card";

interface CharacterProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export function CharacterCard({
  id,
  name,
  description,
  image,
}: CharacterProps) {
  return (
    <a href={`/character/${id}`}>
      <Card className="cursor-pointer transition-transform hover:scale-105">
        <CardContent className="p-4">
          <div className="aspect-[2/3] relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
}
