import React from "react";
import img1 from "@public/assets/images/Wealth-Management-Interest-Image-1.webp";
import heroImg2 from "@public/assets/images/Wealth-Management-Hero-Image-2.webp";
import Image from "next/image";

export default function IntroSectionCard() {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-10 px-10 md:px-5 mb-16 md:mb-24">
      <div className="border border-gray-100 bg-white max-w-xl rounded-2xl  p-5 flex flex-col justify-between">
        <div className="flex items-center justify-center">
          <Image
            src={img1}
            alt="grid background"
            className=""
            width={300}
            height={300}
          />
        </div>

        <div className="mt-7">
          <h1 className="text-lg md:text-2xl font-[590] md:font-medium">
            Innovative Investment Plans
          </h1>
          <p className="text-primary text-sm mt-2">
            Our Innovative Investment Plans use cutting-edge strategies and
            expert insights to maximize your returns
          </p>
        </div>
      </div>

      <div className="border border-gray-100 bg-white max-w-xl rounded-2xl p-5 flex flex-col justify-between">
        <div className="flex items-center justify-center">
          <Image
            src={heroImg2}
            alt="grid background"
            className=""
            width={300}
            height={300}
          />
        </div>

        <div className="mt-7">
          <h1 className="text-lg md:text-2xl font-[590] md:font-medium">
            Auto planning and excution
          </h1>
          <p className="text-primary text-sm mt-2">
            Experience the power of automated planning and execution. Our
            advanced solutions ensure optimal growth and peace of mind
          </p>
        </div>
      </div>
    </section>
  );
}
