import CVAbout from "../../components/CVAbout";
import CVImage from "../../components/CVImage";

export default function CVPage({ projects }) {

    return (
        <>
            <div id="cv" className="flex h-screen min-h-[780px]">
                <div className="z-50 flex flex-col justify-between items-center w-[32rem] min-w-[260px] ml-80 pr-10 border-e border-grey xxl:ml-60 lg:hidden">
                    <CVAbout projects={projects} />
                </div>
                <div className="z-50 flex flex-col justify-center items-center px-10 w-full lg:hidden">
                    <CVImage />
                </div>
                <div className="hidden z-40 w-full min-h-[700px] py-6 ml-60 mr-10 pr-10 border-e border-grey flex-col justify-around lg:flex md:items-center md:border-e-0 md:mx-10 md:pr-0 md:pt-10 md:mt-12 sm:mx-5">
                    <a href={`#project${Object.keys(projects).length}`} className="flex flex-col w-full text-grey hover:opacity-80 hover:text-red">
                        <p className="w-full text-right text-4xl md:text-2xl"><i className="fa-solid fa-angle-up"></i></p>
                        <h1 className="w-full pb-4 text-right font-semibold text-3xl font-['Outfit'] md:text-xl md:pb-0">{`Project${Object.keys(projects).length}`}</h1>
                    </a>
                    <div className="w-full">
                        <CVAbout projects={projects} />
                    </div>
                    <div className="w-full mt-4 overflow-auto">
                        <CVImage />
                    </div>
                    <a href="#home" className="flex flex-col w-full mt-3 text-grey hover:opacity-80 hover:text-red">
                        <p className="w-full text-right text-4xl md:text-2xl"><i className="fa-solid fa-angle-up"></i></p>
                        <h1 className="w-full pt-4 text-right font-semibold text-3xl font-['Outfit'] md:text-xl md:pt-0">About</h1>
                    </a>
                </div>
            </div>
        </>
    )
}