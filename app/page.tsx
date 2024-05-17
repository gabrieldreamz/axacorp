import CashInterest from "@components/home/cash-interest/Index";
import ContactSection from "@components/footer/contact-section/ContactSection";
import IntroSection from "@components/home/Intro-section/Index";
import PopularitySection from "@components/home/popularity-section/Index";
import Testimonials from "@components/home/testimonial-section";
import WhyUsSection from "@components/home/whyUs-section/Index";
import MainNavigation from "@components/main-navigation/MainNavigation";
import Footer from "@components/footer";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <IntroSection />
      <PopularitySection />
      <WhyUsSection />
      <CashInterest />
      <Testimonials />
      <Footer />
    </>
  );
}
