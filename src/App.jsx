import Nav from "./components/Nav"
import About from "./components/About"
import FeatureProject from "./components/FeatureProject"

function App() {

  return (
    <>
      <div className="z-0 fixed h-full w-full bg-[url('src/assets/bgimage.avif')] opacity-50"></div>
      <div className="flex">
        <Nav />
        <About />
        <FeatureProject />
      </div>
    </>
  )
}

export default App