import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Timeline from "../components/Timeline"

const about = [
  {
    "title": "From Pixels to Purpose: My Journey Unveiled",
    "description": "Born on a tranquil day in 2000, I embarked on a journey that would weave a tapestry of education, work, and personal milestones, all interlaced with an ever-growing passion for development.",
  },
  {
    "title": "Education's Canvas, Development's Palette",
    "description": "As I pursued my education in [mention your educational background], I concurrently ventured into the captivating realm of software development. Nurturing an array of skills, showcased elegantly in my skills carousel, including proficiency in [list some skills from your carousel such as programming languages, frameworks, tools], I've forged a path that marries the precision of a software tester with the ingenuity of an aspiring full-stack developer.",
  },
  {
    "title": "Beyond Bits and Bytes: Nurturing Passion, Igniting Potential",
    "description": " Beyond the digital landscape, I find solace in [share a personal interest or hobby], a pursuit that enriches my creative thinking and fuels my determination to excel. ",
  },
  {
    "title": "Code Crafting: Bridging Testing and Development",
    "description": "Today, as I stand at the crossroads of my journey, I carry with me a trove of skills that continue to evolve, propelling me towards an exciting future where I'm poised to make a mark in both testing and development.",
    "skills": true
  }
]

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 2 }}
    >
      <section>
        <div className='container mx-auto px-4 lg:px-24 pt-4 lg:pt-12 h-fit '>
          <div>
            <div className='font-bold text-2xl md:text-5xl py-4'>
              About me.
            </div>
            <div className="flex my-8 ml-2 flex-col gap-12 relative before:content-[' '] before:bg-gray-500 before:inline before:absolute before:left-0 before:w-px before:top-1 before:h-full">
              {about.map(about => {
                return (
                  <Timeline title={about.title} description={about.description} isWork={about.skills}/>)
              })}
            </div>

          </div>
          <Link className="pt-8 flex items-center gap-2 " to='/projects'>
            <h6 className="text-sm leading-loose">Let's continue to the projects</h6>
            <img src="../src/assets/right-arrow.png" className="h-6 w-6 animate-jumpInfinite"></img>
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default About