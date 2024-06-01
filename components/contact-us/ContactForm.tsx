"use client"

import React from 'react'

function ContactForm() {
    const inputClassName = "bg-gray-100/70 rounded-md px-2 py-2 text-md w-full focus:border-black outline-none focus:border-[1px]"
  return (
    <form method='post' className='bg-white lg:w-1/2 p-2 lg:p-16 rounded-xl md:max-w-[750px]'>
        <p className='txet-sm text-blue-500 mb-4'>Get in Touch</p>
        <h1 className='text-2xl lg:text-3xl font-medium mb-4'>Let&apos;s Chat, Reach Out to Us</h1>
        <p className='text-primary mb-4 text-sm'>Have questions or feedback? We&apos;re here to help. Send us a message, and we&apos;ll respond within 24hours</p>

        <hr />

        <div className='md:max-w-[500px] lg:max-w-full mx-auto'>
            <div className='md:flex gap-8 my-4 w-full'>
                <div className='md:w-1/2 my-4 lg:my-0'>
                    <label htmlFor="firstName" className='font-medium'>First Name</label><br />
                    <input type="text" name="firstName" className={inputClassName} />
                </div>
                <div className='md:w-1/2 my-4 lg:my-0'>
                    <label htmlFor="lastName" className='font-medium'>Last Name</label><br />
                    <input type="text" name="lastName" className={inputClassName} />
                </div>
            </div>

            <div className='my-4'>
                <label htmlFor="email" className='font-medium'>Email Address</label><br />
                <input type="text" name='email' className={inputClassName} />
            </div>

            <div className='my-4'>
                <label htmlFor="message" className='font-medium'>Message</label><br />
                <textarea name="message" placeholder='Leave us a message' className={`${inputClassName} resize-none w-full h-40`}></textarea>
            </div>

            <button className='text-white bg-blue-500 w-full block rounded-md font-medium py-2'>Send Message</button>
        </div>
    </form>
  )
}

export default ContactForm