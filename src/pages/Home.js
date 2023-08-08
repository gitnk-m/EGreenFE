import {ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect, useState, useRef} from 'react';
import './Home.css'
import Loading from '../components/counting';
import EnqBtn from '../components/enquirybtn';
import EnqBtnMob from '../components/enquirybtnMob';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



function Hero(){
  // console.log(window.innerWidth)
  const [heroLine1, setHeroLine1]=useState('YOUR Safety PARTNER');
  const [heroLine2, setHeroLine2]=useState('in the workpalce');
  const [enqbutton, setEnqbutton]=useState(<EnqBtn/>)
  // const lightmode=['../images/hero-02.svg', '../images/hero-01.png', '../images/hero-04.png', '../images/hero-03.png']
  const lightmode=['../images/hero/hero-05.webp', '../images/hero/hero-06.webp', '../images/hero/hero-07.webp', '../images/hero/hero-04.webp']

  const [move, setMove] = useState(false);
  // const heroClass = ['layer1 layer1Final', 'layer2 layer2Final', 'layer3 layer3Final', 'layer4 layer4Final', 'hero_title hero_titleFinal']
  const elementSelect = () =>{
    if (window.innerWidth<1070){
      // setHeroLine1(`Protect <br> Yourself`);
      setHeroLine1(`YOUR Safety PARTNER`);
      setHeroLine2(`in the Workplace`)
      setEnqbutton(<EnqBtnMob bg={'green'}/>)
    }else{
      setHeroLine1('YOUR Safety PARTNER');
      setHeroLine2(`in the Workplace`)
      setEnqbutton(<EnqBtn bg={'green'}/>)
    }
  }
  
  useEffect(() => {
    if (window.innerWidth<1070){
      // setHeroLine1(`Protect <br> Yourself`);
      setHeroLine1(`YOUR Safety PARTNER`);
      setHeroLine2(`in the Workplace`)
      setEnqbutton(<EnqBtnMob bg={'green'}/>)
    }else{
      setHeroLine1('YOUR Safety PARTNER');
      setHeroLine2(`in the Workplace`)
      setEnqbutton(<EnqBtn bg={'green'}/>)
    }
    window.addEventListener('resize', elementSelect);

    setMove(true);
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
      window.removeEventListener('resize', elementSelect);
    };
    
    
    
  }, []); 


    return(
      <div className='hero_main'>
        <ParallaxProvider>
          <Parallax speed={-50} id='parallax'>
            <div className={`layer4 ${move ? 'layer4Final' : ''}`}>
              <img src={lightmode[3]} alt='layer4'/>
            </div>
          </Parallax>

          <Parallax speed={0} id='parallax'>
            <div className={`layer1 ${move ? 'layer1Final' : ''}`}>
              <img src={lightmode[0]} alt='layer1'/>
            </div>
          </Parallax>
          <Parallax speed={-100} id='parallax'>
            <div className={`hero_title ${move ? 'hero_titleFinal' : ''}`}>
              <h1 className='line1' dangerouslySetInnerHTML={{__html:heroLine1}}></h1>
              <h2 className='line2'  dangerouslySetInnerHTML={{__html:heroLine2}}></h2>
              <p className='heroContext'>Your Safety, Our Priority - Trust Evergreen Safety for Reliable Fire safety, IT and Security Solutions!</p>
              {/* <div className='heroBtnLoc'>
                <EnqBtn bg={'green'}/> 
              </div> */}
            </div>
          </Parallax>
          <Parallax speed={-20} id='parallax'>
            <div className={`layer2 ${move ? 'layer2Final' : ''}`}>
              <img src={lightmode[1]} alt='layer2'/>
            </div>
          </Parallax>
          <Parallax speed={-10} id='parallax'>
            <div className={`layer3 ${move ? 'layer3Final' : ''}`}>
              <img src={lightmode[2]} alt='layer3'/>
            </div>
          </Parallax>
        </ParallaxProvider>
        <div className={`heroBtnLoc ${move ? 'btnFinal' : ''}`}>
          {enqbutton}
        </div>
      </div>
    );
  }

  function ProductsCorasel(){
    const [classArray, setClassArray]=useState(['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'])
    let arr2=[classArray[1], classArray[2], classArray[3], classArray[4], classArray[5], classArray[0]]
    let arr3 = [...arr2]; 

    const updateArray = () => {
        // arr1.splice(0, arr1.length, ...arr3);
        setClassArray(arr3)
        // arr2 = [arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[0]];
        arr2=[classArray[1], classArray[2], classArray[3], classArray[4], classArray[5], classArray[0]]
        arr3 = [...arr2]; 
        
      };
    
    const prodcontainer = useRef(null);
    

      useEffect(() => {
        // const divElement = prodcontainer.current;
        // if (divElement) {
        //   const { width, height } = divElement.getBoundingClientRect();
        //   const leftAlign= (width-250)/2
        //   if (leftAlign >=0 ){

        //   }

          // console.log('Width:', width);
          // console.log('Height:', height);
        // }

        setTimeout(() => {
            updateArray();
        }, 2000);
        // return () => clearInterval(interval);
    });

    return(
      <ul className='mainContainer' ref={prodcontainer}>
            <li className={`subcontainer ${classArray[0]}`}>
              <img src='../images/pngwing.png'/>
            </li>
            <li className={`subcontainer ${classArray[1]}`}>
              <img src='../images/pngwing-1.png'/>  
            </li>
            <li className={`subcontainer ${classArray[2]}`}>
              <img src='../images/fire.png'/>
            </li>
            <li className={`subcontainer ${classArray[3]}`}>
              <img src='../images/cone.png'/>
            </li>
            <li className={`subcontainer ${classArray[4]}`}>
              <img src='../images/accesshome.png'/>
              </li>
            <li className={`subcontainer ${classArray[5]}`}>
            <img src='../images/laptop.png'/>
            </li>
        </ul>
    );
  }

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* <div className='sliderContainer'> */}
        <Carousel.Item>
          <img
            className="d-block w-100 firebanner"
            src="../images/Banner/Fire safety Equipments.webp"
            alt="Fire safety Equipments"
          />
          <Carousel.Caption>
            <h3 className='slideName'>Fire Safety</h3>
            <p className='slidetxt'>Heat Up Your Safety Measures: Trust in Our Fire Safety Innovations!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* </div> */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Banner/Industrial Safety Equipment.webp"
            alt="Industrial Safety Equipment"
          />
  
          <Carousel.Caption>
            <h3 className='slideName'>Industrial & Construction Safety</h3>
            <p className='slidetxt'>Safety First, Always: Elevate Your Workplace with Our Industrial & Construction Solutions!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Banner/Road Safety.webp"
            alt="Road Safety"
          />
  
          <Carousel.Caption>
            <h3 className='slideName'>Road & Traffic Safety</h3>
            <p className='slidetxt'>
            Road to Safety: Enhance Traffic Management with Our Cutting-Edge Products!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Banner/Medical Safety.webp"
            alt="Medical Safety"
          />
  
          <Carousel.Caption>
            <h3 className='slideName'>Medical Safety</h3>
            <p className='slidetxt'>
            Preserving Lives, Ensuring Safety: Empowering Healthcare with Our Medical Safety Products!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Banner/CCTV Surveilance.webp"
            alt="CCTV Surveilance"
          />
  
          <Carousel.Caption>
            <h3 className='slideName'>CCTV Surveillance</h3>
            <p className='slidetxt'>
            Your Watchful Eye 24/7: Trust in Our CCTV Surveillance Solutions
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Banner/Intercom Service.webp"
            alt="Intercom Service"
          />
  
          <Carousel.Caption>
            <h3 className='slideName'>Intercom & UPS Battery</h3>
            <p className='slidetxt'>
            Intercom Excellence, Uninterrupted Power: Experience Unmatched Reliability!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Banner/Access Control.webp"
            alt="Access Control"
          />
  
          <Carousel.Caption>
            <h3 className='slideName'>Access Control</h3>
            <p className='slidetxt'>
            Safeguard Your Space: Choose Access Control for Uncompromising Security!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Banner/IT Solutions.webp"
            alt="IT Solutions"
          />
  
          <Carousel.Caption>
            <h3 className='slideName'>Computer Sales and Service</h3>
            <p className='slidetxt'>
            From Sales to Support, We've Got You Covered: Elevate Your Digital Experience!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    );
  }

function Newcard({title, pic, context, bg}){
  // const [abovebg, setabovebg] = useState('abovered');
  // console.log(bg)
  const [bgcolor, setbgcolor]=useState(true)
  useEffect(() => {
    if (bg=='red'){
      // setabovebg('abovegreen')
      setbgcolor(false)
    }
    else{
      // setabovebg('abovered')
      // console.log(false)
      setbgcolor(true)
    }
    
  }, []);
  
  
  return(
    <>
      <div className='card'>
        {/* <div className='face above'> */}
        <div className={`face above ${bgcolor ? 'abovegreen' : 'abovered'}`}>
          <h1>{title}</h1>
        </div>
        <div className='face below'>
          <img src={pic} alt='image'></img>
        </div>
      </div>
    </>
  );
}
export default function Home(){

    const [formData, setFormData] = useState({
      name: '',
      company: '',
      phone: '',
      email: '',
      location: '',
      message:''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Replace '/send-email' with your server's endpoint
        const response = await fetch('https://egserver.onrender.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // console.log('Email sent successfully!');
          alert(`Our Team Will Contact You Soon...`);
          // Reset the form after successful submission
          setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            location: '',
            message:''
          });
        } else {
          console.error('Error while sending email:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  const content=[['Fire and Safety', '../images/homefire.png', 'aaa'], 
        ['Industrial & Construction Safety', '../images/homeindustry.png', 'aaa'],
        ['CCTV Surveillance', '../images/homecctv.png', 'aaa'],
        ['Intercom & UPS Battery', '../images/homeintercom.png', 'aaa'],
        ['Road & Traffic Safety', '../images/homeroad.png', 'aaa'],
        ['Medical Safety', '../images/homemedical.png', 'aaa'],
        ['Access Control', '../images/homeaccess.png', 'aaa'],
        ['Computer Sales and Service', '../images/homecomputer.png', 'aaa'],
      ]
      const logoDiv = useRef(null);
      const clientDiv = useRef(null);

      const [divWidth, setDivWidth] = useState(0);
      const [divHeight, setDivHeight] = useState(0);
      const [clientdivWidth, setClientdivWidth] = useState(0);
      const [clientdivHeight, setClientdivHeight] = useState(0);

      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const [clientlogowidth, setClientlogowidth] = useState('50%')

      useEffect(() => {
        if (window.innerWidth<1070){
          setClientlogowidth('100%')
        }else{
          setClientlogowidth('50%')
        }
        const divElement = logoDiv.current;
        if (divElement) {
          const { width, height } = divElement.getBoundingClientRect();
          setDivWidth(width);
          setDivHeight(width / 3);

          // console.log('Width:', width);
          // console.log('Height:', height);
        }

        const clientElement = clientDiv.current;
        if (clientElement) {
          const { width, height } = clientElement.getBoundingClientRect();
          setClientdivWidth(width);
          setClientdivHeight(width / 3);

          console.log('Width:', width);
          console.log('Height:', height);
        }
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return(
        <>  
            <div className='heroContainer'>
              <Hero/>
            </div>
            <div className='wrapperHome'>
              <div className='whoSection'>
              <div className='whoGradient'></div>
              <div>
                  <h1 className='whoTitle'>Who We Are</h1>
              </div>
              <ProductsCorasel/>
                <div className='who'>
                  <p className='whoContent'>
                    As a well-known company in the industry, Evergreen Safety specializes in providing a comprehensive selection of Personal Protective Equipment (PPE) for complete head-to-toe protection. Our product range encompasses a wide array of safety gear, including protective equipment, safety products, gloves, helmets, and nets, all sourced exclusively from certified manufacturers.
                    <br/><br/>
                    To cater to the diverse needs of our industrial clients, we exclusively offer products that are CE-certified. Our client-centric approach drives us to meticulously evaluate and compare various Indian manufacturers before selecting and procuring each product.
                  </p>
                </div>
              </div>
              <div className='seperator'>
        
              </div>
              <div className='whatSection'>
                <div className='whatTitle'>
                  <h1>What We Do</h1>
                </div>
                <ControlledCarousel/>
              </div>
              <div className='conuting'>
                  {/* <div className='luffy'>
                    <img src=''/>
                  </div> */}
                  <div className='countContainer'>
                    <h1 className='count'><Loading n={1888}/></h1>
                    <p className='counttxt'>Happy Customers</p>
                  </div>
                  <div className='countContainer'>
                    <h1 className='count'><Loading n={300}/></h1>
                    <p className='counttxt'>Supplier</p>
                  </div>
                  <div className='countContainer'>
                    <h1 className='count'><Loading n={850}/></h1>
                    <p className='counttxt'>Product</p>
                  </div>
              </div>
              <div className='clientSectionContainer'>
                <div className='clientSection'>
                  <div className='Client'>
                    <div className='clientTitle'>
                    <h1>Our Clients</h1>
                    </div>
                    <div className='clientdetails'>
                      <div className='clienttxt'>
                        <p>Our Evergreen safety Clients get the best safety and security services in the Country,  Best Support Teams for service.</p>
                      </div>
                      <div className='clientsLogo' ref={clientDiv} style={{ width: `${clientlogowidth}`, height: `calc(${clientdivWidth}px / 3)`}}>
                      {/* <div className='clientsLogo'> */}
                        <div className='clientLogo'>
                          <img src='../images/logo/darling.png'alt='client'/>
                        </div>
                        <div className='clientLogo'>
                          <img src='../images/logo/DEC.png'alt='client'/>
                        </div>
                        <div className='clientLogo'>
                          <img src='../images/logo/harish.png'alt='client'/>
                        </div>
                        <div className='clientLogo'>
                          <img src='../images/logo/L&T.png'alt='client'/>
                        </div>
                        <div className='clientLogo'>
                          <img src='../images/logo/Susee.png'alt='client'/>
                        </div>
                        <div className='clientLogo'>
                          <img src='../images/logo/TCS.png'alt='client'/>
                        </div>
                        <div className='clientLogo'>
                          <img src='../images/logo/TNPD.png'alt='client'/>
                        </div>
                        <div className='clientLogo'>
                          <img src='../images/client.svg'alt='client'/>
                        </div>
                      </div>
                    </div>
                    <div className='buttonCS'>
                    <Link to='/contact'><h2 className='nolink'>Join Now</h2></Link>
                    </div>
                  </div>
                  <div className='brands'>
                  <div className='brandTitle'>
                    <h1>Brand Partner</h1>
                  </div>
                  <div className='brandLogos' ref={logoDiv} style={{ width: '90%', height: `calc(${divWidth}px / 3)`}}>
                    <div className='brandBG'>
                      
                    </div>
                    <div className='brand'>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand1.png' alt='3M'/>
                      </div>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand2.png' alt='3M'/>
                      </div>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand3.png' alt='3M'/>
                      </div>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand4.png' alt='3M'/>
                      </div>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand5.png' alt='3M'/>
                      </div>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand6.png' alt='3M'/>
                      </div>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand7.png' alt='3M'/>
                      </div>
                      <div className='brandLogoContainer'>
                        <img src='../images/brand8.png' alt='3M'/>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='workerImage'>
                  <img src='../images/man-1.png' alt='man'/>
                </div>
              </div>    
              <div className='contactHome'>
                <div className='formHome'>
                  <h2 className='formTitle'>Reach US</h2>
                  <form className='formContainer' onSubmit={handleSubmit}>
                    <input 
                      type='text' 
                      placeholder='Name' 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      />
                    <input 
                      type='text' 
                      placeholder='Company'
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange}
                      />
                    <input 
                      type='tel' 
                      placeholder='Phone number'
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                        />
                    <input 
                      type='email' 
                      placeholder='Email'
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      />
                    <input 
                      type='text' 
                      placeholder='Location'
                      name="location" 
                      value={formData.location} 
                      onChange={handleChange}
                      />
                    <input 
                      type='textarea' 
                      placeholder='Your Message'
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      />
                    <div className="submitContainer">
                      <input type='submit' className='submit' value='Get Connected'></input>
                    </div>
                  </form> 
                </div>
                <div className='mapHome'>
                  <div className='mapConitainerHome'>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.556671417953!2d79.1393384687387!3d12.952096376319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47a08f26d0c1%3A0x69fe0505df1cc7cf!2sEVERGREEN%20SAFETY!5e0!3m2!1sen!2sin!4v1687852329867!5m2!1sen!2sin" 
                    width={`${windowWidth}`} 
                    height="500" 
                    style={{border:'0'}}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

// 9894627341