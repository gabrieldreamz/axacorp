import Footer from "@components/footer";
import MainNavigation from "@components/main-navigation/MainNavigation";
import React from "react";

export default function PolicyTemplate({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
}
