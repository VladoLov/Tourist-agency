import React from "react";
import {
  Bus,
  Plane,
  Waves,
  BookCopy,
  NotebookText,
  HomeIcon,
} from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="animate-slide bg-background h-12, p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/"
            className="items-center justify-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Travel Agency
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-2 left-4">
          <NavButton
            href="/kratke-destinacije"
            label="Katke Destinacije"
            icon={Bus}
            title="Katke Destinacije"
          />
          <NavButton
            href="/daleke-destinacije"
            label="Daleke Destinacije"
            icon={Plane}
            title="Daleke Destinacije"
          />
          <NavButton
            href="/jadran"
            label="Jadran"
            icon={Waves}
            title="Jadran"
          />
          <NavButton
            href="/blog"
            label="Blog"
            icon={NotebookText}
            title="Blog"
          />
          <NavButton
            href="/about"
            label="O Nama"
            icon={BookCopy}
            title="O Nama"
          />
        </div>
        <div className="flex items-center justify-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
