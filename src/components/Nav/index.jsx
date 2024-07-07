import { useState } from "react"

export default function Nav() {

    const [visible, setVisible] = useState('hidden')

    function toggleDrop() {
        visible === 'hidden' ? setVisible('') : setVisible('hidden')
    }

    return (
        <section className="z-50 relative flex flex-col justify-between w-[10rem] h-screen border-e border-gray-600">
            <nav className="flex justify-end w-40 h-auto pr-1 border-b border-gray-600">
                <div className="relative m-1.5 pr-1">
                    <button onClick={toggleDrop} className="dropButton"><i className="fa-solid fa-bars text-gray-600 hover:opacity-40"> </i></button>
                    <div className={`flex flex-col absolute mt-3 text-right text-nowrap text-gray-600 ${visible}`}>
                        <a href="#project1" className="font-['Playwrite_DE_Grund'] hover:opacity-40">Project 1</a>
                        <a href="#project2" className="font-['Playwrite_DE_Grund'] hover:opacity-40">Project 2</a>
                        <a href="#skills" className="font-['Playwrite_DE_Grund'] hover:opacity-40">Skills</a>
                        <a href="#CV" className="font-['Playwrite_DE_Grund'] hover:opacity-40">CV</a>
                    </div>
                </div>
                <button className="home text-gray-600 mr-2 font-['Outfit'] hover:opacity-40"><a href="#home">Home</a></button>
            </nav>
            <nav className="flex flex-col items-center py-1 border-t border-gray-600 w-40">
                <a href="#contact" className="pb-1 text-gray-600 font-['Playwrite_DE_Grund'] hover:opacity-40">Contact</a>
                <div className="flex justify-center w-40 mb-2 pt-2 text-gray-600 text-xl border-t border-gray-600">
                    <a href="mailto:florentcuer@gmail.com" target="_blank" className="pr-3 border-e border-gray-600"><i className="fa-solid fa-envelope hover:opacity-40"></i></a>
                    <a href="https://www.linkedin.com/in/florent-cuer/" target="_blank" className="px-3 border-e border-gray-600"><i className="fa-brands fa-linkedin-in hover:opacity-40"></i></a>
                    <a href="https://github.com/FloCRC" target="_blank" className="pl-3"><i className="fa-brands fa-github hover:opacity-40"></i></a>
                </div>
            </nav>
        </section>
    )
}