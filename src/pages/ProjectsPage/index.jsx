import ProjectsGrid from "../../components/ProjectsGrid";
import ProjectsAbout from "../../components/ProjectsAbout";

export default function ProjectsPage({ projects }) {

    return (
        <>
            <div id="projects" className="flex h-screen min-h-[640px]">
                <div className="z-50 flex flex-col justify-between items-center w-[32rem] ml-80 pr-10 h-screen border-e border-gray-600 xl:ml-60 lg:hidden">
                    <ProjectsAbout />
                </div>
                <div className="z-50 flex flex-col justify-center items-center px-10 w-full h-screen lg:hidden">
                    <ProjectsGrid projects={projects} />
                </div>
                <div className="hidden z-50 items-center h-screen ml-60 mr-10 pr-10 border-e border-gray-600 flex-col justify-around lg:flex">
                    <a href="#home" className="hidden flex-col w-full mb-12 text-gray-600 hover:text-blueGrey lg:flex">
                        <h1 className="w-full text-right font-semibold text-3xl font-['Outfit']">About</h1>
                        <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                    </a>
                    <div className="">
                        <ProjectsAbout />
                    </div>
                    <div className="w-full">
                        <ProjectsGrid projects={projects} />
                    </div>
                    <a href="#projects" className="hidden flex-col w-full mb-12 text-gray-600 hover:text-blueGrey lg:flex">
                        <h1 className="w-full text-right font-semibold text-3xl font-['Outfit']">Project 1</h1>
                        <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
                    </a>
                </div>
            </div>
        </>
    )
}