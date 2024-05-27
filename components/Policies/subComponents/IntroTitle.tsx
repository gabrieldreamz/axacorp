import React from "react";

type IntroTitle = {
  titleHeading: string;
  titleDesc: string;
  date: string;
};

export default function IntroTitle({
  titleHeading,
  titleDesc,
  date,
}: IntroTitle) {
  return (
    <div>
      <h1>{titleHeading}</h1>
      <p>{titleDesc}</p>
      <span>{date}</span>
    </div>
  );
}
