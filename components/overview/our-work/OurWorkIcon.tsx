"use client"

import React from "react";
import Lottie from "react-lottie";
import workSvg from "@public/assets/SVG/work.json";

export default function OurWorkIcon() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: workSvg,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="w-full h-[300px]">
            <Lottie options={defaultOptions} height={300} width={'100%'} />
        </div>

    );
}