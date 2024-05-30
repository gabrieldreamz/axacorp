import { ListDescTypes } from "./privacyInfo";

export const cookiePolicy: ListDescTypes[] &
  { additionaltext?: string }[] = [
  {
    heading: "Introduction",
    content:
      "At AxaCorp, we use cookies and similar tracking technologies to enhance your experience on our website, analyze site usage, and assist in our marketing efforts. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.",
  },
  {
    heading: "What Are Cookies?",
    content:
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.",
  },
  {
    heading: "Types of Cookies We Use",
    list: [
      "Essential Cookies: These cookies are necessary for the website to function properly. They enable basic features such as page navigation and access to secure areas of the website.",
      "Performance Cookies: These cookies collect information about how visitors use our website, such as which pages are visited most often. This information helps us improve the website’s performance.",
      "Functionality Cookies: These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.",
      "Targeting/Advertising Cookies: These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns.",
    ],
  },
  {
    heading: "How We Use Cookies",
    list: [
      "To personalize your experience on our website",
      "To analyze website traffic and usage patterns",
      "To deliver targeted advertising and measure its effectiveness",
      "To enable certain website functionalities",
    ],
  },
  {
    heading: "Third-Party Cookies",
    content:
      "We may also use third-party cookies from service providers such as analytics and advertising partners. These cookies are managed by the third parties and are used for the purposes described above.",
  },
  {
    heading: "Your Choicces Regarding Cookies",
    content:
      "You can manage your cookie preferences through your browser settings. Most browsers allow you to:",
    list: [
      "See what cookies you have and delete them on an individual basis",
      "Block third-party cookies",
      "Block all cookies",
      "Delete all cookies when you close your browser",
    ],
    additionaltext:
      "Please note that blocking or deleting cookies may impact your experience on our website and limit the functionality available to you.",
  },
  {
    heading: "Changes to This Cokkie Policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our website and updating the “Last Updated” date.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions or concerns about this Cookie Policy, please contact us at:",
    list: ["Address", "Email", "Phone number"],
  },
  {
    heading: "Last Updated",
    content: "Date"
  }
];
