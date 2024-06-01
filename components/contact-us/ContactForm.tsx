"use client";

import React from "react";

function ContactForm() {
  const inputClassName =
    "bg-gray-100/70 rounded-md px-2 py-2 mt-1 text-md w-full focus:border-black outline-none focus:border-[1px]";

  return (
    <form className="bg-white p-7 rounded-xl mx-5 lg:mx-0">
      <p className="text-blue-500 mb-4">Get in Touch</p>
      <h1 className="text-2xl lg:text-3xl font-[590] mb-4">
        Let&apos;s Chat, Reach Out to Us
      </h1>
      <p className="text-primary mb-4 text-sm">
        Have questions or feedback? We&apos;re here to help. Send us a message,
        and we&apos;ll respond within 24 hours
      </p>

      <hr />

      <div className="md:max-w-[500px] lg:max-w-full mx-auto">
        <div className="md:flex gap-8 my-4 w-full">
          <div className="md:w-1/2 my-4 lg:my-0">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <br />
            <input type="text" name="firstName" className={inputClassName} />
          </div>
          <div className="md:w-1/2 my-4 lg:my-0">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <br />
            <input type="text" name="lastName" className={inputClassName} />
          </div>
        </div>

        <div className="my-4">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <br />
          <input type="text" name="email" className={inputClassName} />
        </div>

        <div className="my-4">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <br />
          <textarea
            name="message"
            placeholder="Leave us a message"
            className={`${inputClassName} resize-none w-full h-40`}
          ></textarea>
        </div>

        <button className="text-white bg-blue-500 w-full block rounded-md font-medium py-2">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
