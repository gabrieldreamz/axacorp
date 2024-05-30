import React from "react";
import CardIntroSection from "./SubComponent/CardIntroSection";
import Cards from "./SubComponent/Cards";

export default function FeatureComponent() {
  return (
    <main className="mt-10 md:mt-16">
      <CardIntroSection />
      <Cards />
    </main>
  );
}
