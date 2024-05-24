"use client";

import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import Welcome from "./Welcome";
import { useEffect, useState } from "react";
import TermsAndCondition from "./Terms&Condition";

export default function Form() {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <section className="w-[95%] sm:w-[450px] mx-auto md:mx-0 mt-16 lg:mt-20 pb-10 md:pb-0">
        <Welcome />

        <form className="flex flex-col gap-5 w-full bg-white customShadow border border-gray-200 rounded-md p-5 tracking-normal">
          <h1 className="text-xl font-medium">Sign up to Axacorp</h1>
          <p className="text-regularText">
            Please provide the information you want to use for your Axacorp
            account
          </p>

          <div className="flex flex-col gap-2">
            <label>Full Name</label>
            <input
              className="w-full border border-gray-200 py-3 px-5 rounded-md shadow outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Email Address</label>
            <input
              className="w-full border border-gray-200 py-3 px-5 rounded-md shadow outline-none"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Username</label>
            <input
              // {...register("username")}
              className="w-full border border-gray-200 py-3 px-5 rounded-md shadow outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Password</label>
            <div className="relative">
              <input
                className="w-full border border-gray-200 py-3 pl-5 pr-10 rounded-md shadow outline-none"
                type={`${isPasswordVisible ? "text" : "password"}`}
              />

              {isPasswordVisible ? (
                <IoEyeOff
                  className="absolute right-4 top-4 text-lg text-regularText"
                  onClick={() => setisPasswordVisible(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-4 text-lg text-regularText"
                  onClick={() => setisPasswordVisible(true)}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>Referral</label>
            <input
              className="w-full border border-gray-200 py-3 px-5 rounded-md shadow outline-none"
              type="text"
              placeholder="Referral username"
            />
          </div>

          <TermsAndCondition />

          <button
            type="submit"
            className="h-11 flex items-center justify-center bg-blue-500 text-white font-medium rounded-md w-40 hover:opacity-80 active:opacity-70 duration-200 transition-all"
          >
            {isLoading ? <span className="loader" /> : "Sign up"}
          </button>

          <p className="text-sm text-regularText mt-3">
            If you already have a Axacorp account, You can sign in with your
            details{" "}
            <Link href="/auth/login" className="text-blue-500 font-medium">
              here
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}
