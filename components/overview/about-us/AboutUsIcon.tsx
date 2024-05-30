"use client"

import React from "react";
import Lottie from "react-lottie";
import aboutSvg from "@public/assets/SVG/about.json";

export default function AboutUSIcon() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutSvg,
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