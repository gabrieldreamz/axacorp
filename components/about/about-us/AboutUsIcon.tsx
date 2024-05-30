"use client"

import React from "react";
import Lottie from "react-lottie";
import aboutSvg from "@public/assets/SVG/about.json";

export default function RegisterIcon() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutSvg,
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