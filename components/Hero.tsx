import React from "react";
import Expandable from "./animata/expandable";
import { HeartHandshake, Backpack } from "lucide-react";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <div className="grid grid-cols-8 gap-2 h-full mt-12">
      <HeroText BackpackIcon={Backpack} HeartHandshakeIcon={HeartHandshake} />
      <div className="items-center justify-center col-span-5">
        <Expandable className="w-full min-w-72 storybook-fix" />
      </div>
    </div>
  );
}
