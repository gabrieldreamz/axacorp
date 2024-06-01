import AboutUsIcon from "./AboutUsIcon";
import AboutTextSection from "./SubComponent/AboutTextSection";

export default function AboutUsComponent() {
  return (
    <section className="flex flex-col max-w-6xl mx-auto px-5">
      <div className="lg:flex w-full">
        <div className="flex lg:w-[50%] flex-col text-center lg:text-start">
          <h1 className="text-blue-500 text-base sm:text-xl font-medium">
            Who are we
          </h1>
          <p className="text-3xl sm:text-5xl font-[590] lg:mt-2">
            Axa Corperation
          </p>
        </div>
        <div className="lg:w-[50%] text-center mt-5 lg:mt-0 px-5 sm:px-0">
          <AboutTextSection text="Welcome to Axacorp, your trusted partner in stock investments. Our expert team uses market insights and innovative strategies to help you achieve your financial goals." />
        </div>
      </div>
      <div className="w-full mt-8">
        <AboutUsIcon />
      </div>
    </section>
  );
}
