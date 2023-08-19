import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Layout from './Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {


  return (
    <div className="App min-h-screen flex flex-col justify-between">
      <BrowserRouter >
      <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;