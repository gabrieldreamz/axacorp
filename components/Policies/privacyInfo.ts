export interface ListDescTypes {
  heading?: string;
  content?: string | Content[];
  list?: string[];
}

export interface Content {
  subheading: string;
  subcontent: string;
  sublist?: string[];
}

export const ListDesc: ListDescTypes[] = [
  {
    heading: "Introduction",
    content:
      "Welcome to Axacorp. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information. By using our services, you agree to the terms of this policy.",
  },
  {
    heading: "Information We Collect",
    content: [
      {
        subheading: "Personal Information",
        subcontent:
          "We collect personal information that you provide directly to us",
        sublist: [
          "Name",
          "Contact information(email, phone number, address)",
          "Date of birth",
          "National Identification Number",
          "Financial information(bank details, investment preferences, transaction history)",
        ],
      },
      {
        subheading: "Non-Personal Information",
        subcontent: "We use your personal information to:",
        sublist: [
          "Browser type and version",
          "Operating system",
          "IP address",
          "Cookies and similar tracking technology",
        ],
      },
    ],
  },
  {
    heading: "How We Use Your Information",
    content: [
      {
        subheading: "Personal Information",
        subcontent:
          "We collect personal information that you provide directly to us",
        sublist: [
          "Facilitate and manage your investments and transactions",
          "Provide personalized investment advice and recommendations",
          "Communicate with you regarding your account and our services",
          "Ensure compliance with legal and regulatory requirements",
          "Enhance the security of our services",
        ],
      },
      {
        subheading: "Non-Personal Information",
        subcontent: "Non-personal information is used to:",
        sublist: [
          "Improve our website and services",
          "Analyze trends and user behavior",
          "Customize and enhance user experience",
        ],
      },
    ],
  },
  {
    heading: "Sharing Your Information",
    content:
      "We do not sell or rent your personal information to third parties. We may share your information with:",
    list: [
      "Service providers and partners who assist us in delivering our services",
      "Regulatory and governmental authorities as required by law",
      "Third parties in connection with business transactions such as mergers or acquisitions",
    ],
  },
  {
    heading: "Data Security",
    content:
      "We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and secure data storage.",
  },
  {
    heading: "Your Rights",
    content: "You have the right to:",
    list: [
      "Access and review your personal information",
      "Request corrections to inaccurate or incomplete information",
      "Request the deletion of your personal information, subject to legal and regulatory requirements",
      "Opt-out of certain data processing activities",
    ],
  },
  {
    heading: "Cookies and Tracking Technologies",
    content:
      "Our website uses cookies and similar technologies to enhance your experience. You can control the use of cookies through your browser settings.",
  },
  {
    heading: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on our website and updating the “Last Updated” date.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
    list: [
      "1 Bryant Pk 28th Floor, New York, NY 10036, United states",
      "contact@axacorp.com",
    ],
  },
];
