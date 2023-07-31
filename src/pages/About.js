import { useEffect } from "react";
import './About.css'
import EnqBtn from "../components/enquirybtn";

export default function About(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 

      
    return(
        <>
            <div className="banner">
              <img
              className="abtBanner"
              src="../images/Banner/About us.webp"
              alt="Evergreen"
              />
            </div>
            <div className="aboutContainer">
              <div className="aboutTitle">
                <h2>About Us</h2>
              </div>
              <div className="aboutcontext">
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;Evergreen Safety is a leading provider of Personal Protective Equipment (PPE) in Tamilnadu, 
                  offering a comprehensive range of safety products for complete head-to-feet protection. Our vast selection 
                  includes Safety Equipment, Safety Products, Safety Gloves, Helmets, and Nets, sourced exclusively from certified 
                  manufacturers. We prioritize dealing with CE-certified products, ensuring compliance with international standards 
                  and catering to the diverse needs of industrial clients.
                </p>
                <h2>Our Vision</h2>
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;We envision expanding our presence by establishing additional branches in key cities across Tamilnadu. 
                  Through a strong team spirit and a commitment to building a trusted brand, we aim to become the go-to safety provider in the region.
                </p>
                <h2>Our Mission</h2>
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;At Evergreen Safety, our mission is to meet the safety requirements of corporate and industrial sectors, setting the highest 
                  standards for quality and reliability in Tamil Nadu.
                </p>
                <h2>Why Choose Us?</h2>
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;When it comes to safety equipment, there are numerous reasons to choose Evergreen Safety as your preferred supplier. We take pride in offering:                  
                  <ul>
                    <li>Competitive prices for our wide range of safety products, ensuring affordability without compromising quality.</li><br/>
                    <li>Adherence to international quality standards, guaranteeing the reliability and effectiveness of our products.</li><br/>
                    <li>A comprehensive selection of safety equipment, making us a one-stop shop for all your safety needs.</li><br/>
                    <li>Collaborations with the best manufacturers in the industry, ensuring top-notch product quality and performance.</li><br/>
                    <li>A team of skilled and professional experts who are dedicated to providing exceptional service and support.</li><br/>
                    <li>State-of-the-art packaging and warehousing facilities, ensuring that your safety products are well-preserved and delivered in optimal condition.</li><br/>
                    <li>Highly efficient transport and logistics services, ensuring prompt and reliable delivery to your doorstep.</li>
                  </ul>
                </p>
                <h2>Commitment to Quality</h2>
                <p> 
                  &emsp;&emsp;&emsp;&emsp;&emsp;Quality is of paramount importance to us at Evergreen Safety. We leave no stone unturned to ensure that our products meet the highest standards of 
                  excellence. We source high-quality raw materials from reputable suppliers and employ stringent quality control measures at every stage of production. This meticulous approach allows us to maintain our market credibility and deliver products that instill confidence in our customers.
                </p>
                <h2>Client Satisfaction</h2>
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;Our ultimate goal is to achieve maximum client satisfaction by offering the best industrial products at competitive prices. Our dedicated professionals work tirelessly to source and deliver products promptly, catering to the specific requirements of our clients. We prioritize customer 
                  satisfaction and ensure that our products are tailored to meet their diverse needs and specifications.
                </p>
              </div>
              <div className="btnContainer">
                <div className="aboutenqbtn">
                  <EnqBtn bg={'green'}/>
                </div>
              </div>
            </div>
          </>
    );
}