import IntroText from "./subComponent/IntroText";
import HeroImage from "./subComponent/HeroImage";

export default function CashInterest() {
  return (
    <main
      className="mt-44 md:mt-0 flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-32 px-5 lg:px-0"
      id="cash-interest_section"
    >
      <HeroImage />
      <IntroText />
    </main>
  );
}
