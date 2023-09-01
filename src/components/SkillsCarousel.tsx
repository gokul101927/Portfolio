import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

interface SkillProps {
  name: string;
  icon: string;
}

const skills = [
  { name: 'react', icon: 'devicon-react-original' },
  { name: 'java', icon: 'devicon-java-plain' },
  { name: 'javascript', icon: 'devicon-javascript-plain' },
  { name: 'typescript', icon: 'devicon-typescript-original' },
  { name: 'tailwind', icon: 'devicon-tailwindcss-plain' },
  { name: 'git', icon: 'devicon-git-plain' },
  { name: 'webpack', icon: 'devicon-webpack-plain' },
  { name: 'spring', icon: 'devicon-spring-plain' },
  { name: 'npm', icon: 'devicon-npm-original-wordmark' },
  { name: 'mongodb', icon: 'devicon-mongodb-plain' },
];

const Skill: React.FC<SkillProps> = ({ name, icon }) => {
  return (
    <div className={`${name === 'react' ? 'ml-4' : ''} flex flex-col border border-dotted border-divider items-center flex-shrink-0 relative mr-4 gap-2 py-4 relative w-28`}>
      <i className={`${icon} colored text-5xl text-center`}></i>
      <p className='mt-1 text-xs text-center uppercase'>{name}</p>
    </div>
  );
};

const SkillsCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='relative  pe-10'>
      <div className="overflow-hidden w-full mx-auto" ref={emblaRef}>
        <div className="flex gap-4 -ml-2.5 select-none cursor-grab active:cursor-grabbing">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
      <button onClick={scrollPrev} className='hidden center h-8 w-8 text-current absolute left-0 top-1/2 z-2 bg-transparent text-2xl transform -translate-y-1/2 rounded-full p-0.25 border-none'>
        <svg
          className='w-1/2 h-1/2 text-current'
          viewBox='137.718 -1.001 366.563 644'>
          <path
            fill='currentColor'
            d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z'
          />
        </svg>
      </button>
      <button onClick={scrollNext} className='hidden center flex justify-end items-center mr-0 ml-auto h-8 w-8 text-current absolute right-0 left-auto pr-0 top-1/2 z-2 bg-transparent text-2xl transform -translate-y-1/2 rounded-full p-0.25 border-none'>
        <svg
          className='w-1/2 h-1/2 text-current'
          viewBox='0 0 238.003 238.003'>
          <path
            fill='currentColor'
            d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z'
          />
        </svg>
      </button>
    </div>

  )
}

export default SkillsCarousel