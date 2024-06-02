import { FaRegBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Profile from "./SubComponents/Profile";

export default function TabsNavigation() {
  return (
    <section className="flex max-w-5xl mt-[10px] mx-auto justify-between items-center">
      <div className="flex gap-[10px] items-center">
        <div className="block md:hidden ml-4">
          <FaBars size={"1.5rem"} className="text-black" />
        </div>
        <p className="hidden md:block">Balance</p>
      </div>
      <div className="flex gap-[30px] items-center">
        <div className="relative h-[20px] mt-[5px] hidden md:block">
          <FaRegBell size={"1.5rem"} className="text-primary" />
          <span className="absolute text-[10px] rounded-full p-1 py-[1px] text-white bg-primary font-semibold -top-3 left-4">0</span>
        </div>
        <Profile />
      </div>
    </section>
  )
}
