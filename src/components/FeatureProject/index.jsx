export default function FeatureProject() {

    return (
        <>
            <a href="#project1" className="">
                <h2 className="text-right font-bold text-3xl font-['Outfit']">Projects</h2>
                <div className="flex justify-around py-8 hover:text-blueGrey">
                    <img src="PlaceHoldImage1.jpeg" alt="Project 1 Image" className="w-96 h-56 mr-5 shadow-md shadow-black" />
                    <div className="flex flex-col pl-3">
                        <h3 className="text-left font-semibold text-lg font-['Outfit']">Feature Project 1</h3>
                        <p className="text-justify font-['Playwrite_DE_Grund'] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </a>
            <a href="#project2" className="">
                <h2 className="text-right font-bold text-3xl font-['Outfit']"></h2>
                <div className="flex justify-around py-8 hover:text-blueGrey">
                    <img src="PlaceHoldImage2.jpeg" alt="Project 1 Image" className="w-96 h-56 mr-5 shadow-md shadow-black" />
                    <div className="flex flex-col pl-3">
                        <h3 className="text-left font-semibold text-lg font-['Outfit']">Feature Project 2</h3>
                        <p className="text-justify font-['Playwrite_DE_Grund'] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </a>
        </>
    )
}