export default function ProjectAbout({ project, projects }) {

    return (
        <>
            <a href={project.id === 1 ? `#projects` : `#project${project.id - 1}`} className="flex flex-col w-full text-grey hover:opacity-80 hover:text-red lg:hidden">
                <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">{project.id === 1 ? `Projects` : `Project ${project.id - 1}`}</h3>
            </a>
            <div className="flex flex-col">
                <h1 className="w-full text-right font-bold text-4xl text-red font-['Outfit'] md:text-3xl md:text-left sm:text-2xl">{project.name}</h1>
                <h2 className="w-full text-right font-bold text-lg font-['Outfit']"></h2>
                <p className="w-full pt-4 text-justify text-grey font-['Playwrite_DE_Grund'] md:pt-2 sm:text-sm">{project.description}</p>
                <span className="flex justify-end text-4xl text-center mt-2 md:text-3xl md:justify-start">
                    <a href={project.git} className="pr-6 text-grey hover:opacity-80 hover:text-red" target="_blank"><i className="fa-brands fa-github"></i><p className="text-sm pt-1 font-['Outfit'] md:text-xs">GitHub</p></a>
                    {project.api && <a href={project.documentation} className="pr-6 text-grey hover:opacity-80 hover:text-red" target="_blank"><i className="fa-regular fa-file"></i><p className="text-sm pt-1 font-['Outfit'] md:text-xs">Docs</p></a>}
                    {project.api && <a href={project.api} className="pr-6 text-grey hover:opacity-80 hover:text-red" target="_blank"><i className="fa-solid fa-gears"></i><p className="text-sm pt-1 font-['Outfit'] md:text-xs">API</p></a>}
                    <a href={project.live} className="text-grey hover:opacity-80 hover:text-red" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i><p className="text-sm pt-1 font-['Outfit'] md:text-xs">Live</p></a>
                </span>
            </div>
            <a href={project.id === Object.keys(projects).length ? `#cv` : `#project${project.id + 1}`} className="flex flex-col w-full text-grey hover:opacity-80 hover:text-red lg:hidden">
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">{project.id === Object.keys(projects).length ? `CV` : `Project ${project.id + 1}`}</h3>
                <p className="w-full pb-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
            </a>
        </>
    )
}