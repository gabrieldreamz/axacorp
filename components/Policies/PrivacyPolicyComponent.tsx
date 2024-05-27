import TabsMenu from "@components/Policies/subComponents/TabsMenu";
import React from "react";
import Content from "./subComponents/Content";

import { ListDesc } from "./privacyInfo";
import Link from "next/link";

export default function PrivacyPolicyComponent() {
  return (
    <section className="px-4 lg:flex justify-between">
      <div className="lg:w-2/3 lg:px-6">
        <TabsMenu tabsName="Privacy Policy" />
        {ListDesc.map(({ content, list, heading }, id) => {
          return (
            <Content key={id} heading={heading} content={content} list={list} />
          );
        })}
      </div>

      <div className="lg:w-1/3 border-t lg:border-l-2 h-fit lg:p-4 w-full">
        <ul className="lg:ml-4 text-sm sm:text-base lg:block flex justify-evenly gap-x-1 w-full">
          <li className="my-4">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li className="my-4">
            <Link href="/terms-of-use">Terms 0f Use</Link>
          </li>
          <li className="my-4">
            <Link href="/cookie-policy">Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
