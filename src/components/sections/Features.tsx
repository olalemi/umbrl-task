"use client";

import FeatureCard from "../ui/FeatureCard";

const featuresList = [
  {
    name: "Quick setup process",
    description: "Description of Feature 1",
    icon: "https://example.com/icon1.svg",
  },
  {
    name: "Create custom orders",
    description: "Description of Feature 2",
    icon: "https://example.com/icon2.svg",
  },
  {
    name: "Feature 3",
    description: "Description of Feature 3",
    icon: "https://example.com/icon3.svg",
  },
  {
    name: "Feature 4",
    description: "Description of Feature 4",
    icon: "https://example.com/icon4.svg",
  },
];

export default function Features() {
  return (
    <section className="py-10">
      <h3 className="text-xl md:text-3xl font-bold text-center">
        Check our features
      </h3>

      <h6 className="text-xs md:text-sm p-8  font-bold text-center">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next consultancy website within few minutes.
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresList.map((feature) => (
          <FeatureCard key={feature.name} feature={feature} />
        ))}
      </div>
    </section>
  );
}
