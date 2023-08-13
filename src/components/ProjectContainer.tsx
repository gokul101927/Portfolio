import Laptop from "./Laptop";

interface Props {
  src: string;
  title: string;
  description: string;
  github: string;
  live: string;
}

const ProjectContainer:React.FC<Props> = ({src, title, description, live, github}) => {
  return (
    <article className='project'>
      <div className="flex justify-center items-center">
        <div className="flex w-1/2">
          <Laptop src={src}/>
        </div>
        <div>
          <div>
          <h1 className="text-white text-4xl">{title}</h1>
          <h4 className="text-white text-xl">{description}</h4>
          </div>
          <div>
            <a href={live} >Live</a>
            <a href={github} >Github</a>
          </div>
          
        </div>
        
      </div>
    </article>
  );
};

export default ProjectContainer;