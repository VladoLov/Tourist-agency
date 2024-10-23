import Image from "next/image";
import React from "react";

export default function Destinations() {
  return (
    <div className="pt-24 grid grid-cols-8 gap-8">
      <div className="col-span-full">
        <h2 className="text-center text-4xl font-bold p-4">
          Putovanja koja inspirišu, uspomene koje traju
        </h2>
      </div>
      <div className="col-span-2 h-96">
        <div className="flex w-full h-full relative rounded-lg overflow-hidden hover:scale-105">
          <Image
            src="/images/jadran.jpg"
            alt="Jadransko more"
            height={400}
            width={350}
            className="object-cover object-center"
          />
          <div className="inset absolute right-2 top-2 bg-white text-lg text-black py-1 px-2 rounded-lg">
            Sunce
          </div>
        </div>
      </div>
      <div className="col-span-2 h-96 relative">
        <div className="flex w-full h-full relative rounded-lg overflow-hidden top-10 hover:scale-105">
          <Image
            src="/images/bus.jpg"
            alt="Bust destinacija Beograd"
            height={400}
            width={350}
            className="object-cover object-center"
          />
          <div className="inset absolute right-2 top-2 bg-white text-lg text-black py-1 px-2 rounded-lg">
            Sunce
          </div>
        </div>
      </div>
      <div className="col-span-2 h-96">
        <div className="flex w-full h-full relative rounded-lg overflow-hidden hover:scale-105">
          <Image
            src="/images/avion.jpg"
            alt="Jadransko more"
            height={400}
            width={350}
            className="object-cover object-center"
          />
          <div className="inset absolute right-2 top-2 bg-white text-lg text-black py-1 px-2 rounded-lg">
            Sunce
          </div>
        </div>
      </div>
      <div className="col-span-2 h-96 relative">
        <div className="flex w-full h-full relative top-10 rounded-lg overflow-hidden hover:scale-105">
          <Image
            src="/images/blagaj.jpg"
            alt="Blagaj, Bosna i Hercegovina"
            height={400}
            width={350}
            className="object-cover object-center"
          />
          <div className="inset absolute right-2 top-2 bg-white text-lg text-black py-1 px-2 rounded-lg">
            Sunce
          </div>
        </div>
      </div>
    </div>
  );
}
