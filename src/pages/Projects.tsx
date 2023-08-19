import { Link } from 'react-router-dom'
import ProjectContainer from '../components/ProjectContainer'
import { motion } from "framer-motion"

const projects = [
    {
        "title": "Comentario",
        "description": "An online software feedback webapp with sentiment analysis.",
        "live": "#",
        "gihub": "https://github.com/",
        "src": "https://www.codewonders.dev/_next/image?url=https%3A%2F%2Fi.ibb.co%2FtCZFDhL%2FScreen-Recording-2020-06-11-at-1.gif&w=1080&q=75"
    },
    {
        "title": "Audiophile",
        "description": "An online shopping web app for audio enthusisasts.",
        "live": "#",
        "gihub": "https://github.com/",
        "src": "https://www.codewonders.dev/_next/image?url=https%3A%2F%2Fi.ibb.co%2FtCZFDhL%2FScreen-Recording-2020-06-11-at-1.gif&w=1080&q=75"
    },
    {
        "title": "Resumes",
        "description": "An online Resume builder.",
        "live": "#",
        "gihub": "https://github.com/",
        "src": "https://www.codewonders.dev/_next/image?url=https%3A%2F%2Fi.ibb.co%2FtCZFDhL%2FScreen-Recording-2020-06-11-at-1.gif&w=1080&q=75"
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
                            {projects.map((project, index) => {
                                const axis = index%2 === 0 ? -150 : 150;
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, x: axis}}
                                        transition={{ ease: "easeIn", duration: 1 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                    >
                                        <ProjectContainer title={project.title} description={project.description} live={project.live} github={project.gihub} src={project.src} />
                                    </motion.div>)
                            })}
                        </div>
                    </div>

                    <Link className="pt-4 flex items-center gap-2" to='/projects'>
                        <h6 className="text-sm leading-loose">Are you interested to contact me?</h6>
                        <img src="../src/assets/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
                    </Link>

                </div>

            </section>
        </motion.div>
    )
}

export default Projects