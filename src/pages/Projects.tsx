import { Link } from 'react-router-dom'
import ProjectContainer from '../components/ProjectContainer'
import { motion } from "framer-motion"

const projects = [
    {
        "title": "Comentario",
        "description": "an innovative full-stack software feedback web application with sentiment analysis.",
        "live": "#",
        "gihub": "https://github.com/iam-gokull/Comentario",
        "src": "https://ik.imagekit.io/dpkmzcpsk/Portfolio/comentario.mp4",
        "techStack": ["Java", "TypeScript", "Spring Boot", "ReactJs", "MongoDB", "TailwindCSS"],
        "poster": "https://ik.imagekit.io/dpkmzcpsk/Portfolio/Comentario-poster.jpg",
    },
    {
        "title": "Audiophile",
        "description": "a full-stack e-commerce web application tailored for audio enthusiasts.",
        "live": "#",
        "gihub": "https://github.com/iam-gokull/Audiophile",
        "src": "https://ik.imagekit.io/dpkmzcpsk/Portfolio/audiophile.mp4",
        "techStack": ["Java", "JavaScript", "Spring Boot", "ReactJs", "MongoDB"],
        "poster": "https://ik.imagekit.io/dpkmzcpsk/Portfolio/Audiophile-poster.jpg",
    },
    {
        "title": "Resumes",
        "description": "An online Resume builder.",
        "live": "#",
        "gihub": "https://github.com/iam-gokull/Resumes",
        "src": "https://ik.imagekit.io/dpkmzcpsk/Portfolio/resumes.mp4",
        "techStack": ["JavaScript", "ReactJs"],
        "poster": "https://ik.imagekit.io/dpkmzcpsk/Portfolio/Resumes-poster.jpg",
    },
]

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
        >
            <section>
                <div className='container mx-auto px-4 lg:px-24 pt-4 lg:pt-12 h-fit '>
                    <div>
                        <div className='font-bold text-2xl md:text-5xl'>
                            Projects.
                        </div>
                        <div className='flex flex-col xl:flex-row justify-between items-center gap-8 flex-wrap py-8'>
                            {projects.map((project) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100}}
                                        transition={{ ease: "easeIn", duration: 1 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}>
                                        <ProjectContainer title={project.title} description={project.description} live={project.live} github={project.gihub} src={project.src} techStack={project.techStack} poster={project.poster}/>
                                    </motion.div>)
                            })}
                        </div>
                    </div>
                    <Link className="pt-4 inline-flex items-center gap-2 hover:scale-1.5" to='/contact'>
                        <h6 className="text-sm leading-loose">Are you interested to contact me?</h6>
                        <img src="https://ik.imagekit.io/dpkmzcpsk/Portfolio/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
                    </Link>
                </div>
            </section>
        </motion.div>
    )
}

export default Projects