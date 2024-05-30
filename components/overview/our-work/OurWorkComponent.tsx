import OurWorkIcon from "./OurWorkIcon";

export default function OurWorkComponent() {
    return (
        <div className="flex flex-col max-w-6xl mx-auto p-8">
            <div className="lg:flex w-full">
                <div className="flex lg:w-[50%] justify-center items-center gap-[15px] flex-col">
                    <h1 className="text-blue-500 text-2xl sm:text-3xl lg:text-5xl font-semibold">Our Work</h1>
                </div>
                <div className="lg:w-[50%] mt-[30px]">
                    <p className="text-base font-normal inline-block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            {/* <div className="w-full mt-8">
                <OurWorkIcon />
            </div> */}
        </div>
    )
}