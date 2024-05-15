import heroImg1 from "@public/assets/images/Wealth-Management-Hero-Image-1.webp";
import heroImg2 from "@public/assets/images/Wealth-Management-Hero-Image-2.webp";
import heroImg3 from "@public/assets/images/Wealth-Management-Hero-Image-3.webp";

import arrow from "@public/assets/images/Wealth-Management-Arrow.webp";

import Image from "next/image";

export default function IntroImage() {
  return (
    <section className="max-w-5xl max-h-80 lg:h-72  xl:h-96 flex gap-3 md:gap-12 justify-center heroBgImage mx-auto mt-7">
      <div className="flex items-start relative mt-1 lg:mt-8">
        <div className="w-[22vw] md:w-[18vw]  bg-white border-[#EAECF0] border overflow-hidden rounded-lg md:rounded-2xl customShadow">
          <Image src={heroImg3} alt="heroImage" />
        </div>
        <Image
          className="absolute top-[60%] right-0 w-7 sm:w-12 xl:w-20"
          src={arrow}
          alt="arrow"
          width={90}
          height={90}
        />
      </div>

      <div className="flex items-end relative">
        <div className="w-[36vw] md:w-[30vw] bg-white border-[#EAECF0] border overflow-hidden rounded-lg md:rounded-2xl customShadow">
          <Image src={heroImg1} alt="heroImage" />
        </div>
        <Image
          className="absolute lg:bottom-[20%] -right-[20%] lg:-right-[28%] -rotate-[30deg] w-7 sm:w-12 xl:w-20"
          src={arrow}
          alt="arrow"
          width={90}
          height={90}
        />
      </div>

      <div className="flex justify-start items-start">
        <div className="w-[22vw] md:w-[18vw] bg-white border-[#EAECF0] border overflow-hidden rounded-lg md:rounded-2xl customShadow">
          <Image src={heroImg2} alt="heroImage" />
        </div>
      </div>
    </section>
  );
}
