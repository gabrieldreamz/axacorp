import AboutTextSection from "../about-us/SubComponent/AboutTextSection";
import { ImPower } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurWorkComponent() {
  return (
    <section className="flex flex-col max-w-6xl mx-auto px-5 mt-14 sm:mt-20">
      <div className="lg:flex w-full">
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

      <div className="border border-gray-200 p-3 rounded-md flex gap-x-4 items-center mt-10">
        <div className="my-3 border-r border-gray-200 px-7 mr-4">
          <ImPower className="text-2xl text-yellow-500" />
        </div>

        <div className="flex items-center justify-between flex-1">
          <div className="w-full">
            <h1 className="text-lg font-medium">Fast Assistance</h1>
            <p className="text-sm text-primary max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              blanditiis recusandae iure dolorem enim illum voluptates corporis,
              inventore esse pariatur omnis dolores impedit, quisquam vero
              error, similique provident eos repellendus?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
