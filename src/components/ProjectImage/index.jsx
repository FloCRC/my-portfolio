export default function ProjectImage({ project }) {

    return (
        <>
            <div href="#home" className="text-grey2">
                <div className="shadow-xl">
                    <img src={project.imageOne}/>
                </div>
            </div>
        </>
    )
}