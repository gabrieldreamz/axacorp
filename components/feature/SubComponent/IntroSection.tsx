import { BsStars } from "react-icons/bs";

export default function IntroSection() {
  return (
    <section className="flex justify-center items-center mb-10 md:mb-24">
      <div className="flex items-center flex-col gap-y-3 md:gap-y-6 max-w-[300px] sm:max-w-xl">
        <span className="flex items-center justify-center max-w-fit mx-auto gap-2 py-[5px] px-4 border border-gray-200 text-sm sm:text-lg font-[590] rounded-md">
          Features <BsStars />
        </span>

        <h1 className="text-3xl md:text-5xl font-[590] text-center">
          Finally put your money on autopilot
        </h1>
        <p className="text-center text-primary font-medium">
          Effortlessly grow your wealth by putting your money on autopilot with
          our expert-managed investment solutions
        </p>
      </div>
    </section>
  );
}
