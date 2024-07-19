import ProjectsGrid from "../../components/ProjectsGrid";
import ProjectsAbout from "../../components/ProjectsAbout";

export default function ProjectsPage({ projects }) {

    return (
        <>
            <div id="projects" className="flex h-screen min-h-[640px]">
                <div className="z-50 flex flex-col justify-between items-center w-[32rem] min-w-[260px] ml-80 pr-10 border-e border-gray-600 xl:ml-60 lg:hidden">
                    <ProjectsAbout />
                </div>
                <div className="z-50 flex flex-col justify-center items-center px-10 w-full lg:hidden">
                    <ProjectsGrid projects={projects} />
                </div>
                <div className="hidden z-50 items-center min-h-[700px] ml-60 mr-10 pr-10 border-e border-gray-600 flex-col justify-around lg:flex">
                    <a href="#home" className="flex flex-col w-full mt-6 text-gray-600 hover:text-blueGrey">
                        <p className="w-full text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                        <h1 className="w-full pb-4 text-right font-semibold text-3xl font-['Outfit']">About</h1>
                    </a>
                    <div className="">
                        <ProjectsAbout />
                    </div>
                    <div className="w-full mt-4">
                        <ProjectsGrid projects={projects} />
                    </div>
                    <a href="#projects" className="flex flex-col w-full mb-6 mt-3 text-gray-600 hover:text-blueGrey">
                        <h1 className="w-full text-right font-semibold text-3xl font-['Outfit']">Project 1</h1>
                        <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
                    </a>
                </div>
            </div>
        </>
    )
}