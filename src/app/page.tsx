"use client";

import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";
import Toggle from "@/components/ui/Toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <Hero />
      <Plans />

      <Features />
    </main>
  );
}
