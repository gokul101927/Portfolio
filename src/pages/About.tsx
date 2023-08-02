import Header from "../components/Header";  
import SkillsCarousel from "../components/SkillsCarousel";

const About = () => {
  return (
    <div id='about' className="snap-mandatory	snap-y snap-always snap-center h-full w-full container mx-auto h-screen overflow-y-scroll">
      {/* <Header /> */}
      <div className="snap-start">
      <div className="container h-full md:h-2/3 mt-0 py-8 md:mt-8 flex flex-col justify-start md:justify-center ">
        <div className="px-8 animate-jumpFromTop">
          <h1 className="text-2xl md:text-5xl font-bold text-primaryRed">About me</h1>
        </div>
        <div className="p-8 space-y-4 animate-fadeIn">
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

        <div className="animate-jumpFromBottom">
          <SkillsCarousel />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default About;
