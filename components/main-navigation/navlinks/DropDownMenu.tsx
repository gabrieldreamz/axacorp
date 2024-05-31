import Link from "next/link";
import { linkData } from "./menuData";

import { motion } from "framer-motion";

interface DropDown {
  setToggleMenu: Function;
}

export default function DropDownMenu({ setToggleMenu }: DropDown) {
  const animationData = (i: any) => ({
    initial: { translateX: -20, opacity: 0.5 },
    animate: { translateX: 0, opacity: 1 },
    transition: {
      duration: 0.4,
      delay: i * 0.03,
      type: "spring",
      bounce: 0.4,
    },
  });

  return (
    <motion.ul
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-sm  px-8 font-medium absolute w-full py-9 border-t-[1px] border-gray-200 flex flex-col gap-6 z-50 customShadow"
    >
      {linkData.map((item, i) => (
        <motion.li
          key={item.text}
          initial={animationData(null).initial}
          animate={animationData(null).animate}
          transition={animationData(i).transition}
          exit={{ translateX: -30, opacity: 0.7 }}
        >
          <Link
            className="tracking-wide text-dark TapHighligh flex items-center gap-2"
            href={item.link}
          >
            {item.icon}
            {item.text}
          </Link>
        </motion.li>
      ))}
      {/* <hr className="w-full" />
      <li className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="20px"
          height="20px"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" />
        </svg>

        <Link href="#" className="hover:opacity-95  tracking-wide">
          About
        </Link>
      </li> */}
    </motion.ul>
  );
}
