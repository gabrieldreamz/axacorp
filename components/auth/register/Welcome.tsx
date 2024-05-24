import Link from "next/link";
import { PiHandWavingFill } from "react-icons/pi";

export default function Welcome() {
  return (
    <div className="bg-LoginRGB flex items-start justify-start text-[12px] tracking-wide sm:text-sm gap-1 p-3 mb-7 rounded-md border border-gray-200">
      <PiHandWavingFill className="text-blue-500 text-lg" />
      <p>
        Welcome to{" "}
        <Link href="/" className="text-blue-500 font-medium">
          AxaCorp!
        </Link>{" "}
        Start your journey now.
      </p>
    </div>
  );
}
