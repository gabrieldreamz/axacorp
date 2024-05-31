import { GiVibratingBall } from "react-icons/gi";
import { FiCheck } from "react-icons/fi";
import { IPlans } from "../plans";

export default function Cards({
  planType,
  percentageBonus,
  minimumAmount,
  maximumAmount,
  duration,
}: IPlans) {
  let plan = {
    Duration: duration,
    "Minimum Amount": minimumAmount,
    "Maximum Amount": maximumAmount,
    "Referral Bonus": "5%",
  };
  return (
    <div className="border bg-white border-gray-100 gap-5 sm:gap-[30px] p-8 w-full sm:w-[300px] rounded-lg mt-8">
      <div className="">
        <div className="flex justify-start w-[30px] h-[30px] shadow-lg border items-center rounded-full bg-black text-white px-[4px]">
          <GiVibratingBall size={"4rem"} />
        </div>
      </div>
      <div>
        <p className="font-[590] text-xl my-4">{planType}</p>
      </div>
      <div className="my-4">
        <h1 className="font-normal text-primary text-2xl">{percentageBonus}</h1>
      </div>
      <div className="">
        {Object.entries(plan).map(([key, value]) => {
          return (
            <div className="flex items-center gap-[10px] my-4" key={value}>
              <FiCheck className="text-cusGreen" size={"1.2rem"} />
              <p className="font-normal text-primary">
                {key}: <span>{value}</span>
              </p>
            </div>
          );
        })}
        <div className="flex items-center gap-[10px] my-4">
          <FiCheck className="text-cusGreen" size={"1.2rem"} />
          <p className="font-normal text-primary">
            Capital is returned after accrual
          </p>
        </div>

        {/* <div className="flex items-center gap-[10px]">
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
          </div> */}
      </div>
      <button className="bg-blue-500 text-base font-medium text-white p-[10px] rounded-lg w-full mt-4">
        Get Started
      </button>
    </div>
  );
}
