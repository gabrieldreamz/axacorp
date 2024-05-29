import React from "react";
import Display from "./Display";
import { trustAndSecurity } from "./trustAndSecurity";

function TrustAndSecurityComponent() {
  return(
  <Display tabsName="Trust and Security" displayList={trustAndSecurity} />
  );
}

export default TrustAndSecurityComponent;
