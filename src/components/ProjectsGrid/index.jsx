export default function ProjectsGrid({ projects }) {

    return (
        <>
            <div className="z-50 grid grid-cols-[repeat(auto-fill,minmax(425px,1fr))] gap-5 overflow-scroll w-full h-[660px] justify-items-center text-grey lg:grid-cols-1 lg:h-[330px] md:h-[270px] sm:h-[220px]">
                {projects.map(project =>
                    <a href={project.link}>
                        <div className="flex justify-center p-4 shadow-xl hover:shadow-inner">
                            <div className="flex flex-col">
                                <h3 className="text-left font-semibold text-xl font-['Outfit'] pb-2">{project.name}</h3>
                                <img src={project.imageOne} alt="Project 1 Image" className="w-96 h-56 md:h-auto" />
                            </div>
                        </div>
                    </a>
                )}
            </div>
        </>
    )
}