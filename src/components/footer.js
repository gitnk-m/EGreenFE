import './footer.css'
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className='footer'>
            <div className="footerDetails">
                <div className='footerLogo'>
                    <img src={'../images/logo-04.svg'} alt='Evergreen LOGO'/>
                    <div className='footerAddress'>
                        <div className="menuAddress">
                            <p>
                                {/* <h3>Address: </h3> */}
                                No.2/24G, 4th East Main Raod,<br></br>
                                Gandhi Nagar, Vellore - 632006<br></br>
                                Tamilnadu, India</p>
                        </div>
                        <div className="menuDigital">
                            <p>
                                {/* <h3>Email:</h3> */}
                                sales@evergreensafety.in</p>
                            <p>
                                {/* <h3>Phone:</h3> */}
                                +91 96555 58065, +91 97872 78890</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerMenuMain">
                <div className='footermenuTitle'>
                    <h1>Explore</h1>
                </div>
                <div className='footermenulinks'>
                    <Link to='/' className="footermenu" >Home</Link>
                    <Link to='/safetyProducts' className="footermenu">Safety Products</Link>
                    <Link to='/ITProducts' className="footermenu">IT Products</Link>
                    <Link to='/safety' className="footermenu" >Safety Service</Link>
                    <Link to='/itservice' className="footermenu" >IT Service</Link>
                    <Link to='/about' className="footermenu" >About Us</Link>
                    <Link to='/contact' className="footermenu" >Contact Us</Link>
                </div>
            </div>
            <div className='footerAbout'>
            <div className="footertxt">
            <h3>About Us </h3>
                <p>
                Vellore Leading Safety and security 
                company, to provide all your safety
                requirements.</p>
            </div>
            <div className="follow">
                <h3>Follow Us</h3>
                <div className='icons'>
                    <div className='icon'>
                        <img src='./images/facebook.svg'/>
                    </div>
                    <div className='icon'>
                        <img src='./images/instagram.svg'/>
                    </div>
                    <div className='icon'>
                        <img src='./images/whatsapp.svg'/>
                    </div>
                </div>
            </div>

            </div>
            
        </div>
    );
}