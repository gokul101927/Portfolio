import { Link } from 'react-router-dom'
import ProjectContainer from '../components/ProjectContainer'
import { motion } from "framer-motion"

const projects = [
    {
        "title": "Comentario",
        "description": "An online software feedback webapp with sentiment analysis.",
        "live": "#",
        "gihub": "https://github.com/",
        "src": "../src/assets/comentario.gif"
    },
    {
        "title": "Audiophile",
        "description": "An online shopping web app for audio enthusisasts.",
        "live": "#",
        "gihub": "https://github.com/",
        "src": "../src/assets/audiophile.gif"
    },
    {
        "title": "Resumes",
        "description": "An online Resume builder.",
        "live": "#",
        "gihub": "https://github.com/",
        "src": "../src/assets/resumes.gif"
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
                                        <ProjectContainer title={project.title} description={project.description} live={project.live} github={project.gihub} src={project.src} />
                                    </motion.div>)
                            })}
                        </div>
                    </div>
                    <Link className="pt-4 flex items-center gap-2" to='/contact'>
                        <h6 className="text-sm leading-loose">Are you interested to contact me?</h6>
                        <img src="../src/assets/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
                    </Link>
                </div>
            </section>
        </motion.div>
    )
}

export default Projects