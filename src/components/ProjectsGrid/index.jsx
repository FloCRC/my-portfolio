import { useEffect, useState } from "react"

export default function ProjectsGrid() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("../../projects.json").then
            (res => res.json()).then
            (data => {
                setProjects(data.projects);
            })
    }, [])

    console.log(projects);

    return (
        <>
            <div className="z-50">
                <a href="#home" className="">
                    <div className="flex justify-around py-8 hover:text-blueGrey">
                        <img src="PlaceHoldImage1.jpeg" alt="Project 1 Image" className="w-96 h-56 mr-5 shadow-md shadow-black" />
                        <div className="flex flex-col pl-3">
                            <h3 className="text-left font-semibold text-lg font-['Outfit']">Feature Project 1</h3>
                            <p className="text-justify font-['Playwrite_DE_Grund'] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </a>
                <a Link href="#home" className="">
                    <h2 className="text-right font-bold text-3xl font-['Outfit']"></h2>
                    <div className="flex justify-around py-8 hover:text-blueGrey">
                        <img src="PlaceHoldImage2.jpeg" alt="Project 1 Image" className="w-96 h-56 mr-5 shadow-md shadow-black" />
                        <div className="flex flex-col pl-3">
                            <h3 className="text-left font-semibold text-lg font-['Outfit']">Feature Project 2</h3>
                            <p className="text-justify font-['Playwrite_DE_Grund'] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}