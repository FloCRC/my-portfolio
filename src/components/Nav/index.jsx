import { useState } from "react"

export default function Nav() {

    const [visible, setVisible] = useState('hidden')

    function toggleDrop() {
        visible === 'hidden' ? setVisible('') : setVisible('hidden')
    }

    return (
        <section className="fixed flex flex-col justify-between w-40 h-screen border-e border-gray-700 bg-[url('src/assets/bgimage.avif')]">
            <nav className="flex justify-end w-40 h-auto pr-1 border-b border-gray-700">
                <div className="relative m-1.5 pr-1">
                    <button onClick={toggleDrop} className="dropButton"><i className="fa-solid fa-bars text-gray-700 hover:opacity-80 hover:text-blueLight"> </i></button>
                    <div className={`flex flex-col absolute mt-3 text-right text-nowrap text-gray-700 ${visible}`}>
                        <a href="#project1" className="font-['Playwrite_DE_Grund'] hover:opacity-80 hover:text-blueLight">About</a>
                        <a href="#project2" className="font-['Playwrite_DE_Grund'] hover:opacity-80 hover:text-blueLight">Projects</a>
                        <a href="#CV" className="font-['Playwrite_DE_Grund'] hover:opacity-80 hover:text-blueLight">CV</a>
                    </div>
                </div>
                <button className="home text-gray-700 mr-2 font-['Outfit'] hover:opacity-80 hover:text-blueLight"><a href="#home">Home</a></button>
            </nav>
            <nav className="flex flex-col items-center py-1 border-t border-gray-700 w-40">
                <a href="#contact" className="pb-1 text-gray-700 font-['Playwrite_DE_Grund'] hover:opacity-80 hover:text-blueLight">Contact</a>
                <div className="flex justify-center w-40 mb-2 pt-2 text-gray-700 text-xl border-t border-gray-700">
                    <a href="mailto:florentcuer@gmail.com" target="_blank" className="pr-3 border-e border-gray-700"><i className="fa-solid fa-envelope hover:opacity-80 hover:text-blueLight"></i></a>
                    <a href="https://www.linkedin.com/in/florent-cuer/" target="_blank" className="px-3 border-e border-gray-700"><i className="fa-brands fa-linkedin-in hover:opacity-80 hover:text-blueLight"></i></a>
                    <a href="https://github.com/FloCRC" target="_blank" className="pl-3"><i className="fa-brands fa-github hover:opacity-80 hover:text-blueLight"></i></a>
                </div>
            </nav>
        </section>
    )
}