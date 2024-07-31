export default function AllProjectsAbout() {

    return (
        <>
            <a href="#home" className="flex flex-col w-full mb-12 text-grey hover:opacity-70 hover:text-blueGrey lg:hidden">
                <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">About</h3>
            </a>
            <div className="flex flex-col text-grey">
                <h1 className="w-full text-right font-bold text-4xl font-['Outfit'] md:text-3xl md:text-left sm:text-2xl">Projects</h1>
                <h2 className="w-full text-right font-bold text-lg font-['Outfit']"></h2>
                <p className="w-full pt-4 text-justify font-['Playwrite_DE_Grund'] md:pt-2 sm:text-sm">My frontend projects are built using React and tailwindcss, while my backend projects are built using PHP and MySQL.</p>
            </div>
            <a href="#project1" className="flex flex-col w-full mt-12 text-grey hover:opacity-70 hover:text-blueGrey lg:hidden">
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">Project 1</h3>
                <p className="w-full pb-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
            </a>
        </>
    )
}