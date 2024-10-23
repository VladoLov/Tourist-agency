"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleToggle = () => {
    if (resolvedTheme === "system") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex h-8 w-14 items-center justify-center rounded-full bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`absolute inset-y-0 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {resolvedTheme === "light" && (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
        {resolvedTheme === "dark" && <Moon className="h-4 w-4 text-blue-500" />}
      </span>
    </button>
  );
}
