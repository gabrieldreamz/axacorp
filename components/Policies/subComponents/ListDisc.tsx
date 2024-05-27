import React from "react";

export default function ListDisc({
  subTitle,
  desc,
  num,
}: {
  subTitle: string;
  desc: string;
  num: string;
}) {
  return (
    <div>
      <h2>
        {num}.{subTitle}
      </h2>
      <p>{desc}</p>
    </div>
  );
}
