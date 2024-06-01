"use client"

import React from 'react'
import Lottie from 'react-lottie'
import contactSvg from '@public/assets/SVG/contact.json'


function ContactSvg() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: contactSvg,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  return (
    <div className='bg-white rounded-xl'>
        <Lottie options={defaultOptions} />
    </div>
  )
}

export default ContactSvg