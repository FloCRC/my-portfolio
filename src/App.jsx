import { useEffect, useState } from "react";
import Nav from "./components/Nav"
import HomePage from "./pages/HomePage"
import AllProjectsPage from "./pages/AllProjectsPage"
import ProjectPage from "./pages/ProjectPage";
import CVPage from "./pages/CVPage";

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("../projects.json").then
            (res => res.json()).then
            (data => {
                setProjects(data.projects);
            })
    }, [])

    return (
        <>
            <div className="z-0 fixed h-full w-full bg-[url('src/assets/bgimage.avif')] opacity-50"></div>
            <Nav projects={projects} />
            <HomePage />
            <AllProjectsPage projects={projects} />
            {projects.map(project =>
                <ProjectPage key={project.id} project={project} projects={projects} />
            )}
            <CVPage projects={projects} />
        </>
    )
}

export default App