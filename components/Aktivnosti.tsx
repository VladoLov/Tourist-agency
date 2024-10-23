import React from "react";

export default function Aktivnosti() {
  return (
    <div className="grid grid-cols-8 gap-8 pt-24">
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
      <div className="col-span-5">
        <div className="grid-col-2 gap-2"></div>
      </div>
      <div className="col-span-5">3</div>
      <div className="col-span-3">4</div>
    </div>
  );
}
