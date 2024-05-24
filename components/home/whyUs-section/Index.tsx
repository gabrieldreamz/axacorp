import Image from "next/image";

import icon1 from "@public/assets/icons/Wealth-Management-Icon-1.webp";
import icon2 from "@public/assets/icons/Wealth-Management-Icon-2.webp";
import icon3 from "@public/assets/icons/Wealth-Management-Icon-3.webp";
import icon4 from "@public/assets/icons/Wealth-Management-Icon-4.webp";

const cardData = [
  {
    icon: icon1,
    title: "Portfolio Management",
    description:
      " Demonstrative success in generating positive risk-adjusted returns over time",
  },
  {
    icon: icon2,
    title: "Financial Planning",
    description:
      " strong understanding of financial markets, investment products, and economic trend.",
  },
  {
    icon: icon3,
    title: "Growth Assist",
    description:
      " analyze market trends, competitive landscapes, and customer feedback to identify potential areas for business growth.",
  },
  {
    icon: icon4,
    title: "Retirement Planning",
    description:
      " build and manage investment portfolios designed to generate income, preserve capital, and grow wealth over time.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="flex justify-center my-32 md:my-60 px-7"
      id="why-us_section"
    >
      <div className="border border-[#EAECF0] bg-[#f9f9f9] rounded-2xl flex flex-wrap md:flex-nowrap gap-14 sm:gap-7 px-10 lg:px-20 py-24 relative">
        <span className="absolute -top-[1%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-nowrap font-[590] lg:font-bold bg-blue-500 rounded-3xl text-white py-3 px-5 -rotate-[5deg]">
          Why Axa Coorperation?
        </span>

        {cardData.map((card) => (
          <div
            key={card.title}
            className="w-full sm:max-w-60 mx-auto flex flex-col items-center justify-start gap-3"
          >
            <span>
              <Image
                src={card.icon}
                alt={card.title}
                className="w-10 lg:w-auto"
                width={60}
                height={60}
              />
            </span>
            <h1 className="text-base sm:text-lg font-[599] lg:font-bold text-center">
              {card.title}
            </h1>
            <p className="text-sm sm:text-base text-center text-primary font-medium">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
