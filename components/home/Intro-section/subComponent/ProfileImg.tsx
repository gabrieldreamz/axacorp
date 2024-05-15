import Image from "next/image";

export default function ProfileImg({
  img,
  bgColor,
}: {
  img: any;
  bgColor: string;
}) {
  return (
    <div
      style={{ background: bgColor }}
      className="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden flex items-center justify-center border-4 border-white UserElementShadow"
    >
      <Image src={img} alt="Hero Image" />
    </div>
  );
}
