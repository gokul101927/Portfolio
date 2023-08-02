import Header from "../components/Header";
import { Page } from "../types/interface";
import SkillsCarousel from "../components/SkillsCarousel";

interface Props {
  handlePageChange: (page: Page) => void;
}

const About: React.FC<Props> = ({ handlePageChange }) => {
  return (
    <div className="h-full w-full container mx-auto h-screen max-h-screen overflow-hidden">
      <Header handlePageChange={handlePageChange} />
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
          <div>
            <button
              type="button"
              onClick={() => handlePageChange(Page.Projects)}
              className="border text-base md:text-lg border-2 border-primaryRed p-2 font-bold rounded-md transition bg-primaryRed 
              
              "
              >
              Wanna see my projects?
            </button>
          </div>
        </div>

        <div className="animate-jumpFromBottom">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
};

export default About;
