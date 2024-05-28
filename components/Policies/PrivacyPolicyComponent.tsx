import TabsMenu from "@components/Policies/subComponents/TabsMenu";
import React from "react";
import Content from "./subComponents/Content";

import { ListDesc } from "./privacyInfo";
import Link from "next/link";

export default function PrivacyPolicyComponent() {
  return (
    <section className="px-5 xl:px-0 flex flex-col lg:flex-row gap-7 mx-auto max-w-6xl md:mt-16">
      <div>
        <TabsMenu tabsName="Privacy Policy" />
        <div className="mt-7 lg:mt-14">
          {ListDesc.map(({ content, list, heading }, id) => {
            return (
              <Content
                key={id}
                heading={heading}
                content={content}
                list={list}
              />
            );
          })}
        </div>
      </div>

      <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l h-fit lg:p-4 w-full">
        <ul className="ml-4 my-4 sm:my-0 text-sm text-primary underline flex flex-col gap-y-4 justify-evenly gap-x-1 w-full">
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-use">Terms 0f Use</Link>
          </li>
          <li>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
