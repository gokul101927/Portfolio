import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Layout from './Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';


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