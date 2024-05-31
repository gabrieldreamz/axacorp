import React from "react";
import CardIntroSection from "./SubComponent/CardIntroSection";
import Cards from "./SubComponent/Cards";
import plans from "./plans";
import IntroSection from "./SubComponent/IntroSection";
import IntroSectionCard from "./SubComponent/IntroSectionCard";

export default function FeatureComponent() {
  return (
    <main className="mt-7 md:mt-16">
      <IntroSection />
      <IntroSectionCard />
      <CardIntroSection />
      <div className="flex flex-wrap gap-8 items-center justify-center py-16 max-w-5xl mx-auto px-10 sm:px-0">
        {plans.map((plan, id) => (
          <Cards
            key={id}
            planType={plan.planType}
            duration={plan.duration}
            minimumAmount={plan.minimumAmount}
            maximumAmount={plan.maximumAmount}
            percentageBonus={plan.percentageBonus}
          />
        ))}
      </div>
    </main>
  );
}
