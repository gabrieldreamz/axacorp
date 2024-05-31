import CustomBtn from "@UI/CustomBtn";
import AboutTextSection from "../about-us/SubComponent/AboutTextSection";
import OurWorkLottie from "./OurWorkLottie";
export default function OurWorkComponent() {
  return (
    <section className="flex flex-col max-w-6xl mx-auto px-5">
      <div className="relative py-8 mt-10 sm:mt-20">
        <div className="relative bg-LoginRGB w-full flex flex-col md:flex-row gap-10 md:gap-0 p-10 md:p-20 md:items-center rounded-3xl max-w-6xl mx-auto">
          <div className="flex flex-col gap-7 max-w-md lg:max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[590] md:font-bold text-[#404556]">
              Have more questions?
            </h1>
            <p className="text-primary">
              Experience a holistic approach to financial planning such as
              retirement planning, Capital Raising, risk management, estate
              planning, and tax optimization.
            </p>
            <CustomBtn
              title="Contact us"
              otherStyles="bg-black px-7 py-4 font-[590] w-40"
              linkAddress="/contact-us"
            />
          </div>

          <div>
            <OurWorkLottie />
          </div>
        </div>
      </div>

      <div className="lg:flex w-full mt-10 sm:mt-20">
        <div className="flex lg:w-[50%] flex-col text-center lg:text-start">
          <p className="text-3xl sm:text-5xl font-medium lg:mt-2">Our Work</p>
        </div>
        <div className="lg:w-[50%] text-center mt-5 lg:mt-0">
          <AboutTextSection
            text="
              At Axacorp, we specialize in stock investments, offering expert guidance and innovative strategies to help you achieve your financial goals."
          />
        </div>
      </div>

      {/*Our works card*/}
    </section>
  );
}
