import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
    return (

        <section>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2 }}
            >
                <div className='container mx-auto px-4 lg:px-24 pt-4 lg:pt-12 h-fit md:min-h-[61vh]'>
                    <div className='flex flex-col justify-center h-full text-left w-full space-y-4'>
                        <p className="mt-8 mb-4 glitch text-2xl md:text-5xl break-normal font-bold uppercase relative tracking-[10px]">
                            <span aria-hidden="true">Hi there! I'm Gokul.</span>
                            Hi there! I'm Gokul.
                            <span aria-hidden="true">Hi there! I'm Gokul.</span>
                        </p>
                        <div className="space-y-6 ">
                            <p className="text-sm leading-loose">
                                a diligent software tester with a fervent desire to delve into the realm of <Link to='/projects' className="underline underline-offset-4">development</Link>.
                                I'm now poised to transition and contribute uniquely innovative solutions to the tech landscape. 
                            </p>
                            <p className="text-sm leading-loose">
                                <Link to='/contact' className="underline underline-offset-4">Join</Link> me as I embrace challenges, pursue growth, and craft a path towards a dynamic career at the intersection of testing and development.
                            </p>
                        </div>
                        <div>
                            <Link className="pt-4 inline-flex items-center gap-2" to='/about'>
                                <h6 className="text-sm leading-loose">See more about me</h6>
                                <img src="https://ik.imagekit.io/dpkmzcpsk/Portfolio/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}

export default Home