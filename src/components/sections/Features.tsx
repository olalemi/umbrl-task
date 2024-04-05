"use client";

import FeatureCard from "../ui/FeatureCard";
import Image from "next/image";

const featuresList = [
  {
    name: "Quick setup process",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon:
    <Image
    src={"/assets/icons/five.svg"}
    height={37}
    width={37}
    alt="Vector icon"
  />
  },
  {
    name: "Create custom orders",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon:  <Image
    src={"/assets/icons/four.svg"}
    height={37}
    width={37}
    alt="Vector icon"
  />,
  },
  {
    name: "Multiple coupons",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon:  <Image
    src={"/assets/icons/six.svg"}
    height={37}
    width={37}
    alt="Vector icon"
  />,
  },
  {
    name: "Feature 4",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon:  <Image
    src={"/assets/icons/three.svg"}
    height={37}
    width={37}
    alt="Vector icon"
  />,
  },
  {
    name: "Organize your campaign",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon:  <Image
    src={"/assets/icons/three.svg"}
    height={37}
    width={37}
    alt="Vector icon"
  />,
  },
  {
    name: "Track progress fast",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon:  <Image
    src={"/assets/icons/two.svg"}
    height={37}
    width={37}
    alt="Vector icon"
  />,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-52 lg:grid-cols-3 gap-6">
        {featuresList.map((feature) => (
          <FeatureCard key={feature.name} feature={feature} />
        ))}
      </div>
    </section>
  );
}
