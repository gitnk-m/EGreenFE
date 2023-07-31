import { useEffect, useState } from "react";
import Product from "../components/product";
import "./Safety.css"
import EnqBtn from "../components/enquirybtn";

export function FooterSelector(selected){
  const safetyContent=[['Fire Safety', `&emsp;&emsp;&emsp;&emsp;&emsp;Since its establishment in 2016, Evergreen has been a leader in the supply of fire extinguishing systems and products. Delivering reliable, high-quality safety equipment has been our forte, making us a well-known supplier in the industry. We take pride in our commitment to respecting our customers and providing them with highly valued products that excel in quality, pricing, and timely delivery. <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Over the past 25 years, Evergreen has manufactured and tested hundreds of firefighting equipment, ensuring they meet industry standards and achieve global certifications. We continuously strive to improve the quality of our fire safety equipment, aiming to minimize the challenges faced by our valued customers. At Evergreen, we are driven by high values such as integrity, respect, and transparency.`, '../images/fire and safety.png'],
  ['Industrial & Construction Safety', '&emsp;&emsp;&emsp;&emsp;&emsp;Industrial Safety is a trusted distributor that offers a wide range of Safety Equipment (PPE), Workwear, and Corporate Clothing. We also provide technical support and solutions for safety-related issues. We are here to help you prevent workplace injuries. It\’s more than just selling a product. It\’s all about Building a Relationship.<br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Evergreen safety provide a safety equipment when we build a industries, house, hotels ect.,. Safety is a must, we assure our product gives a safety for your life. We are here to help you and secure you from injuries in building sites. Our product prevents people who work in the height of the building.', '../images/Industrial & Construction.png'],
  ['Road and Traffic Safety','&emsp;&emsp;&emsp;&emsp;&emsp;We are proud to announce that we also specialize in Road Safety Equipment. As a trusted supplier throughout Tamil Nadu, India, we offer a wide range of high-quality Road Safety Equipment with a long operating life. Our products come in various sizes, shapes, and grades to cater to your specific needs. With our commitment to prompt delivery, you can confidently place your orders with us.<br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;At Evergreen, we are more than just suppliers; we provide comprehensive services as well. As a supplier, service provider, and installer of Road Safety products, Road Furniture, and Highway Safety Products and Equipment in Vellore, India, we offer a complete solution to meet your road safety requirements.', '../images/road.png'],
  ['Medical Safety','&emsp;&emsp;&emsp;&emsp;&emsp;We prioritize the safety and reliability of our products, aiming to instill confidence in both patients and healthcare professionals. At Wellspect HealthCare, we implement rigorous monitoring processes that encompass all stages of a product\'s lifecycle, from pre-clinical research to post-market surveillance. To ensure the highest scientific standards, we collaborate closely with healthcare experts, commonly referred to as "key experts."<br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Our primary focus is to enhance patient treatment and promote the responsible utilization of medical products. Our Medical Product Safety objectives encompass a wide range of healthcare items, including drugs, biological products, and medical devices. By upholding these objectives, we strive to continually improve patient care and contribute to the overall advancement of the medical field.', '../images/medicl.png']];

  const [fire, setFire]= useState(true);
  const [industry, setIndustry]= useState(false);
  const [road, setRoad]= useState(false);
  const [medical, setMedical]= useState(false);

  const [title, setTitle]=useState(safetyContent[0][0])
  const [context, setContext]=useState(safetyContent[0][1])
  const [image, setImage]=useState(safetyContent[0][2])

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
}

export default function Safety(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    const safetyContent=[['Fire Safety', `&emsp;&emsp;&emsp;&emsp;&emsp;Since its establishment in 2016, Evergreen has been a leader in the supply of fire extinguishing systems and products. Delivering reliable, high-quality safety equipment has been our forte, making us a well-known supplier in the industry. We take pride in our commitment to respecting our customers and providing them with highly valued products that excel in quality, pricing, and timely delivery. <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Over the past 25 years, Evergreen has manufactured and tested hundreds of firefighting equipment, ensuring they meet industry standards and achieve global certifications. We continuously strive to improve the quality of our fire safety equipment, aiming to minimize the challenges faced by our valued customers. At Evergreen, we are driven by high values such as integrity, respect, and transparency.`, '../images/fire and safety.png'],
                          ['Industrial & Construction Safety', '&emsp;&emsp;&emsp;&emsp;&emsp;Industrial Safety is a trusted distributor that offers a wide range of Safety Equipment (PPE), Workwear, and Corporate Clothing. We also provide technical support and solutions for safety-related issues. We are here to help you prevent workplace injuries. It\’s more than just selling a product. It\’s all about Building a Relationship.<br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Evergreen safety provide a safety equipment when we build a industries, house, hotels ect.,. Safety is a must, we assure our product gives a safety for your life. We are here to help you and secure you from injuries in building sites. Our product prevents people who work in the height of the building.', '../images/Industrial & Construction.png'],
                          ['Road and Traffic Safety','&emsp;&emsp;&emsp;&emsp;&emsp;We are proud to announce that we also specialize in Road Safety Equipment. As a trusted supplier throughout Tamil Nadu, India, we offer a wide range of high-quality Road Safety Equipment with a long operating life. Our products come in various sizes, shapes, and grades to cater to your specific needs. With our commitment to prompt delivery, you can confidently place your orders with us.<br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;At Evergreen, we are more than just suppliers; we provide comprehensive services as well. As a supplier, service provider, and installer of Road Safety products, Road Furniture, and Highway Safety Products and Equipment in Vellore, India, we offer a complete solution to meet your road safety requirements.', '../images/road.png'],
                          ['Medical Safety','&emsp;&emsp;&emsp;&emsp;&emsp;We prioritize the safety and reliability of our products, aiming to instill confidence in both patients and healthcare professionals. At Wellspect HealthCare, we implement rigorous monitoring processes that encompass all stages of a product\'s lifecycle, from pre-clinical research to post-market surveillance. To ensure the highest scientific standards, we collaborate closely with healthcare experts, commonly referred to as "key experts."<br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;Our primary focus is to enhance patient treatment and promote the responsible utilization of medical products. Our Medical Product Safety objectives encompass a wide range of healthcare items, including drugs, biological products, and medical devices. By upholding these objectives, we strive to continually improve patient care and contribute to the overall advancement of the medical field.', '../images/medical.png']];
    
    const [fire, setFire]= useState(true);
    const [industry, setIndustry]= useState(false);
    const [road, setRoad]= useState(false);
    const [medical, setMedical]= useState(false);

    const [title, setTitle]=useState(safetyContent[0][0])
    const [context, setContext]=useState(safetyContent[0][1])
    const [image, setImage]=useState(safetyContent[0][2])
    
    // const serviceSelector=(selected)=>{
    function serviceSelector(selected){
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
                  <EnqBtn bg={'red'}/>
                </div>
              </div>
              <div className="serviceimage">
                <img src={image} alt="safetyImage"/>
              </div>  
            </div>
          </div>
          <div className="serviceTopics">
            {/* <div className="topic activeService" onClick={serviceSelector(fire)}> */}
            <div className={`topic ${fire?'activeService':''}`} onClick={()=>{serviceSelector('fire')}}>
              <p>Fire Safety</p>
            </div>
            <div className={`topic ${industry?'activeService':''}`} onClick={()=>{serviceSelector('industry')}}>
              <p>Industrial & Construction safety</p>
            </div>
            <div className={`topic ${road?'activeService':''}`} onClick={()=>{serviceSelector('road')}}>
              <p>Road and Traffic Safety</p>
            </div>
            <div className={`topic ${medical?'activeService':''}`} onClick={()=>{serviceSelector('medical')}}>
              <p>Medical safety</p>
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