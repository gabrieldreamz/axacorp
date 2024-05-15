import Image from "next/image";

import ornamentImg from "@public/assets/images/Wealth-Management-Ornament.webp";

export default function IntroText() {
  return (
    <div className="max-w-2xl lg:max-w-5xl relative mx-auto px-5 lg:px-0">
      <Image
        src={ornamentImg}
        alt="Ornament"
        className="absolute -top-[15%] left-3 md:-left-[3%]  lg:-top-[27%] w-7 md:w-auto"
        width={60}
        height={60}
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center relative loudAfterIcon leading-tight px-3">
        We&apos;re here because more people across the economic spectrum deserve
        more secure and rewarding lives.
      </h1>
    </div>
  );
}
