import Header from "../components/Header";
import ProjectDisplay from "../components/ProjectDisplay";
import { Page } from "../types/interface";

interface Props {
  handlePageChange: (page: Page) => void;
}

const Projects: React.FC<Props> = ({ handlePageChange }) => {
  return (
    <div className="h-full w-full container mx-auto h-screen max-h-screen overflow-hidden">
      <Header handlePageChange={handlePageChange} />
      <div className="container h-full md:h-2/3 mt-0 py-8 md:mt-8 flex flex-col justify-start md:justify-center ">
        <div className="px-8 animate-jumpFromTop">
          <h1 className="text-2xl md:text-5xl font-bold text-primaryRed">Projects</h1>
        </div>
        <div className="p-8">
          <ProjectDisplay />
        </div>
      </div>

    </div>
  )
}

export default Projects