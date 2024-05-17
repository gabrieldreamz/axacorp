import React from "react";
import ContactSection from "./contact-section/ContactSection";
import QuickLinksSection from "./quickLinks-section/QuickLinksSection";

export default function Footer() {
  return (
    <main className="bg-gray-50">
      <ContactSection />
      <QuickLinksSection />
    </main>
  );
}
