export default function About() {

    return (
        <>
            <div className="mt-12"></div>
            <div className="flex flex-col text-grey">
                <h1 className="w-full text-right font-bold text-4xl font-['Outfit'] md:text-3xl md:text-left sm:text-2xl">Florent Cuer</h1>
                <h2 className="w-full text-right font-bold text-lg font-['Outfit'] md:text-left">Full-Stack Developer</h2>
                <p className="w-full pt-4 text-justify font-['Playwrite_DE_Grund'] md:pt-2 sm:text-sm">I am a full-stack developer based in Bristol that has recently graduated from Bath's iO Academy. I’m making a career change into software development as I enjoy coding and get a lot of satisfaction out of problem solving. I’ve grown up on computers, building computers, and being the go to person in the family for any tech issues. Outside of work I enjoy hiking, camping, and playing board games. Please find details about my projects and my CV below.</p>
            </div>
            <a href="#projects" className="flex flex-col w-full mt-12 text-grey hover:opacity-70 hover:text-blueGrey lg:hidden">
                <h1 className="w-full text-right font-semibold text-3xl font-['Outfit']">Projects</h1>
                <p className="w-full pb-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
            </a>
        </>
    )
}