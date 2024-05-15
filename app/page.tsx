import CashInterest from "@components/home/cash-interest/Index";
import IntroSection from "@components/home/Intro-section/Index";
import PopularitySection from "@components/home/popularity-section/Index";
import WhyUs from "@components/home/why-us/Index";
import MainNavigation from "@components/main-navigation/MainNavigation";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <IntroSection />
      <PopularitySection />
      <WhyUs />
      <CashInterest />
    </>
  );
}
