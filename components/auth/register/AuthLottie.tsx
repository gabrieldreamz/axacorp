"use client";

import React from "react";
import Lottie from "react-lottie";
import registerSvg from "@public/assets/SVG/SignUp.json";

export default function AuthLottie() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: registerSvg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={500} width={500} />
    </>
  );
}
