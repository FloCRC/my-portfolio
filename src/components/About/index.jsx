export default function About() {

    return (
        <>
            <section className="z-50 flex flex-col justify-between items-center w-[32rem] ml-40 pr-10 h-screen border-e border-gray-600">
                <div className="mt-12"></div>
                <div className="flex flex-col">
                    <h1 className="w-full text-right font-bold text-4xl font-['Outfit']">Florent Cuer</h1>
                    <p className="w-full pt-4 text-justify text-gray-600 font-['Playwrite_DE_Grund']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nunc varius, ullamcorper nunc in, viverra lectus. Mauris tincidunt viverra pretium. Sed pretium tellus ut lobortis vehicula. Donec cursus rhoncus orci blandit cursus.</p>
                </div>
                <a href="#project1" className="flex flex-col w-full mb-12 text-gray-600 hover:opacity-40">
                    <h1 className="w-full text-right font-semibold text-3xl font-['Outfit']">Project 1</h1>
                    <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
                </a>
            </section>
        </>
    )
}