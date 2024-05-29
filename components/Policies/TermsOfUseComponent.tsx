import React from "react";
import Display from "./Display";
import { termsOfUse } from "./TermsOfUseInfo";

export default function TermsOfUseComponent() {
  return <Display tabsName="Terms of Use" displayList={termsOfUse} />;
}
