import React from "react";
import { LucideIcon } from "lucide-react";

interface HeroProps {
  BackpackIcon: LucideIcon;
  HeartHandshakeIcon: LucideIcon;
}

function HeroText({ BackpackIcon, HeartHandshakeIcon }: HeroProps) {
  return (
    <div className="col-span-3 items-center justify-center">
      <div className="flex flex-col items-center justify-center text-6xl transition-timing-function-minor-spring w-full h-full font-oswald font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        <div className="flex justify-start items-center w-full ">
          <h2 className="border-t-4 py-4 border-indigo-500">Putujmo </h2>
          <BackpackIcon className="inline-block h-8 w-8 ml-2 mt-4 text-indigo-500" />
        </div>
        <div className="flex justify-end items-center w-full  mr-6">
          <HeartHandshakeIcon className="inline-block h-8 w-8 mr-2 text-indigo-500" />
          <h2 className="border-b-4 py-4 border-indigo-500">Zajedno </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
