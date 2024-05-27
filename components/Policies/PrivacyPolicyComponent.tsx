import TabsMenu from "@components/Policies/subComponents/TabsMenu";
import React from "react";
import IntroTitle from "./subComponents/IntroTitle";
import ListDisc from "./subComponents/ListDisc";

export default function PrivacyPolicyComponent() {
  const titleDesc =
    "Your use of and access to our service are subject to the following terms; if you do not agree to all of the following, you may not user or access the service in any manner.";

  return (
    <section>
      <TabsMenu tabsName="Privacy Policy" />
      <IntroTitle
        titleHeading="Privacy Policy"
        titleDesc={titleDesc}
        date="Last updated: June 6th, 2023"
      />
      <ListDisc subTitle="Introduction" desc="" num="1" />
    </section>
  );
}
