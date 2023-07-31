import './App.css';
import Navweb from './components/navbarweb';
import NavMob from './components/navbarMob';
import Footer from './components/footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Safety from './pages/Safety';
import Security from './pages/Security';
import Productsafety from './pages/Productsafety';
import Productit from './pages/Productit';
import { useState,useEffect } from 'react';




function App() {
  const [navbar, setNavbar] = useState(<Navweb/>)
  const navSelect = () =>{
    if (window.innerWidth<1070){
      setNavbar(<NavMob/>)
    }else{
      setNavbar(<Navweb/>)
    }
  }
  useEffect(() => {
    if (window.innerWidth<1070){
      setNavbar(<NavMob/>)
    }else{
      setNavbar(<Navweb/>)
    }
    window.addEventListener('resize', navSelect);
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
      window.removeEventListener('resize', navSelect);
    };
  }, []);
  return (
    <>
      {navbar}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/safety' element={<Safety/>}/>
        <Route path='/itservice' element={<Security/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/safetyProducts' element={<Productsafety/>}/>
        <Route path='/ITProducts' element={<Productit/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
