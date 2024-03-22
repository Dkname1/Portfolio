
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './component/Footer';
import Project from './Pages/Project';


function App() {
  return (
    <>
     <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skills/>}/>
          <Route path='/portfolio' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/project' element={<Project/>}/>

      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
