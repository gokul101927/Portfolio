import React from 'react';
import ProjectContainer from '../components/ProjectContainer';
import ReactMarkdown from 'react-markdown';

interface Project {
  title: string;
  description: {
    markdown: string;
  };
  techStack: string;
  projectPicture: {
    url: string;
  };
  website?: string;
  github?: string;
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className='projects' id='projects'>
      <div className='projects__wrapper p-4 md:p-6vw mb-[-2rem] transition-bg duration-200'>
        <h2 className='projects__title text-2xl md:text-4xl mb-6 md:mb-0 transition-color duration-200'>
          <span className='mr-2'>02.</span>
          <span>Projects</span>
        </h2>
        {projects
          .filter(({ featured }) => featured)
          .map(
            ({
              title,
              description: { markdown },
              techStack,
              projectPicture: { url },
              website,
              github,
            }) => (
              <ProjectContainer
                title={title}
                imageSrc={url}
                builtWith={techStack}
                website={website}
                github={github}
                key={title}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </ProjectContainer>
            )
          )}
      </div>
    </section>
  );
};

export default Projects;