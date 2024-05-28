import React from "react";
import IntroSection from "./SubComponent/IntroSection";
import Cards from "./SubComponent/Cards";

export default function FeatureComponent() {
  return (
    <main className="mt-10 md:mt-16">
      <IntroSection />
      <Cards />
    </main>
  );
}
