import Link from "next/link";

export default function QuickLinksSection() {
  return (
    <section>
      <div className="max-w-6xl mx-auto p-8 lg:flex flex-col md:flex-row items-center justify-between gap-10 mb-7">
        <Link href="/" className="TapHighlight">
          <p className="font-[590] lg:font-bold text-lg  text-black text-center mb-10 sm:mb-0">
            AxaCorp
          </p>
        </Link>

        <div className="text-center lg:text-left lg:flex justify-evenly lg:w-[60%]">
          <div>
            <h1 className="text-primary mb-4 text-sm font-medium">Product</h1>
            <ul className="font-medium text-sm sm:text-base">
              <li className="mb-2">Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h1 className="text-primary mb-4 text-sm font-medium">
              Credibility
            </h1>
            <ul className="font-medium text-sm sm:text-base">
              <li className="mb-2">FinRa.org</li>
              <li>Tadvisorcheck.com</li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h1 className="text-primary mb-4 text-sm font-medium">Resources</h1>
            <ul className="font-medium text-sm sm:text-base">
              <li className="mb-2">Forbes.com</li>
              <li>Barrons.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <hr />
      </div>

      <div className="w-[90%] p-x-8 mx-auto text-center lg:text-left my-10">
        <h1 className="font-[590] lg:font-bold md:text-xl my-2">
          Stress less about your wealth
        </h1>

        <p className="text-sm font-medium max-w-xl text-primary">
          build and manage investment portfolios designed to generate income,
          preserve capital, and grow wealth
        </p>
      </div>
    </section>
  );
}
