import React from "react";
import { ListDescTypes } from "../privacyInfo"
import SubContent from "./SubContent";
import List from "./List";

export default function Content({heading, content, list}: ListDescTypes) {
  return (
    <div>
      <h1 className="text-2xl font-extrabold my-4">{heading}</h1>
      {typeof content === "string" ? (
        <div className="text-primary">{content}</div>
      ) : (
        <div>
          {content.map((con, id) => {
            return (
              <SubContent
                key={id}
                subheading={con.subheading}
                subcontent={con.subcontent}
                sublist={con.sublist}
              />
            );
          })}
        </div>
      )}
      {list && <List listItem={list} />}
    </div>
  );
}
