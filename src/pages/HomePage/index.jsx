import About from "../../components/About";
import Skills from "../../components/Skills";

export default function HomePage() {

    return (
        <>
            <div id="home" className="flex h-screen min-h-[640px] md:mb-12">
                <div className="z-40 flex flex-col justify-between items-center w-[32rem] min-w-[260px] ml-80 pr-10 border-e border-grey xl:ml-60 lg:hidden">
                    <About />
                </div>
                <div className="z-40 flex flex-col justify-center items-center px-10 w-full lg:hidden">
                    <Skills />
                </div>
                <div className="hidden z-40 items-center min-h-[700px] pb-6 ml-60 mr-10 pr-10 border-e border-grey flex-col justify-around lg:flex md:mt-[47px] md:border-e-0 md:mx-5 md:pr-0 md:pb-10">
                    <div className="">
                        <About />
                    </div>
                    <div className="mt-4">
                        <Skills />
                    </div>
                    <a href="#projectsMobile" className="flex flex-col w-full text-grey hover:opacity-70 hover:text-blueGrey">
                        <h1 className="w-full text-right font-semibold text-3xl font-['Outfit'] md:text-xl">Projects</h1>
                        <p className="w-full pt-4 text-right text-4xl md:text-2xl md:pt-0"><i className="fa-solid fa-angle-down"></i></p>
                    </a>
                </div>
            </div>
        </>
    )
}