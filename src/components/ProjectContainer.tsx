import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  live: string;
  github: string;
  src: string;
  techStack: string[];
  poster: string;
}

const ProjectContainer: React.FC<Props> = ({ title, description, github, src, techStack, poster }) => {
  return (

    <div className="group z-40 rounded-md relative object-cover w-[350px] h-[350px] md:w-[450px] md:h-[400px] bg-center bg-no-repeat overflow-hidden p-4 flex items-end transition-transform transform-gpu xl:hover:scale-105">
      <video autoPlay loop playsInline muted poster={poster} preload="none"
       className="absolute object-cover w-full h-full left-0 top-0 transition-blur duration-300 ease-in-out opacity-50 xl:opacity-70 xl:group-hover:blur-md xl:group-hover:opacity-50">
        <source src={src} type="video/mp4"/>
      </video>

          <div className="z-50 transition-opacity opacity-100 xl:opacity-0 xl:group-hover:opacity-100 lg:pb-16 space-y-2">
            <h1 className="inline font-bold uppercase text-xl text-white">{title}</h1>
            <p className="text-white text-sm">{description}</p>
            <div className="flex flex-wrap gap-1">
            {techStack.map((techStack, index) => {
                            return (
                                <div key={index}>
                                    <div className="rounded-full bg-gray-500 px-2 py-1 text-white text-xs">{techStack}</div>
                                </div>
                            )
                        })}
            </div>
            <div className="flex gap-4">
              <Link to={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 rounded-full bg-blue-700 px-4 py-1 text-white text-xs font-bold">
                Github
                <img src="https://ik.imagekit.io/dpkmzcpsk/Portfolio/new-tab.png" className="h-6 w-6"></img>
              </Link>
            </div>
          </div>
        </div>
        );
};

export default ProjectContainer;