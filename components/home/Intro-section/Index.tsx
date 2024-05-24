import Image from "next/image";
import IntroImage from "./subComponent/IntroImage";
import IntroText from "./subComponent/IntroText";

export default function IntroSection() {
  return (
    <main className="bgHeroImg overflow-hidden" id="intro_section">
      <IntroText />
      <IntroImage />
    </main>
  );
}
