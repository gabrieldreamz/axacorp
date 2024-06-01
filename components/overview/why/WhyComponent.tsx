import AboutTextSection from "../about-us/SubComponent/AboutTextSection";
import { FaCircleInfo } from "react-icons/fa6";

export default function WhyComponent() {
  return (
    <section className="flex flex-col max-w-6xl mx-auto px-5 mt-10 sm:mt-14">
      <div className="lg:flex w-full">
        <div className="flex lg:w-[50%] flex-col text-center lg:text-start">
          <h1 className="text-blue-500 text-base sm:text-xl font-[590] flex items-center gap-x-2 mx-auto lg:mx-0">
            Why us <FaCircleInfo className="text-blue-500 text-sm lg:text-lg" />
          </h1>
          <p className="text-3xl sm:text-5xl font-medium lg:mt-2">
            Axa Corperation
          </p>
        </div>
        <div className="lg:w-[50%] text-center mt-5 lg:mt-0 px-3 sm:px-0">
          <AboutTextSection text="At Axacorp, our expertise sets us apart. Our team of seasoned professionals brings deep market knowledge to guide your investments effectively. We leverage cutting-edge technology to optimize your returns and offer tailored strategies to meet your unique financial goals. With a proven track record of success and a commitment to exceptional customer service, Axacorp provides a smarter, more secure investment experience. Choose Axacorp for reliable, innovative, and personalized investment solutions." />
        </div>
      </div>
    </section>
  );
}
