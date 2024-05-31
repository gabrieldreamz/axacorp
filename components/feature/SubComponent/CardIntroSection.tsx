export default function CardIntroSection() {
  return (
    <section className="flex flex-col gap-[20px] justify-center items-center">
      <span className="border-2 flex items-center text-xs  rounded-[20px] p-1 px-3 border-blue-50 bg-LoginRGB font-medium text-cusGreen">
        OUR PLANS
      </span>
      <h1 className="text-3xl sm:text-5xl font-medium">Plans for Your Need</h1>
      <p className="xl:w-[50%] sm:w-[70%] w-[100%] flex text-center justify-center items-center text-base font-normal px-4 text-primary">
        Discover tailored investment plans for every goal. From conservative to
        high-risk options, find your perfect fit. Start investing confidently
        today!
      </p>
    </section>
  );
}
