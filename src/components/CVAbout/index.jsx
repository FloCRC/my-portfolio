export default function CVAbout() {

    return (
        <>
            <a href="#home" className="flex flex-col w-full mb-12 text-grey hover:opacity-70 hover:text-blueGrey lg:hidden">
                <p className="w-full pt-4 text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                <h3 className="w-full text-right font-semibold text-3xl font-['Outfit']">Last Project</h3>
            </a>
            <div className="flex flex-col w-full text-grey">
                <h1 className="w-full text-right font-bold text-4xl font-['Outfit'] md:text-3xl md:text-left sm:text-2xl">CV</h1>
                <h2 className="w-full text-right font-bold text-lg font-['Outfit']"></h2>
                <p className="w-full pt-4 text-right font-['Playwrite_DE_Grund'] md:text-left md:pt-2 sm:text-sm lg:hidden">Click to download <i className="fa-solid fa-angle-right"></i></p>
                <p className="hidden w-full pt-4 text-right font-['Playwrite_DE_Grund'] md:text-left md:pt-2 sm:text-sm lg:block">Click to download <i className="fa-solid fa-angle-down"></i></p>
            </div>
            <a href="#home" className="flex flex-col w-full mt-12 text-grey hover:opacity-70 hover:text-blueGrey lg:hidden">
                <p className="w-full text-right text-4xl"><i className="fa-solid fa-angle-up"></i></p>
                <h3 className="w-full pb-4 text-right font-semibold text-3xl font-['Outfit']">About</h3>
            </a>
        </>
    )
}