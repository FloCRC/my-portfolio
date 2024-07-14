export default function About() {

    return (
        <>
            <div className="mt-12"></div>
            <div className="flex flex-col">
                <h1 className="w-full text-right font-bold text-4xl font-['Outfit']">Florent Cuer</h1>
                <p className="w-full pt-4 text-justify text-gray-600 font-['Playwrite_DE_Grund']"><span className="font-['Outfit']">Nationality: New Zealander<br />Right to work: Pre-setteld Status<br /></span><br />I am a full stack developer based in Bristol that has recently graduated from Bath's iO Academy. I've built projects using React and Tailwind for front-end, and PHP, Laravel and MySQL for back-end.</p>
            </div>
            <a href="#project1" className="flex flex-col w-full mb-12 text-gray-600 hover:text-blueGrey">
                <h1 className="w-full text-right font-semibold text-3xl font-['Outfit']">Projects</h1>
                <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-down"></i></p>
            </a>
        </>
    )
}