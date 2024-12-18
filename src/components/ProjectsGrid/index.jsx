export default function ProjectsGrid({ projects }) {

    return (
        <>
            <div className="z-50 grid grid-cols-[repeat(auto-fill,minmax(425px,1fr))] gap-5 overflow-auto w-full h-[660px] justify-items-center text-grey lg:grid-cols-1 lg:h-[330px] md:h-[270px]">
                {projects.map(project =>
                    <div key={project.id}>
                        <div className="flex justify-center p-4 shadow-xl hover:shadow-inner hover:text-red">
                            <div className="flex flex-col">
                                <a href={`#${project.link}`}>
                                    <h3 className="text-left font-semibold text-xl font-['Outfit']">{project.name}</h3>
                                    <p className="text-sm font-semibold text-red text-base pb-1">{project.subHeading}</p>
                                    <img src={project.imageOne} alt="Project 1 Image" className="w-96 h-56 md:h-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}