import Link from "next/link";

type PropsType = {
  title: string;
  otherStyles?: string;
  isLink?: boolean;
  linkAddress?: string;
};

export default function CustomBtn({
  title,
  otherStyles,
  isLink,
  linkAddress,
}: PropsType) {
  return (
    <Link className="" href={`${linkAddress}`}>
      <button
        className={`active:opacity-50 duration-300 transition-all text-white rounded-2xl ${otherStyles}`}
      >
        {title}
      </button>
    </Link>
  );
}
