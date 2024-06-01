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
    <div className="bg-blue-200 px-4 py-2 flex my-4 rounded-md items-center gap-x-5">
      <div className="text-blue-500 text-5xl">{icon}</div>
      <div>
        <h4 className="text-blue-500 mb-1 font-medium text-xl">{contactType}</h4>
        <p className="text-primary">{contact}</p>
      </div>
    </div>
  );
}

export default ContactCard;
