import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Layout from './Layout';
import Header from './components/Header';
import Projects from './pages/projects';
import Footer from './components/Footer';


function App() {


  return (
    <div className="App min-h-screen flex flex-col justify-between">
      <BrowserRouter >
      <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;