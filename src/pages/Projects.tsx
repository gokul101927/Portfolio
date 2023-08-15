import { Link } from 'react-router-dom'
import ProjectContainer from '../components/ProjectContainer'

const Projects = () => {
    return (
        <section>
            <div className='container mx-auto px-4 lg:px-24 pt-4 lg:pt-12 h-fit '>
                <div>
                    <div className='font-bold text-2xl md:text-5xl'>
                        Projects.
                    </div>
                    <div className='flex flex-col xl:flex-row justify-between items-center gap-8 flex-wrap py-8'>
                        <div>
                            <ProjectContainer />
                        </div>
                        <div>
                            <ProjectContainer />
                        </div>
                        <div>
                            <ProjectContainer />
                        </div>
                    </div>
                </div>

                <Link className="pt-4 flex items-center gap-2" to='/projects'>
                    <h6 className="font-bold text-sm md:text-base">Are you interested to contact me?</h6>
                    <img src="../src/assets/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
                </Link>

            </div>

        </section>
    )
}

export default Projects