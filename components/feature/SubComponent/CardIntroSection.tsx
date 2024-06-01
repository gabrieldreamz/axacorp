export default function CardIntroSection() {
  return (
    <section className="flex flex-col gap-[20px] justify-center items-center max-w-[320px] sm:max-w-xl mx-auto">
      <span className="border-2 flex items-center text-xs  rounded-[20px] p-1 px-3 border-blue-50 bg-LoginRGB font-medium text-cusGreen">
        OUR PLANS
      </span>
      <h1 className="text-3xl sm:text-5xl font-[590]">Plans for Your Need</h1>
      <p className="flex text-center justify-center items-center text-base px-4 text-primary font-medium">
        Discover tailored investment plans for every goal. From Starter to
        shareholders options, find your perfect fit. Start investing confidently
        today!
      </p>
    </section>
  );
}
