import Link from "next/link";

type PropsType = {
  title: string;
  otherStyles?: string;
  linkAddress?: string;
};

export default function CustomBtn({
  title,
  otherStyles,
  linkAddress,
}: PropsType) {
  return (
    <Link href={`${linkAddress}`}>
      <button
        className={`active:opacity-50 duration-300 transition-all text-white rounded-2xl ${otherStyles}`}
      >
        {title}
      </button>
    </Link>
  );
}
