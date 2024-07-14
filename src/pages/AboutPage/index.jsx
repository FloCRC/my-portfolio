import About from "../../components/About";
import Skills from "../../components/Skills";

export default function AboutPage() {

    return (
        <>
            <div className="z-50 flex flex-col justify-between items-center w-[32rem] ml-80 pr-10 h-screen border-e border-gray-600 xl:ml-60 lg:hidden">
                <About />
            </div>
            <div className="z-50 flex flex-col justify-center items-center px-10 w-full h-screen lg:hidden">
                <Skills />
            </div>
            <div className="hidden lg:flex lg:flex-col">
                <div className="z-50 flex flex-col justify-between items-center ml-60 mr-10 pr-10 h-screen border-e border-gray-600">
                    <About />
                </div>
                <div>
                    <Skills />
                </div>
            </div>
        </>
    )
}