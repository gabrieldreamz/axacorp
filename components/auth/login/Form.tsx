"use client";

import { ToastContainer, toast } from "react-toastify";

import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import Warning from "./Warning";
import { useState } from "react";

// Define your validation schema
export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      <section className="w-[95%] sm:w-[450px] mx-auto md:mx-0 mt-7 lg:mt-20 pb-10 md:pb-0">
        <Warning />

        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full bg-white customShadow border border-gray-200 rounded-md p-5 tracking-normal"
        >
          <h1 className="text-xl font-medium">Sign in to Axacorp</h1>
          <p className="text-regularText">
            To sign in, please type in the email address linked to your Axacorp
            account.
          </p>

          <div className="flex flex-col gap-2">
            <label>Email Address</label>
            <input
              // {...register("email")}
              className="w-full border border-gray-200 py-3 px-5 rounded-md shadow outline-none"
              type="text"
              placeholder="example@gmail.com"
            />
            {/* {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )} */}
          </div>

          <div className="flex flex-col gap-2">
            <label>Password</label>
            <div className="relative">
              <input
                // {...register("password")}
                className="w-full border border-gray-200 py-3 pl-5 pr-10 rounded-md shadow outline-none"
                type={`${showPassword ? "text" : "password"}`}
              />
              {showPassword ? (
                <IoEyeOff
                  className="absolute right-4 top-4 text-lg text-regularText"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-4 text-lg text-regularText"
                  onClick={() => setShowPassword(true)}
                />
              )}
              {/* {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )} */}
            </div>
            {/* {errorMsg?.trim() && (
              <p className="text-sm text-red-500">{errorMsg}</p>
            )} */}
          </div>

          <span className="flex items-center text-sm gap-2">
            <p className="text-regularText">Forgot Password? </p>
            <Link className="text-blue-500 font-medium" href={""}>
              Reset it
            </Link>
          </span>

          <button
            type="submit"
            className="h-11 flex items-center justify-center bg-blue-500 text-white font-medium rounded-md w-40 hover:opacity-80 active:opacity-70 duration-200 transition-all"
          >
            {isLoading ? <span className="loader" /> : "Sign in"}
          </button>

          <p className="text-sm text-regularText mt-3">
            If you don&apos;t have an Axacorp account, You can sign up{" "}
            <Link href="/auth/signup" className="text-blue-500 font-medium">
              here
            </Link>{" "}
          </p>
        </form>
      </section>
    </>
  );
}
