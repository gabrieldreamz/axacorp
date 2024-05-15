import img1 from "@public/assets/images/Wealth-Management-Interest-Image-1.webp";
import img2 from "@public/assets/images/Wealth-Management-Interest-Image-2.webp";
import img3 from "@public/assets/images/Wealth-Management-Interest-Image-3.webp";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="customShadow absolute z-10 border border-secondary-blue-100 overflow-hidden rounded-2xl top-[13%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[75%] w-[75%] bg-white">
        <Image src={img1} alt="" />
      </div>

      <div className="bgHeroImgPotrait bg-[#F3F8FE] flex flex-col justify-end  gap-3 h-[380px]  lg:h-[500px] max-w-[580px] border border-secondary-blue-100 rounded-3xl overflow-hidden pb-7">
        <div className="bg-[#fff] rounded-2xl overflow-hidden w-[75%] mx-auto z-10">
          <Image src={img2} alt="" />
        </div>
        <div className="bg-[#fff] rounded-2xl overflow-hidden w-[75%] mx-auto z-10">
          <Image src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
