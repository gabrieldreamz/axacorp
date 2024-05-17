import img1 from "@public/assets/images/Wealth-Management-Founder-Image.webp";
import img2 from "@public/assets/images/Wealth-Management-Founder-Image-2.webp";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative order-1 sm:order-2">
      <div className="bgHeroImgPotrait bg-gray-100 flex items-center justify-center gap-3 h-96 lg:h-[400px] max-w-[580px] lg:w-[550px] border border-secondary-blue-100 rounded-3xl ">
        <div className="bg-[#b89696] rounded-2xl overflow-hidden customShadow mx-auto z-10 -left-[10%] top-[50%] absolute">
          <Image src={img2} alt="" width={200} height={200} />
        </div>
        <div className="relative top-0 ">
          <Image src={img1} alt="" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
