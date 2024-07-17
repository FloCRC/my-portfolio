import { useEffect, useState } from "react"

export default function ProjectsGrid() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("../../../projects.json").then
            (res => res.json()).then
            (data => {
                setProjects(data.projects);
            })
    }, [])

    console.log(projects);

    return (
        <>
            <div className="z-50 grid grid-cols-2 grid-flow-row gap-5 overflow-scroll h-[660px] justify-items-center text-grey">
                {projects.map(project =>
                    <a href={project.link}>
                        <div className="flex justify-center h-[310px] w-[440px] py-4 shadow-xl hover:shadow-inner">
                            <div className="flex flex-col">
                                <h3 className="text-left font-semibold text-xl font-['Outfit'] pb-2">{project.name}</h3>
                                <img src={project.imageOne} alt="Project 1 Image" className="w-96 h-56" />
                            </div>
                        </div>
                    </a>
                )}
                </div>
        </>
    )
}