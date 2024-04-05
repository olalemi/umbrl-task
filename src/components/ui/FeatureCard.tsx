"use client";

export default function FeatureCard({ feature }: { feature: any }) {
  const { name, description } = feature;

  return (
    <div className="bg-white px-2 py-4 flex flex-col md:flex-row items-center gap-4">
      <div className="flex-shrink-0">
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Your icon SVG or other format goes here --> */}
        </svg>
      </div>
      <div>
        <h4 className="text-xl  font-bold text-gray-800">{name}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
