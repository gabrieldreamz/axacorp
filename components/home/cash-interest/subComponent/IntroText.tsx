import { FaCheckCircle } from "react-icons/fa";

export default function IntroText() {
  return (
    <div className="md:max-w-[450px] flex flex-col gap-4 sm:gap-7 px-5 md:px-0">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-[590] lg:font-bold">
        More interest on your cash
      </h1>
      <p className="text-primary font-medium text-sm sm:text-base">
        Our team will work closely with you to develop a customized wealth
        management plan that takes into account your unique needs and
        objectives.
      </p>

      <div className="flex flex-col gap-3">
        <span className="flex gap-2 items-center">
          <FaCheckCircle />
          <p className="text-xs sm:text-sm font-medium">
            Accessible investment management services for any device.
          </p>
        </span>
        <span className="flex gap-2 items-center">
          <FaCheckCircle />
          <p className="text-xs sm:text-sm font-medium">
            Customized advice based on financial situation and goals.
          </p>
        </span>
        <span className="flex gap-2 items-center">
          <FaCheckCircle />
          <p className="text-xs sm:text-sm font-medium">
            Offering diversified investment portfolios for individual needs.
          </p>
        </span>
      </div>
    </div>
  );
}
