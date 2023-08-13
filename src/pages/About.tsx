
import SkillsCarousel from "../components/SkillsCarousel";

const About = () => {
  return (
    <article id='about' className="flex bg-black justify-center items-center animate-fadeIn flex w-full">
        <div className="container  mx-auto h-full md:h-2/3 mt-0 py-8 md:mt-8 flex flex-col justify-start md:justify-center gap-8">
          <div className="px-8">
            <h1 className="text-2xl uppercase pb-2 inline font-bold text-primary">About me</h1>
          </div>
          <div className="px-8 py-2 space-y-4">
            <h6 className="text-base md:text-xl">
              Hi there! I'm Gokul, an aspiring full stack developer.{" "}
              <span className="text-xs md:text-sm italic">
                (Yeah, I know. You guys have seen it already.)
              </span>
            </h6>
            <p className="text-base md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et purus
              augue. Donec vel magna rutrum, viverra ipsum in, pharetra neque.
              Nulla facilisi. Nullam congue egestas hendrerit.
            </p>
            <h6 className="text-base md:text-xl">
              Today I'm enthralled by web development. Creating new experiences,
              implementing eye pleasing designs and making them come to life with
              animation is what I do best.
            </h6>
          </div>
          <div className="pt-4">
            <SkillsCarousel />
          </div>
        </div>
    </article>

  );
};

export default About;
