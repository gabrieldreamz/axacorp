import Logo from "@components/main-navigation/Logo";
import AboutUsIcon from "./AboutUsIcon";
import AboutTextSection from "./SubComponent/AboutTextSection";

export default function AboutUsComponent() {
    return (
        <div className="flex flex-col max-w-6xl mx-auto p-8">
            <div className="lg:flex w-full">
                <div className="flex lg:w-[50%] justify-center items-center gap-[15px] flex-col">
                    <h1 className="text-blue-500 text-2xl sm:text-3xl lg:text-5xl font-semibold">About Us</h1>
                    <Logo />
                </div>
                <div className="lg:w-[50%] mt-[30px]">
                    <AboutTextSection />
                </div>
            </div>
            <div className="w-full mt-8">
                <AboutUsIcon />
            </div>
        </div>
    )
}