import SideBarNavigation from "@components/dashboard/navigation/sidebar/SideBarNavigation";
import TabsNavigation from "@components/dashboard/navigation/tabs/TabsNavigation";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <main>
      <TabsNavigation />
      <section>{children}</section>
      <SideBarNavigation />
    </main>
  );
}
