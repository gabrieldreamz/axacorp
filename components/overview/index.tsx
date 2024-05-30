import React from "react";
import AboutUsComponent from "./about-us/AboutUsComponent";
import WhyComponent from "./why/WhyComponent";
import OurWorkComponent from "./our-work/OurWorkComponent";

export default function OverviewComponent() {
  return (
    <main className="mt-10 md:mt-16">
      <AboutUsComponent />
      <WhyComponent />
      <OurWorkComponent />
    </main>
  )
}
