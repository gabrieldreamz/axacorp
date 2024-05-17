import React from "react";
import HeroImage from "./subComponent/HeroImage";
import IntroText from "./subComponent/IntroText";

export default function Testimonials() {
  return (
    <main className="mt-32 lg:mt-60 flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-32 px-5 lg:px-0">
      <IntroText />
      <HeroImage />
    </main>
  );
}
