import React from "react";
import { cn } from "@/lib/utils";

interface BookSpineProps {
  title: string;
  color?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function BookSpine({
  title,
  color = "bg-red-900",
  onClick,
  isActive,
}: BookSpineProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative h-[300px] w-[40px] cursor-pointer transform transition-all duration-300",
        "hover:translate-y-[-10px] hover:shadow-xl",
        isActive && "translate-y-[-10px]",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-sm",
          color,
          "shadow-inner flex items-center justify-center",
          "before:absolute before:inset-0 before:bg-black/20",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/20 after:to-transparent",
        )}
      >
        <span
          className="absolute text-white font-semibold writing-mode-vertical transform rotate-180 whitespace-nowrap text-sm"
          style={{ writingMode: "vertical-rl" }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
