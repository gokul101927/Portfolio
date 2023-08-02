import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Page } from './types/interface';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  }

  return (
    <div className="h-screen max-h-screen overflow-hidden">
     {currentPage === Page.Home && <Home handlePageChange={handlePageChange}/>}
     {currentPage === Page.About && <About handlePageChange={handlePageChange}/>}
     {currentPage === Page.Projects && <Projects handlePageChange={handlePageChange}/>}
    </div>
  )
}

export default App
