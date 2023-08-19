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
                                An aspiring Full Stack Web Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et purus
                                augue. Donec vel magna rutrum, viverra ipsum in, pharetra neque.
                                Nulla facilisi. Nullam congue egestas hendrerit.
                            </p>
                            <p className="text-sm leading-loose">
                                Today I'm enthralled by web development. Creating new experiences,
                                implementing eye pleasing designs and making them come to life with
                                animation is what I do best.
                            </p>
                        </div>
                        <div>
                            <Link className="pt-4 flex inline items-center gap-2 hover:scale-1.5" to='/about'>
                                <h6 className="text-sm leading-loose">See more about me</h6>
                                <img src="../src/assets/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
                            </Link>
                        </div>

                    </div>

                </div>
            </motion.div>
        </section>

    )
}

export default Home