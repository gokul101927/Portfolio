import { Page } from "../types/interface"

interface Props {
    handlePageChange: (page: Page) => void;
}

const Home:React.FC<Props> = ({handlePageChange}) => {

  return (
    <div className="container mx-auto h-full w-full flex flex-col items-center justify-center text-center space-y-2 h-screen max-h-screen overflow-hidden">
        <div className="text-4xl flex gap-2">
          <h1 className="animate-[jumpFromTop_1s_forwards]">Hey there,</h1>
          <h1 className="animate-[jumpFromTop_1.5s_forwards]">I'm</h1>  
          <h1 className="animate-[jumpFromTop_2s_forwards] text-primaryRed">Gokul<span className="text-white">.</span></h1>  
        </div>
        <h4 className="text-3xl animate-jumpFromBottom">An aspiring full stack web developer.</h4>
        <button type="button" onClick={() => handlePageChange(Page.About)} className="animate-fadeIn border border-2 border-primaryRed p-2 font-bold rounded-md transition hover:bg-primaryRed">Get to know me</button>
    </div>
  )
}

export default Home