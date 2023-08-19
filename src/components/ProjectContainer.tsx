import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  live: string;
  github: string;
  src: string;
}

const ProjectContainer:React.FC<Props> = ({title, description, live, github, src}) => {
  return (
    
      <div className="group z-40 rounded-md relative object-cover w-[350px] h-[350px] md:w-[450px] md:h-[400px] bg-center bg-no-repeat overflow-hidden p-4 flex items-end transition-transform transform-gpu xl:hover:scale-105">
        <img
          src={src}
          className="absolute object-cover w-full h-full left-0 top-0 transition-blur duration-300 ease-in-out opacity-50 xl:opacity-100 xl:group-hover:blur-md xl:group-hover:opacity-50"
          alt="Project Image"
        />
        <div className="z-50 transition-opacity opacity-100 xl:opacity-0 xl:group-hover:opacity-100 pb-16 space-y-2">
          <h1 className="inline font-bold uppercase text-xl text-white">{title}</h1>
          <p className="text-white">{description}</p>
          <div className="flex gap-4">
            <Link to={github} className="rounded-full bg-blue-700 px-4 py-1 text-white text-xs font-bold">
              Github
            </Link>
            <Link to={live} className="rounded-full bg-blue-700 px-4 py-1 text-white text-xs font-bold">
              Live
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ProjectContainer;