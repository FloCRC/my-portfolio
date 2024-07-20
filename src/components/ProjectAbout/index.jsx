export default function ProjectAbout({ project }) {

    return (
        <>
            <a href={project.id === 1 ? `#projects` : `#project${project.id - 1}`} className="flex flex-col w-full mb-12 text-gray-600 text-grey hover:opacity-70 hover:text-blueGrey lg:hidden">
                <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">{project.id === 1 ? `Projects` : `Project ${project.id - 1}`}</h3>
            </a>
            <div className="flex flex-col text-grey2">
                <h1 className="w-full text-right font-bold text-4xl font-['Outfit'] md:text-3xl md:text-left sm:text-2xl">{project.name}</h1>
                <h2 className="w-full text-right font-bold text-lg font-['Outfit']"></h2>
                <p className="w-full pt-4 text-justify text-gray-600 font-['Playwrite_DE_Grund'] md:pt-2 sm:text-sm">{project.description}</p>
            </div>
            <a href={project.id === Object.keys(project).length ? `#cv` : `#project${project.id + 1}`} className="flex flex-col w-full mt-12 text-gray-600 text-grey hover:opacity-70 hover:text-blueGrey lg:hidden">
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">{project.id === Object.keys(project).length ? `CV` : `Project ${project.id + 1}`}</h3>
                <p className="w-full pb-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
            </a>
        </>
    )
}