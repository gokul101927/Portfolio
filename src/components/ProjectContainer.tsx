import React from 'react';


interface ProjectContainerProps {
  title: string;
  builtWith: string;
  imageSrc: string;
  website?: string;
  github?: string;
  children: React.ReactNode;
}

const ProjectContainer: React.FC<ProjectContainerProps> = () => {
  return (
    <article className='project'>
      
    </article>
  );
};

export default ProjectContainer;