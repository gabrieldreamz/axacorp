import userImg1 from "@public/assets/images/Wealth-Management-Hero-User-1.webp";
import userImg2 from "@public/assets/images/Wealth-Management-Hero-User-2.webp";
import userImg3 from "@public/assets/images/Wealth-Management-Hero-User-3.webp";
import ProfileImg from "./ProfileImg";
import CustomBtn from "@UI/CustomBtn";

export default function IntroText() {
  return (
    <div className="max-w-4xl mx-auto mt-16 lg:mt-24 px-5 md:px-0">
      <h1 className=" max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto flex flex-wrap justify-center gap-3 text-5xl lg:text-7xl font-[590] md:font-bold text-center">
        Stress{" "}
        <span>
          <ProfileImg img={userImg1} bgColor="#D1DFC3" />
        </span>
        <span>less</span> about{" "}
        <span>
          <ProfileImg img={userImg2} bgColor="#D7C0DD" />
        </span>
        your <span>wealth</span>{" "}
        <span>
          <ProfileImg img={userImg3} bgColor="#B9CFD0" />
        </span>
      </h1>

      <p className="text-center md:text-lg max-w-xl font-medium mx-auto px-10 mt-4 md:mt-8 text-primary">
        With our extensive experience and expertise in the wealth management
        industry, we offer a range of services that are designed to help you
        grow and protect your wealth.
      </p>

      <div className="flex justify-center">
        <CustomBtn
          title="Create Account"
          otherStyles="bg-blue-500 px-7 font-[590] lg:font-bold text-sm lg:text-base py-4 mt-10 hover:bg-[#9b8bff]"
        />
      </div>
    </div>
  );
}
