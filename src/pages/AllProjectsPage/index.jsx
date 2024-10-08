import ProjectsGrid from "../../components/ProjectsGrid";
import AllProjectsAbout from "../../components/AllProjectsAbout";

export default function AllProjectsPage({ projects }) {

    return (
        <>
            <div id="projects" className="flex h-screen min-h-[780px]">
                <div className="z-50 flex flex-col justify-between items-center w-[32rem] min-w-[260px] ml-80 pr-10 border-e border-grey xxl:ml-60 lg:hidden">
                    <AllProjectsAbout />
                </div>
                <div className="z-50 flex flex-col justify-center items-center px-10 w-full lg:hidden">
                    <ProjectsGrid projects={projects} />
                </div>
                <div id="projectsMobile" className="hidden z-40 items-center min-h-[700px] py-6 ml-60 mr-10 pr-10 border-e border-grey flex-col justify-around lg:flex md:border-e-0 md:mx-10 md:pr-0 md:my-12 sm:mx-5">
                    <a href="#home" className="flex flex-col w-full text-grey hover:opacity-80 hover:text-red">
                        <p className="w-full text-right text-4xl md:text-2xl"><i className="fa-solid fa-angle-up"></i></p>
                        <h1 className="w-full pb-4 text-right font-semibold text-3xl font-['Outfit'] md:text-xl md:pb-0">About</h1>
                    </a>
                    <div className="">
                        <AllProjectsAbout />
                    </div>
                    <div className="w-full mt-4">
                        <ProjectsGrid projects={projects} />
                    </div>
                    <a href="#project1" className="flex flex-col w-full mt-3 text-grey hover:opacity-80 hover:text-red">
                        <h1 className="w-full text-right font-semibold text-3xl font-['Outfit'] md:text-xl">Project 1</h1>
                        <p className="w-full pt-4 text-right text-4xl md:text-2xl md:pt-0"><i className="fa-solid fa-angle-down"></i></p>
                    </a>
                </div>
            </div>
        </>
    )
}