"use client";

import Image from "next/image";


export default function FeatureCard({ feature }: { feature: any }) {
  const { name, description,icon } = feature;

  return (
    <div className="bg-white px-2 py-4 flex flex-col md:flex-row items-center gap-4">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xl  font-bold text-gray-800">{name}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
