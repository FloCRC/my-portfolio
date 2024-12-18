export default function About() {

    return (
        <>
            <div className="mt-12"></div>
            <div className="flex flex-col">
                <h1 className="w-full text-right font-bold text-4xl text-red font-['Outfit'] md:text-3xl md:text-left sm:text-2xl">Florent Cuer</h1>
                <h2 className="w-full text-right font-bold text-lg text-grey font-['Outfit'] md:text-left md:font-semibold">Full-Stack Software Developer</h2>
                <p className="w-full pt-4 text-justify text-grey font-['Playwrite_DE_Grund'] md:pt-2 sm:text-sm">I am a full-stack developer based in Bristol that has recently graduated from Bath's iO Academy. I’ve made a career change into software development as I enjoy coding and get a lot of satisfaction out of problem solving. I find the iterative process of software development hihgly rewarding, being able to constantly improve your work. I’ve grown up on computers, building computers, and being the go to person with family, friends and at work for any tech issues. Outside of work I enjoy hiking, camping, and playing board games. Please find details about my projects and my CV below.</p>
            </div>
            <a href="#projects" className="flex flex-col w-full text-grey hover:opacity-80 hover:text-red lg:hidden">
                <h1 className="w-full text-right font-semibold text-3xl font-['Outfit']">Projects</h1>
                <p className="w-full pb-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
            </a>
        </>
    )
}