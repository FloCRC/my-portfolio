export default function ProjectImage({ project }) {

    return (
        <>
            <div href="#home" className="">
                <div className="shadow-xl">
                    <img src={project.imageOne}/>
                </div>
            </div>
        </>
    )
}