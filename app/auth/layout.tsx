import MainNavigation from "@components/main-navigation/MainNavigation";
import React from "react";

export default function AuthLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
}
