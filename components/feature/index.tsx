import React from "react";
import CardIntroSection from "./SubComponent/CardIntroSection";
import Cards from "./SubComponent/Cards";
import plans from "./plans";

export default function FeatureComponent() {
  return (
    <main className="mt-10 md:mt-16">
      <CardIntroSection />
      <div className="flex flex-wrap gap-8 items-center justify-center py-16 max-w-5xl mx-auto">
        {plans.map((plan, id) => {
          return (
            <Cards
              key={id}
              planType={plan.planType}
              duration={plan.duration}
              minimumAmount={plan.minimumAmount}
              maximumAmount={plan.maximumAmount}
              percentageBonus={plan.percentageBonus}
            />
          );
        })}
      </div>
    </main>
  );
}
