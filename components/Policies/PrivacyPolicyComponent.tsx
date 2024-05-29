import React from "react";

import { ListDesc } from "./privacyInfo";
import Display from "./Display";

export default function PrivacyPolicyComponent() {
  return (
    <Display tabsName="Privacy Policy" displayList={ListDesc} />
  );
}
