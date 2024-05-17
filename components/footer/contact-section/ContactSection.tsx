import CustomBtn from "@UI/CustomBtn";
import { CiMail, CiLocationOn } from "react-icons/ci";

export default function ContactSection() {
  return (
    <main className="relative text-white px-8 lg:px-0 py-8 mt-24 md:mt-44">
      <div className="relative bgHeroImgPotrait2 bg-[#2E90FA] lg:w-[90%] flex flex-col md:flex-row gap-10 md:gap-0 p-10 md:p-20 md:items-center rounded-3xl max-w-6xl mx-auto">
        <div className="flex flex-col gap-7 max-w-md lg:max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[590] md:font-bold">
            Have more questions?
          </h1>
          <p className="text-white/65">
            Experience a holistic approach to financial planning such as
            retirement planning, Capital Raising, risk management, estate
            planning, and tax optimization.
          </p>
          <CustomBtn
            title="Contact us"
            otherStyles="bg-black px-7 py-4 font-[590] w-40"
          />
        </div>

        <div className="lg:my-auto flex flex-col gap-4 text-sm sm:text-base font-medium">
          <span className="flex items-center gap-2">
            <CiMail className="text-xl flex-shrink-0" />
            info@axacorp.com
          </span>
          <span className="flex items-center gap-2 ">
            <CiLocationOn className="text-xl flex-shrink-0" />1 Bryant Pk 28th
            Floor, New York, NY 10036, United states
          </span>
        </div>
      </div>
    </main>
  );
}
