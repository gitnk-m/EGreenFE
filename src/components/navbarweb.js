import React from 'react';
import './navbarweb.css';
import {Link, useLocation} from 'react-router-dom';
import Contact from '../pages/Contact';
import { useEffect, useState } from 'react';

const Navweb = () => {
    const active = "menuactive"
    let other;
    let homeclass = other
    let serviceclass = other
    let productclass = other
    let aboutclass = other
    let contactclass = other
    let safetyclass = other
    let secirutyclass = other
    let safetyProdclass = other
    let secirutyProdclass = other

    const [scrollPosition, setScrollPosition] = useState(0);
    const [pageScroll, setpageScroll] = useState(false);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    
        if (position >= 100) {
            setpageScroll(true) 
        } else {
            setpageScroll(false) 
        }
      };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [menu_class, setMenuClass] = useState("dropmenu hidden")
    const [menu_class_product, setMenuClassProduct] = useState("dropmenuProd hidden")

    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isMenuProd, setIsMenuProd] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setMenuClass("dropmenu visible")
        }
        else {
            setMenuClass("dropmenu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const updateMenuProd = () => {
        if(!isMenuProd) {
            setMenuClassProduct("dropmenuProd visible")
        }
        else {
            setMenuClassProduct("hidden dropmenuProd")
        }
        setIsMenuProd(!isMenuProd)
    }
        
    const location = useLocation();
    // console.log(location.pathname)
    switch(location.pathname){
        case '/':
            homeclass= active;
            break;
        case '/products':
            productclass= active;
            break;
        case '/service':
            serviceclass= active;
            break;
        case '/about':
            aboutclass= active;
            break;
        case '/contact':
            contactclass= active;
            break;
        case '/safety':
            serviceclass= active;
            break;
        case '/security':
            serviceclass= active;
            break;
        case '/safetyProducts':
            productclass= active;
            break;
        case '/ITProducts':
            productclass= active;
            break;
    }

    const submenuOn =()=>{
        setMenuClass("dropmenu visible")
    }
    const submenuOff =()=>{
        setMenuClass("dropmenu hidden")
    }

    const submenuProdOn =()=>{
        setMenuClassProduct("dropmenuProd visible")
    }
    const submenuProdOff =()=>{
        setMenuClassProduct("dropmenuProd hidden")
    }

    return(
        <>
            <nav className={`navbarweb ${pageScroll ? 'navColor' : ''}`}>
                <Link to='/' className="Logo" ><img src={'../Images/logo-04.svg'} alt='Evergreen Logo'/></Link>
                <div className="menuItems">
                    <Link to='/' className={`MenuItem ${homeclass}`} id='homemenu'>Home</Link>
                    <Link onMouseEnter={submenuProdOn} onMouseLeave={submenuProdOff} className={`MenuItem ${productclass} service` } id='productmenu'>Products</Link>
                    <Link onMouseEnter={submenuOn} onMouseLeave={submenuOff} className={`MenuItem ${serviceclass} service` } id='servicemenu'>Services</Link>
                    <Link to='/about' className={`MenuItem ${aboutclass}`} id='aboutmenu'>About Us</Link>
                    <Link to='/contact' className={`MenuItem ${contactclass}`} id='contactmenu'>Contact Us</Link>
                </div>
                <div className='brochure'>
                <a href={'../Assets/EverGreen-Catalogue-1.pdf'} download>
                    E Brochure</a></div>
                
            </nav>
            <div className={menu_class} onMouseEnter={submenuOn} onMouseLeave={submenuOff}>
                <div className='dropItems'>
                    <Link to='/safety' className={`MenuItem ${safetyclass}`} id='safetymenu' onClick={updateMenu}>Safety Service</Link>
                    <Link to='/itservice' className={`MenuItem ${secirutyclass}`} id='securitymenu' onClick={updateMenu}>IT Service</Link>
                </div>
            </div>
            <div className={menu_class_product} onMouseEnter={submenuProdOn} onMouseLeave={submenuProdOff}>
                <div className='dropItems'>
                    <Link to='/safetyProducts' className={`MenuItem ${safetyProdclass}`} id='safetyProd' onClick={updateMenuProd}>Safety Products</Link>
                    <Link to='/ITProducts' className={`MenuItem ${secirutyProdclass}`} id='securityProd' onClick={updateMenuProd}>IT Products</Link>
                </div>
            </div>
        </>
    );
}

export default Navweb