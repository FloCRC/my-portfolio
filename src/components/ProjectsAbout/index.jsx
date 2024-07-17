export default function ProjectsAbout() {

    return (
        <>
            <a href="#home" className="flex flex-col w-full mb-12 text-gray-600 text-grey hover:text-blueGrey lg:hidden">
                <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">About</h3>
            </a>
            <div className="flex flex-col text-grey2">
                <h1 className="w-full text-right font-bold text-4xl font-['Outfit']">Projects</h1>
                <h2 className="w-full text-right font-bold text-lg font-['Outfit']"></h2>
                <p className="w-full pt-4 text-justify text-gray-600 font-['Playwrite_DE_Grund'] ">Here you can see a display of all of my projects. Interact with them to get more details.</p>
            </div>
            <a href="#projects" className="flex flex-col w-full mb-12 text-gray-600 text-grey hover:text-blueGrey lg:hidden">
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">Project 1</h3>
                <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
            </a>
        </>
    )
}