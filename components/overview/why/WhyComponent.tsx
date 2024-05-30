import Logo from "@components/main-navigation/Logo";
import AboutTextSection from "../about-us/SubComponent/AboutTextSection";

export default function WhyComponent() {
    return (
        <div className="flex flex-col max-w-6xl mx-auto p-8">
            <div className="lg:flex w-full">
                <div className="flex lg:w-[50%] justify-center items-center gap-[15px] flex-col">
                    <h1 className="text-blue-500 text-2xl sm:text-3xl lg:text-5xl font-semibold">Why</h1>
                    <div className="flex">
                        <Logo />
                        <span className="font-[590] lg:font-bold text-lg  text-black ">?</span>
                    </div>
                </div>
                <div className="lg:w-[50%] mt-[30px]">
                    <AboutTextSection />
                </div>
            </div>
        </div>
    )
}