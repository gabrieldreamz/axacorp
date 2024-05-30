"use client";

import React from "react";
import Lottie from "react-lottie";
import aboutSVG from "@public/assets/SVG/aboutSVG.json";

export default function AboutUSIcon() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: aboutSVG,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full md:w-[60%] mx-auto">
      <Lottie options={defaultOptions} width={"100%"} />
    </div>
  );
}
