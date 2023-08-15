import { Link } from "react-router-dom"
// import SkillsCarousel from "../components/SkillsCarousel"

const Home = () => {
    return (
        <section >
            <div className='container mx-auto px-4 lg:px-24 pt-4 lg:pt-12 h-fit md:min-h-[61vh]'>
                <div className='flex flex-col justify-center text-left w-full space-y-4'>
                    <p className="mt-8 mb-4 glitch text-2xl md:text-5xl break-normal font-bold uppercase relative tracking-[10px]">
                        <span aria-hidden="true">Hi there! I'm Gokul.</span>
                        Hi there! I'm Gokul.
                        <span aria-hidden="true">Hi there! I'm Gokul.</span>
                    </p>
                    <div className="space-y-6">
                        <p className="text-sm md:text-base">
                            An aspiring Full Stack Web Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et purus
                            augue. Donec vel magna rutrum, viverra ipsum in, pharetra neque.
                            Nulla facilisi. Nullam congue egestas hendrerit.
                        </p>
                        <p className="text-sm md:text-base">
                            Today I'm enthralled by web development. Creating new experiences,
                            implementing eye pleasing designs and making them come to life with
                            animation is what I do best.
                        </p>
                    </div>

                    {/* <div className="pt-8">
                        <SkillsCarousel />
                    </div>  */}
                    <Link className="pt-4 flex items-center gap-2" to='/projects'>
                        <h6 className="font-bold text-sm md:text-base">See more about me</h6>
                        <img src="../src/assets/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
                    </Link>
                </div>
                
            </div>
            
        </section>
    )
}

export default Home