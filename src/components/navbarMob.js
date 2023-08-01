import React, { useRef } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './navbarMob.css'

export default function NavMob(){
    const active = "nowin"
    const activesub='subin'
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
        // console.log(position)

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
            safetyclass= activesub;
            break;
        case '/security':
            serviceclass= active;
            secirutyclass= activesub;
            break;
        case '/safetyProducts':
            productclass= active;
            safetyProdclass= activesub;
            break;
        case '/ITProducts':
            productclass= active;
            secirutyProdclass= activesub;
            break;
    }

    const productMenuDiv = useRef(null);
    const serviceMenuDiv = useRef(null);

    const checkproduct = () =>{
        const productDiv= productMenuDiv.current
        const { height } = productDiv.getBoundingClientRect();
        // console.log('in checkproduct')
        if (height>0){
            openProductmenu()
        }
    }

    const checkservice = () =>{
        const serviceDiv= serviceMenuDiv.current
        const { height } = serviceDiv.getBoundingClientRect();
        // console.log('in checkservice')
        if (height>0){
            openServicemenu()
        }
    }

    const [menudisplay, setMenudisplay] = useState('movMenu mobmenunotactive')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const openMenu = () =>{
        if (!isMenuClicked){
            setMenudisplay('mobMenu mobmenuactive')
        }else{
            setMenudisplay('mobMenu mobmenunotactive')
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    const [productarrowclass, setproductArrowclass] = useState('productmenuArrow productarrownormal')
    const [productMenu, setProductMenu] = useState('mobdropItems subnotactive')
    const [productMenuClicked, setProductMenuClicked] = useState(false)
    const openProductmenu = () =>{
        if (!productMenuClicked){
            setProductMenu('mobdropItems subactive')
            setproductArrowclass('productmenuArrow productarrowreverse')
        }else{
            setProductMenu('mobdropItems subnotactive')
            setproductArrowclass('productmenuArrow productarrownormal')
        }
        setProductMenuClicked(!productMenuClicked)
    }

    const [servicearrowclass, setServiceArrowclass] = useState('servicemenuArrow servicearrownormal')
    const [serviceMenu, setServiceMenu] = useState('mobdropItems subnotactive')
    const [ServiceMenuClicked, setServiceMenuClicked] = useState(false)
    const openServicemenu = () =>{
        if (!ServiceMenuClicked){
            setServiceMenu('mobdropItems subactive')
            setServiceArrowclass('servicemenuArrow servicearrowreverse')
        }else{
            setServiceMenu('mobdropItems subnotactive')
            setServiceArrowclass('servicemenuArrow servicearrownormal')
        }
        setServiceMenuClicked(!ServiceMenuClicked)
    }

    // const productmenuon = () =>{
    //     setProductMenu('mobdropItems subactive')
    //     setproductArrowclass('productmenuArrow productarrowreverse')
    // }
    // const productmenuoff = () =>{
    //     setProductMenu('mobdropItems subnotactive')
    //     setproductArrowclass('productmenuArrow productarrownormal')
    // }
    // const servicemenuon = () =>{
    //     setServiceMenu('mobdropItems subactive')
    //     setServiceArrowclass('servicemenuArrow servicearrowreverse')
    // }
    // const servicemenuoff = () =>{
    //     setServiceMenu('mobdropItems subnotactive')
    //     setServiceArrowclass('servicemenuArrow servicearrownormal')
    // }
    return(
        <>
            <nav className={`mobNav ${pageScroll ? 'navColor' : ''}`}>
                <Link to='/' className="mobLogo" ><img src={'../Images/logo-04.svg'} alt='Evergreen Logo'/></Link>
                
                <div className='menuIcon'>
                    <img onClick={openMenu} src='../images/menuIcon.png' alt='Menu Icon'/>
                </div>
            </nav>
            <div className={menudisplay}>
                <div className='mobMenuList'>
                    <Link to='/' className={`mobMenuItem ${homeclass}`} onClick={()=>{checkproduct(); checkservice(); openMenu();}}>Home</Link>
                    <div className='mobSubmenuclick' onClick={() => {checkservice(); openProductmenu();}}>
                        <div className={productarrowclass}>
                            <img src='../images/menuarrow.png' alt='arrow'/>
                        </div>
                        <Link className={`mobMenuItem ${productclass}`}>Products</Link>
                    </div>
                    <div className={productMenu} ref={productMenuDiv}>
                        <Link to='/safetyProducts' className={`mobsubmenuitem ${safetyProdclass}`} onClick={() => {openMenu(); openProductmenu();}}>Safety Products</Link>
                        <Link to='/ITProducts' className={`mobsubmenuitem ${secirutyProdclass}`} onClick={() => {openMenu(); openProductmenu();}}>IT Products</Link>
                    </div>
                    <div className='mobSubmenuclick' onClick={() => {checkproduct(); openServicemenu();}} >
                    {/* <div className='mobSubmenuclick' onMouseEnter={servicemenuon} onMouseLeave={servicemenuoff}> */}
                        <div className={servicearrowclass}>
                            <img src='../images/menuarrow.png' alt='arrow'/>
                        </div>
                        <Link className={`mobMenuItem ${serviceclass}`}>Services</Link>
                    </div>
                    <div className={serviceMenu} ref={serviceMenuDiv}>
                        <Link to='/safety' className={`mobsubmenuitem ${safetyclass}`} onClick={() => {openMenu(); openServicemenu();}}>Safety Service</Link>
                        <Link to='/itservice' className={`mobsubmenuitem ${secirutyclass}`} onClick={() => {openMenu(); openServicemenu();}}>IT Service</Link>
                    </div>
                    <Link to='/about' className={`mobMenuItem ${aboutclass}`} onClick={() =>{checkproduct(); checkservice(); openMenu();}}>About Us</Link>
                    <Link to='/contact' className={`mobMenuItem ${contactclass}`} onClick={() =>{checkproduct(); checkservice(); openMenu();}}>Contact Us</Link>
                </div>
                <div className='mobBrochure'>
                    <a href={'../Assets/EverGreen-Catalogue-1.pdf'} download>
                        E Brochure
                    </a>
                </div>
            </div>
        </>
    );
}

