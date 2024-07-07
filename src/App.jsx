import Nav from "./components/Nav"
import AboutPage from "./pages/AboutPage"

function App() {

  return (
    <>
      <div className="z-0 fixed h-full w-full bg-[url('src/assets/bgimage.avif')] opacity-50"></div>
      <div className="flex">
        <Nav />
        <AboutPage />
      </div>
    </>
  )
}

export default App