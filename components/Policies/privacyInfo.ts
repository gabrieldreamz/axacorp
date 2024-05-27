interface ListDescTypes {
  heading: string;
  content: string | Content[];
  list?: string[];
}

interface Content {
  subheading: string;
  subcontent: string;
  sublist?: string[];
}

const ListDesc = [
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
        subist: [
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
        ],
      },
      {
        subheading: "Non-Personal Information",
        subcontent:
          "We may also collect non-personal information through your use of our services, including:",
        sublist: [
          "Browser type and version",
          "Operating system",
          "IP address",
          "Cookies and similar tracking technology",
        ],
      },
    ],
  },
];
