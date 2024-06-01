import React from "react";

function ContactCard({
  icon,
  contactType,
  contact,
}: {
  icon: JSX.Element;
  contactType: string;
  contact: string;
}) {
  return (
    <div className="bg-gray-100 px-4 py-2 rounded-md flex items-start gap-x-5">
      <div className="text-blue-400 text-2xl">{icon}</div>
      <div>
        <h4 className="text-blue-400 font-[590]">{contactType}</h4>
        <p className="text-primary text-sm font-medium">{contact}</p>
      </div>
    </div>
  );
}

export default ContactCard;
