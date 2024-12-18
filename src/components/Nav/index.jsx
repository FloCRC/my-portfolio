import { useEffect, useState } from "react"

export default function Nav({ projects }) {

    const [visible, setVisible] = useState('')
    const [mobileVisible, setMobileVisible] = useState('hidden')

    function toggleDrop() {
        visible === 'hidden' ? setVisible('') : setVisible('hidden')
        mobileVisible === 'hidden' ? setMobileVisible('') : setMobileVisible('hidden')
    }

    return (
        <>
            <div className="z-50 fixed flex flex-col justify-between w-40 h-screen border-e border-grey bg-[url('src/assets/bgimage.avif')] md:hidden">
                <nav className="flex justify-end w-40 h-auto pr-1 border-b border-grey">
                    <div className="m-1.5 pr-1">
                        <button onClick={toggleDrop} className="dropButton"><i className="fa-solid fa-bars text-grey hover:opacity-90 hover:text-red"> </i></button>
                    </div>
                    <div className={`flex flex-col absolute mt-10 px-2 text-right text-nowrap text-grey ${visible}`}>
                        <a href="#home" className={` font-['Playwrite_DE_Grund'] hover:opacity-90 hover:text-red pb-1`}>About</a>
                        <a href="#projects" className={` font-['Playwrite_DE_Grund'] hover:opacity-90 hover:text-red py-1`}>Projects</a>
                        {projects.map(project =>
                            <a key={project.id} href={`#project${project.id}`} className={` font-['Playwrite_DE_Grund'] hover:opacity-90 hover:text-red text-wrap py-1`}>{project.name}</a>
                        )}
                        <a href="#cv" className={` font-['Playwrite_DE_Grund'] hover:opacity-90 hover:text-red py-1`}>CV</a>
                    </div>
                    <button className="home text-grey mr-2 font-['Outfit'] hover:opacity-90 hover:text-red"><a href="#home">Home</a></button>
                </nav>
                <nav className="flex flex-col items-center pt-1 border-t border-grey w-40">
                    <p className="pb-1 text-grey font-['Playwrite_DE_Grund']">Contact</p>
                    <div className="flex justify-center w-40 mb-2 pt-2 text-grey text-xl border-t border-grey">
                        <a href="mailto:florentcuer@gmail.com" target="_blank" className="pr-3 border-e border-grey"><i className="fa-solid fa-envelope hover:opacity-90 hover:text-red"></i></a>
                        <a href="https://www.linkedin.com/in/florent-cuer/" target="_blank" className="px-3 border-e border-grey"><i className="fa-brands fa-linkedin-in hover:opacity-90 hover:text-red"></i></a>
                        <a href="https://github.com/FloCRC" target="_blank" className="pl-3"><i className="fa-brands fa-github hover:opacity-90 hover:text-red"></i></a>
                    </div>
                </nav>
            </div>
            <div className="z-50 hidden fixed justify-between content-start items-start w-full h-auto px-0 border-b border-grey bg-[url('src/assets/bgimage.avif')] md:flex sm:justify-center">
                <nav className="flex justify-start w-screen h-auto pr-1 pt-1">
                    <div className="relative m-1.5 pr-1 md:pl-4 sm:pl-2">
                        <button onClick={toggleDrop} className="dropButton"><i className="fa-solid fa-bars text-grey hover:opacity-90 hover:text-red"> </i></button>
                    </div>
                    <div className={`flex justify-around mt-10 py-2 w-screen border-y absolute text-grey bg-[url('src/assets/bgimage.avif')] ${mobileVisible} sm:justify-center`}>
                        <a href="#home" className="font-['Outfit'] sm:pr-7"><p className={` hover:opacity-90 hover:text-red`}>About</p></a>
                        <a href="#projects" className="font-['Outfit'] sm:border-x sm:px-7"><p className={` hover:opacity-90 hover:text-red`}>Projects</p></a>
                        <a href="#cv" className="font-['Outfit'] sm:pl-7"><p className={` hover:opacity-90 hover:text-red`}>CV</p></a>
                    </div>
                    <button className="home text-grey mr-2 font-['Outfit'] hover:opacity-90 hover:text-red"><a href="#home">Home</a></button>
                </nav>
                <nav className="flex flex-col items-center py-1 w-40 pr-12 sm:pr-6">
                    <div className="pb-1.5 w-40 flex justify-center text-nowrap">
                        <p className="contact text-grey font-['Outfit'] pt-1.5 pr-3">Contact</p>
                        <div className="flex justify-center w-40 pt-1 text-grey border-grey">
                            <a href="mailto:florentcuer@gmail.com" target="_blank" className="px-3 text-xl border-x"><i className="fa-solid fa-envelope hover:opacity-90 hover:text-red"></i></a>
                            <a href="https://www.linkedin.com/in/florent-cuer/" target="_blank" className="px-3 text-xl border-e"><i className="fa-brands fa-linkedin-in hover:opacity-90 hover:text-red"></i></a>
                            <a href="https://github.com/FloCRC" target="_blank" className="pl-3 text-xl pr-8"><i className="fa-brands fa-github hover:opacity-90 hover:text-red"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}