import Image from "next/image";
import React from "react";

export default function Aktivnosti() {
  return (
    <div className="grid grid-cols-8 gap-8 pt-24 relative">
      <div className="col-span-3">
        <div className="flex flex-col w-96 items-center justify-around">
          <h2 className="text-xl font-bold font-oswald py-2">
            Avanturističke i Rekreativne atinvosti
          </h2>
          <p>
            Avanturističke i rekreativne aktivnosti pružaju savršenu kombinaciju
            adrenalina i opuštanja u prirodi, idealne za sve ljubitelje aktivnog
            odmora.
          </p>
          <ul>
            <li>Rafting </li>
            <li>Planinarenje </li>
            <li>Skijanje </li>
            <li>Kajakarenje </li>
          </ul>
        </div>
      </div>
      <div className="col-span-5 relative">
        <div className="grid grid-cols-2 gap-2 relative">
          <div className="overflow-hidden">
            <Image
              src="/images/actions/rafting.jpg"
              alt="Rafting"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/actions/hinikg.jpg"
              alt="Planinarenje"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/actions/skiing.jpg"
              alt="Skijanje"
              width={280}
              height={280}
              className="rounded-full"
            />
          </div>
          <div className="col-span-1 mt-16 ml-6">
            <Image
              src="/images/actions/kayaking.jpg"
              alt="Kajakarenje"
              width={250}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="col-span-5 mt-16">
        <div className="grid grid-cols-2 gap-2 relative">
          <div className="overflow-hidden">
            <Image
              src="/images/actions/horse-riding.jpg"
              alt="Jahanje Konnja"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/actions/quad-ride.png"
              alt="Off-road Safari sa quvadovima"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/actions/biking.png"
              alt="Biciklizam "
              width={280}
              height={280}
              className="rounded-full"
            />
          </div>
          <div className="col-span-1 mt-16 ml-6">
            <Image
              src="/images/actions/cave.jpg"
              alt="Speleologija "
              width={250}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="col-span-3 mt-16 items-center justify-center">
        <h3 className="text-xl font-bold font-oswald py-2">
          Svaka avantura nudi nezaboravno iskustvo
        </h3>
        <p>
          Svaka avantura nudi nezaboravno iskustvo Bilo da tražite izazov ili
          spokoj, ove aktivnosti omogućavaju uživanje u prirodnim lepotama i
          stvaranje nezaboravnih uspomena.
        </p>
        <ul>
          <li>Jahanje konje </li>
          <li>Quad safari </li>
          <li>Biciklizam </li>
          <li>Speleologija </li>
        </ul>
      </div>
    </div>
  );
}
