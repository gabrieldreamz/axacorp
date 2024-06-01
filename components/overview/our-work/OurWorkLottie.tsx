"use client";
import React from "react";

import Lottie from "react-lottie";
import aboutSVG from "@public/assets/SVG/aboyLaptop.json";

export default function OurWorkLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutSVG,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={"100%"} />;
}
