"use client";

import Button from "./Button";

const features = [
  "Commercial Liscence",
  "100+ HTML UI Elmemnts",
  "01 Domain Sup",
  "Unlimited Domain Sup",
  "6 Month Premium Membership",
  "Lifetime Update",
];

export default function PlanCard({ plan }: { plan: any }) {
  const { name, price, included, excluded } = plan;
  return (
    <div className="bg-white p-6 border rounded shadow-white shadow">
      <h2 className="text-xs uppercase font-bold text-blue-800">{name}</h2>
      <div className="mt-6">
        <small className="text-lg text-gray-600  font-bold">$</small>
        <span className="text-3xl  font-bold">{price}</span>
        <span>/month</span>
        <h6 className="mt-2 text-xs">billed monthly</h6>
      </div>
      <div className="mt-4">
        <ul className="flex flex-col gap-3">
          {included.map((feature: any) => (
            <li key={feature}>
              <span className="text-blue-500">&#x2713;</span>
              {features[feature]}
            </li>
          ))}

          {excluded.map((feature: any) => (
            <li key={feature}>
              <span className="text-gray-400">&#x2717;</span>
              {}
              {features[feature]}
            </li>
          ))}
        </ul>
      </div>

      <Button
        className="mt-6"
        variant={name === "standard" ? "primary" : "secondary"}
      >
        Select Plan
      </Button>
      <h6 className="mt-4 text-xs" >No credit card required</h6>
    </div>
  );
}
