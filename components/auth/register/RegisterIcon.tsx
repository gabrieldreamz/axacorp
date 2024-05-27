"use client"

import React from "react";
import Lottie from "react-lottie";
import registerSvg from "@public/assets/SVG/register.json";

export default function RegisterIcon() {
  const defaultOptions = {
    loop: true,
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
