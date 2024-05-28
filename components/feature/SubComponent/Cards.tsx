import { GiVibratingBall } from "react-icons/gi";
import { FiCheck } from "react-icons/fi";

export default function Cards() {
  return (
    <div className="flex mt-[20px] w-full justify-center items-center">
      <div className="border-2 border-white shadow-lg flex gap-[30px] flex-col justify-start py-[20px] p-4 item-center w-[90%] sm:w-[50%] xl:w-[30%]">
        <div className="flex justify-center w-[30px] h-[30px] shadow-lg border items-center rounded-full bg-black text-white px-[5px]">
          <GiVibratingBall size={"2rem"} />
        </div>
        <div className="flex item-center gap-[10px] flex-col">
          <p className="text-xl font-semibold">Enterprise</p>
          <p className="text-base font-normal text-primary">
            For large teams and corporations.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-4xl font-semibold">$120</span>
          <p className="text-base font-normal mt-[7px]">/per month</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>Features</p>
          <div className="flex items-center gap-[10px]">
            <FiCheck className="text-cusGreen" size={"1.2rem"} />
            <p className="text-base font-normal text-primary">
              Advanced employee directory
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FiCheck className="text-cusGreen" size={"1.2rem"} />
            <p className="text-base font-normal text-primary">
              Project management
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FiCheck className="text-cusGreen" size={"1.2rem"} />
            <p className="text-base font-normal text-primary">
              Resource scheduling
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FiCheck className="text-cusGreen" size={"1.2rem"} />
            <p className="text-base font-normal text-primary">
              Version control
            </p>
          </div>
        </div>
        <button className="bg-black text-base font-normal text-white p-[10px] rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}
