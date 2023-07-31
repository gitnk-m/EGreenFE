import { useEffect, useState } from "react";
import Product from "../components/product";
import "./Safety.css"
import "./Security.css"
import EnqBtn from "../components/enquirybtn";

export default function Security(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    const safetyContent=[['CCTV Surveillance', `&emsp;&emsp;&emsp;&emsp;&emsp;                 Our professional business CCTV systems are designed to provide optimal protection for your assets. Utilizing cutting-edge technology such as Infrared Capability, High Definition Cameras, and 24/7 monitoring capabilities, Evergreen Safety ensures constant surveillance of people, property, and operations.
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;  With our expertise in customization, we specialize in tailoring CCTV solutions to meet your specific needs. Whether you require perimeter CCTV cameras or more complex systems strategically placed throughout your premises, we have you covered.
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Evergreen Safety is at the forefront of advanced technology in CCTV systems, offering solutions that enhance the safety of your business. Our high-quality CCTV systems enable you to effectively monitor and record all activities both inside and outside your premises. This includes early detection of criminal or anti-social behavior, as well as incidents such as accidents.
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;We provide superior performance, enhanced capabilities, and flexibility through a range of digitally-enhanced devices. Our offerings include High Definition cameras, intelligent storage and retrieval systems, offsite monitoring options, seamless integration with other security systems, and more.
    <br/>The benefits of our CCTV systems are numerous:
    <br/>1.Monitoring, detection, and prevention of crime.
    <br/>2.Clear and detailed images, day or night, with a range of up to 30 meters.
    <br/>3.Audible warnings to deter intrusions.
    <br/>4.Automated connection to a remote video receiving center.
    <br/>5.Access to your CCTV cameras from anywhere, allowing you to stay connected and informed.
    <br/>By choosing Evergreen Safety, you can trust that your business will benefit from state-of-the-art CCTV technology, providing enhanced security and peace of mind.`, '../images/cctv.png'],
                          ['Access Control', `&emsp;&emsp;&emsp;&emsp;&emsp;Welcome to Evergreen Safety - Your Trusted Access Control Service Provider
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Secure your premises with advanced access control solutions provided by Evergreen Safety. We are a leading provider of cutting-edge access control systems that ensure the safety and security of your property, employees, and assets. With our comprehensive range of products and services, we offer tailored solutions for businesses of all sizes across various industries.
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Evergreen Safety offers a wide range of access control products from renowned manufacturers. We carefully select our products based on their quality, reliability, and compatibility with various security protocols. Our product portfolio includes:
    <br/><br/>Biometric Access Control Systems:
    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;Harness the power of biometric technology to enhance security. Our biometric access control systems utilize fingerprint, iris, or facial recognition to provide secure and convenient access to authorized individuals while eliminating the risk of lost or stolen credentials.
    <br/><br/>Proximity Card Readers:
    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;Experience the ease of access with proximity card readers. These devices use contactless technology to grant access to authorized personnel with a simple swipe or wave of a card. We offer a variety of card reader options, including wall-mounted, stand-alone, and mobile solutions.
    <br/><br/>Keyless Entry Systems:
    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;Say goodbye to traditional keys and embrace the convenience of keyless entry systems. Our advanced solutions utilize PIN codes, key fobs, or mobile credentials, allowing authorized individuals to enter your premises quickly and securely.
    <br/><br/>Door Controllers and Locks:
    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;Enhance physical security with our reliable door controllers and locks. These devices integrate with your access control system, enabling you to manage and monitor access to different areas of your facility. From electromagnetic locks to electric strikes, we offer a wide selection of robust and secure locking solutions.`, '../images/access.png'],
                          ['Intercom & UPS Battery',`&emsp;&emsp;&emsp;&emsp;&emsp;Welcome to Evergreen Safety - Your Trusted Provider of Intercom and UPS Battery Solutions
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Evergreen Safety is your go-to source for reliable and innovative solutions in intercom and UPS battery systems. With our extensive expertise and commitment to delivering top-notch products and services, we help businesses enhance communication and ensure uninterrupted power supply in critical situations. Whether you need advanced intercom systems or robust UPS batteries, we have you covered.
    <br/><br/>Intercom Solutions:
    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;Efficient communication is vital for smooth operations and enhanced security within your premises. Evergreen Safety offers a comprehensive range of intercom solutions like Wired Intercom Systems, Wireless Intercom Systems, Video Intercom Systems and IP Intercom Systems
    <br/><br/>UPS Battery Solutions:
    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;Uninterrupted power supply is critical to ensure the smooth operation of your equipment and protect against data loss during power outages.`, '../images/intercom.png'],
                          ['IT Product Sales and Service',`&emsp;&emsp;&emsp;&emsp;&emsp;Welcome to Evergreen Safety - Your Trusted Provider of IT Product Sales and Services
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Evergreen Safety is your one-stop destination for all your IT product needs. We offer a comprehensive range of IT products and services to help businesses thrive in the digital age. Whether you require hardware, software, networking solutions, or professional IT services, our team of experts is here to assist you every step of the way.
    <br/><br/>Our IT Product Sales:
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;At Evergreen Safety, we understand that choosing the right IT products is crucial for the success of your business. That's why we offer a diverse selection of high-quality products from renowned manufacturers. Our product portfolio includes, Computers and Laptops, Servers and Storage Solutions, Networking Equipment and more.
    <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Take your business to the next level with Evergreen Safety's IT product sales and services. Contact us today to discuss your IT needs and schedule a consultation with our experts. Together, we'll find the right IT solutions to empower your business, increase productivity, and drive success.`, '../images/it.png']];
    let other;
    // let active='activeService';
    // let fire=active;
    // let road;
    // let industry;
    // let medical;

    const [fire, setFire]= useState(true);
    const [industry, setIndustry]= useState(false);
    const [road, setRoad]= useState(false);
    const [medical, setMedical]= useState(false);

    const [title, setTitle]=useState(safetyContent[0][0])
    const [context, setContext]=useState(safetyContent[0][1])
    const [image, setImage]=useState(safetyContent[0][2])
    // let serviceTitle=safetyContent[0][0];
    // let serviceContext=safetyContent[0][1];
    // let serviceImage=safetyContent[0][2];
    // function serviceSelector(selected){
    const serviceSelector=(selected)=>{
      switch(selected){
        case 'fire':
            setFire(true)
            setIndustry(false)
            setRoad(false)
            setMedical(false)
            setTitle(safetyContent[0][0])
            setContext(safetyContent[0][1])
            setImage(safetyContent[0][2])
            window.scrollTo(0, 0);
            break;
        case 'industry':
            setFire(false)
            setIndustry(true)
            setRoad(false)
            setMedical(false)
            setTitle(safetyContent[1][0])
            setContext(safetyContent[1][1])
            setImage(safetyContent[1][2])
            window.scrollTo(0, 0);
            break;
        case 'road':
            setFire(false)
            setIndustry(false)
            setRoad(true)
            setMedical(false)
            setTitle(safetyContent[2][0])
            setContext(safetyContent[2][1])
            setImage(safetyContent[2][2])
            window.scrollTo(0, 0);
            break;
        case 'medical':
            setFire(false)
            setIndustry(false)
            setRoad(false)
            setMedical(true)
            setTitle(safetyContent[3][0])
            setContext(safetyContent[3][1])
            setImage(safetyContent[3][2])
            window.scrollTo(0, 0);
            break;
    }
    };
    return(
        <div className='safetyWrapper'>
            <div className="serviceContainer">
              <div className="serviceTitle">
                  <h2>{title}</h2>
              </div>
              <div className="serviceContent">  
                <div className="serviceContext">
                  <p dangerouslySetInnerHTML={{__html:context}}></p>
                  {/* <p>n<br/>i<br/>r</p> */}
                  <div className="enqbtnsafety">
                    <EnqBtn bg={'green'}/>
                  </div>
                </div>
                <div className="serviceimage">
                  <img src={image} alt="safetyImage"/>
                </div>  
              </div>
            </div>
            <div className="serviceTopics">
              {/* <div className="topic activeService" onClick={serviceSelector(fire)}> */}
              <div className={`topic ${fire?'activeSecurity':''}`} onClick={()=>{serviceSelector('fire')}}>
                <p>CCVT</p>
              </div>
              <div className={`topic ${industry?'activeSecurity':''}`} onClick={()=>{serviceSelector('industry')}}>
                <p>Access Control</p>
              </div>
              <div className={`topic ${road?'activeSecurity':''}`} onClick={()=>{serviceSelector('road')}}>
                <p>Intercom & UPS Battery</p>
              </div>
              <div className={`topic ${medical?'activeSecurity':''}`} onClick={()=>{serviceSelector('medical')}}>
                <p>IT Product Sales and Service</p>
              </div>
            </div>
            {/* <div className="topProductsContainer">
              <div className="topProductTitle">
                <h2>Top Products</h2>
              </div>
              <div className="productcontainer">
                <div className="product">
                  <Product/>
                </div>
                <div className="product">
                  <Product/>
                </div>
                <div className="product">
                  <Product/>
                </div>
                <div className="product">
                  <Product/>
                </div>
                <div className="product">
                  <Product/>
                </div>
              </div>
            </div> */}
        </div>
        
    );
}