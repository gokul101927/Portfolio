import ProjectContainer from '../components/ProjectContainer';

const Projects = () => {
  return (
    <section id='about' className="flex bg-black justify-center items-center animate-fadeIn flex w-full">
    <div className="container mx-auto h-full md:h-2/3 mt-0 py-8 md:mt-8 flex flex-col justify-start md:justify-center gap-8">
      <ProjectContainer/>
    </div>
     
    </section>
  );
};

export default Projects;