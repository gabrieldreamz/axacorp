import { RiShareBoxLine } from "react-icons/ri";

export default function IntroText() {
  return (
    <div className="md:max-w-[450px] order-2 sm:order-1 flex flex-col gap-4 sm:gap-8 px-5 md:px-0">
      <span className="flex items-center text-xl md:text-2xl text-primary font-medium">
        <RiShareBoxLine />
        Scale
      </span>
      <h1 className="text-xl sm:text-4xl lg:text-3xl font-[590] lg:font-bold">
        AxaCorp has been an amazing investment partner for me. Their online
        investment management services are easy to use and accessible.
      </h1>
      <p className="font-medium text-sm sm:text-base">Gabriel Witshane</p>
    </div>
  );
}
