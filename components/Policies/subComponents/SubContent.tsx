import React, { Fragment } from "react";
import type { Content } from "../privacyInfo";
import List from "./List";

export default function SubContent({subheading, subcontent, sublist}:Content) {
  return (
    <Fragment>
      <h3 className="text-xl font-bold my-2">{subheading}</h3>
      <p className="text-primary">{subcontent}</p>
      {sublist && <List listItem={sublist} />}
    </Fragment>
  );
}
