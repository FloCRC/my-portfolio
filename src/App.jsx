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
        console.log(data)
        setProjects(data.projects);
      })
  }, [])

  return (
    <>
      <div className="z-0 fixed h-full w-full bg-[url('src/assets/bgimage.avif')] opacity-50"></div>
      <Nav projects={projects}/>
      <HomePage />
      <AllProjectsPage projects={projects} />
      {projects.map(project => 
        <ProjectPage project={project} />
      )}
      <CVPage />
    </>
  )
}

export default App