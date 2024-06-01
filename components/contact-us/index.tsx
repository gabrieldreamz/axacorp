"use client";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactSvg from "./ContactSvg";
import ContactCard from "./ContactCard";

export default function ContactusComponent() {
  const contactArr = [
    {
      icon: <IoIosMail />,
      contactType: "Email",
      contact: "contact@axacorp.com",
    },
    {
      icon: <MdLocationPin />,
      contactType: "Address",
      contact: "1 Bryant Pk 28th Floor, New York, NY 10036, United states",
    },
  ];
  return (
    <div className="sm:flex max-w-5xl mx-auto gap-6 sm:gap-3 lg:gap-6 mt-10 lg:mt-16">
      <ContactForm />
      <div className="mt-8 sm:my-0 px-5 lg:px-0 flex flex-col justify-center gap-5 lg:gap-0 lg:justify-between">
        <ContactSvg />

        <div className="mx-auto rounded-xl bg-white flex flex-col gap-y-4 w-full p-4 mt-5 sm:mt-0">
          {contactArr.map((contact, id) => {
            return (
              <ContactCard
                icon={contact.icon}
                contact={contact.contact}
                contactType={contact.contactType}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
