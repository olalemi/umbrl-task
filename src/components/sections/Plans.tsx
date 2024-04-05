"use client";

import PlanCard from "../ui/PlanCard";
import Toggle from "../ui/Toggle";

const plansList = [
  {
    name: "starter",
    price: 10,
    included: [0, 1, 2],
    excluded: [4, 5],
  },
  {
    name: "standard",
    price: 49,
    included: [0, 1, 3, 4],
    excluded: [5],
  },
  {
    name: "premium",
    price: 99,
    included: [0, 1, 3, 4, 5],
    excluded: [],
  },
];
export default function Plans() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-center gap-x-2">
        <span>Monthly</span>
        <Toggle />
        <span>Yearly</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {plansList.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
