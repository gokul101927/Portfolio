import { Page } from "../types/interface"

interface Props {
    handlePageChange: (page: Page) => void;
}

const Header:React.FC<Props> = ({handlePageChange}) => {
  return (
    <div className="animate-out bg-transparent flex items-end justify-end sticky top-0 z-50 p-4">
        <div className="flex gap-6">
            <button type="button" onClick={() => handlePageChange(Page.About)} className="transition-transform hover:scale-125 hover:text-primaryRed">About</button>
            <button type="button" onClick={() => handlePageChange(Page.Projects)} className="transition-transform hover:scale-125 hover:text-primaryRed">Projects</button>
            <button type="button" onClick={() => handlePageChange(Page.Contact)} className="transition-transform hover:scale-125 hover:text-primaryRed">Contact</button>
        </div>
    </div>
  )
}

export default Header