import React from "react";
import IntroText from "./subComponent/IntroText";
import Cards from "./subComponent/Cards";

export default function PopularitySection() {
  return (
    <main className="mt-20 sm:mt-32" id="popularity_section">
      <IntroText />
      <Cards />
    </main>
  );
}
