"use client";

import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex space-x-1">
      <Button
        onClick={() => setTheme("dark")}
        variant="outline"
        className={"rounded-full"}
        size="icon"
      >
        <MoonStar className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant="outline"
        className={"rounded-full"}
        size="icon"
      >
        <Sun className="h-4 w-4" />
      </Button>
    </div>
  );
}
