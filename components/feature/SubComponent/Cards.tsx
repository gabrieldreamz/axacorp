import { GiVibratingBall } from "react-icons/gi";

export default function Cards() {
  return (
    <div className=" flex justify-center items-center">
      <div className="border-2 border-white shadow-lg flex gap-[20px] flex-col justify-start p-4 item-center w-[30%]">
        <div className="flex item-center gap-1 flex-col">
          <p className="text-xl font-semibold">Enterprise</p>
          <p className="text-base font-normal text-primary">
            For large teams and corporations.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-4xl font-semibold">$120</span>
          <p className="text-base font-normal mt-[7px]">/per month</p>
        </div>
        <button className="bg-black text-base font-normal text-white p-[10px] rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}
