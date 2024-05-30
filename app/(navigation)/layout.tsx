import Footer from "@components/footer";
import MainNavigation from "@components/main-navigation/MainNavigation";
import React from "react";

export default function FeatureLayout({ children }: { children: JSX.Element }) {
  return (
    <main className="bg-gray-50">
      <MainNavigation />
      {children}
      <Footer />
    </main>
  );
}
