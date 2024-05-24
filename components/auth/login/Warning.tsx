import Link from "next/link";
import React from "react";
import { HiLockClosed } from "react-icons/hi2";

export default function Warning() {
  return (
    <div className="bg-LoginRGB flex items-start justify-start text-[12px] tracking-wide sm:text-sm gap-1 p-3 mb-7 rounded-md border border-gray-200">
      <HiLockClosed className="text-blue-500 text-lg" />
      <div className="flex flex-wrap gap-1 items-start">
        <p>Please, be sure that you&apos;re on</p>
        <Link className="text-blue-500 font-medium" href="">
          https://axacorp.online
        </Link>
      </div>
    </div>
  );
}
