import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Timeline from "../components/Timeline"

const about = [
  {
    "title": "Born",
    "description": "An aspiring Full Stack Web Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et purus augue. Donec vel magna rutrum, viverra ipsum in, pharetra neque. Nulla facilisi. Nullam congue egestas hendrerit.",
  },
  {
    "title": "Education",
    "description": "An aspiring Full Stack Web Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et purus augue. Donec vel magna rutrum, viverra ipsum in, pharetra neque. Nulla facilisi. Nullam congue egestas hendrerit.",
  },
  {
    "title": "About me me?",
    "description": "An aspiring Full Stack Web Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et purus augue. Donec vel magna rutrum, viverra ipsum in, pharetra neque. Nulla facilisi. Nullam congue egestas hendrerit.",
  },
  {
    "title": "Work",
    "description": "An aspiring Full Stack Web Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et purus augue. Donec vel magna rutrum, viverra ipsum in, pharetra neque. Nulla facilisi. Nullam congue egestas hendrerit.",
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
                  <Timeline title={about.title} description={about.description} isWork={about.title === "Work"}/>)
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