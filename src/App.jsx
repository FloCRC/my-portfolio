import Nav from "./components/Nav"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"

function App() {

  return (
    <>
      <div className="z-0 fixed h-full w-full bg-[url('src/assets/bgimage.avif')] opacity-50"></div>
      <Nav />
      <HomePage />
      <ProjectsPage />
    </>
  )
}

export default App