"use client"
import { FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm";
import ContactSvg from "./ContactSvg";
import ContactCard from "./ContactCard";

export default function ContactusComponent() {
  const contactArr = [
    {
      icon: <FaEnvelope />,
      contactType: "Email",
      contact: "axacorp@gmail.com",
    },
    {
      icon: <FaPhone />,
      contactType: "Phone Number",
      contact: "234567890123",
    },
  ];
  return (
    <div className="lg:flex w-[95%] lg:w-[90%] mx-auto gap-6">
      <ContactForm />
      <div className="my-8">
        <ContactSvg />

        <div className="md:w-full justify-evenly md:flex lg:block mx-auto lg:w-full rounded-md bg-white my-8 px-4 py-6">
          {contactArr.map((contact, id) => {
            return (
              <ContactCard icon={contact.icon} contact={contact.contact} contactType={contact.contactType} key={id}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
