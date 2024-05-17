import CustomBtn from "@UI/CustomBtn";

export default function Profile() {
  return (
    <div className="flex items-center gap-6 order-3">
      <CustomBtn
        title="Sign Up"
        otherStyles="bg-blue-500 hover:bg-[#9b8bff] px-5 sm:px-7 font-[590] lg:font-bold py-2 sm:py-[10px] text-white"
      />
    </div>
  );
}
