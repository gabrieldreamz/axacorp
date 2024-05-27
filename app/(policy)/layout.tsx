import MainNavigation from "@components/main-navigation/MainNavigation";
import React from "react";

export default function PolicyLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
}
