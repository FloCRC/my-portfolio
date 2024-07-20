import ProjectAbout from "../../components/ProjectAbout";
import ProjectImage from "../../components/ProjectImage";

export default function ProjectPage({ project }) {

    return (
        <>
            <div id={project.link} className="flex h-screen min-h-[720px] lg:min-h-[800px] md:min-h-[700px]">
                <div className="z-50 flex flex-col justify-between items-center w-[32rem] min-w-[260px] ml-80 pr-10 border-e border-grey xl:ml-60 lg:hidden">
                    <ProjectAbout project={project} />
                </div>
                <div className="z-50 flex flex-col justify-center items-center px-10 w-full lg:hidden">
                    <ProjectImage project={project} />
                </div>
                <div id={`${project.link}Mobile}`} className="hidden z-40 items-center min-h-[700px] py-6 ml-60 mr-10 pr-10 border-e border-grey flex-col justify-around lg:flex md:border-e-0 md:mx-10 md:pr-0 md:py-10 md:my-12 sm:mx-5">
                    <a href={project.id === 1 ? `#projects` : `#project${project.id - 1}`} className="flex flex-col w-full text-grey hover:opacity-70 hover:text-blueGrey">
                        <p className="w-full text-right text-4xl md:text-2xl"><i className="fa-solid fa-angle-up"></i></p>
                        <h1 className="w-full pb-4 text-right font-semibold text-3xl font-['Outfit'] md:text-xl md:pb-0">{project.id === 1 ? `Projects` : `Project ${project.id - 1}`}</h1>
                    </a>
                    <div className="">
                        <ProjectAbout project={project} />
                    </div>
                    <div className="w-full mt-4">
                        <ProjectImage project={project} />
                    </div>
                    <a href={project.id === Object.keys(project).length ? `#cv` : `#project${project.id + 1}`} className="flex flex-col w-full mt-3 text-grey hover:opacity-70 hover:text-blueGrey">
                        <h1 className="w-full text-right font-semibold text-3xl font-['Outfit'] md:text-xl">{project.id === Object.keys(project).length ? `CV` : `Project ${project.id + 1}`}</h1>
                        <p className="w-full pt-4 text-right text-4xl md:text-2xl md:pt-0"><i className="fa-solid fa-angle-down"></i></p>
                    </a>
                </div>
            </div>
        </>
    )
}