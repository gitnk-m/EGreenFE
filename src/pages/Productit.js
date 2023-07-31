import Product from "../components/product";
import { useEffect, useState } from "react";

export default function Productit(){
        useEffect(() => {
                window.scrollTo(0, 0);
                return () => {
                        window.scrollTo(0, 0);
                };
                }, []);

    const productlist=[
    ['CCTV Surveillance', 
    '../images/PRODUCT/CCTV Surveillance.webp',
    'CCTV Surveillance', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Enhance security with Evergreen Safety's reliable CCTV surveillance products. 
    Our high-definition cameras provide dependable monitoring for homes and businesses. 
    Choose from weather-resistant outdoor cameras and discreet indoor options. 
    Embrace safety without compromising privacy. Choose Evergreen Safety for top-notch surveillance solutions.`,
    'green' ],
    ['Intercom & UPS Battery', 
    '../images/PRODUCT/Intercom & UPS Battery.png',
    'Intercom & UPS Battery', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Stay connected and powered with Evergreen Safety's reliable intercom and UPS battery products. 
    Our intercom systems offer clear communication for enhanced security and convenience. Choose from wireless and video intercom options. 
    Embrace uninterrupted power supply with our high-performance UPS batteries. Choose Evergreen Safety for top-notch solutions.`,
    'red' ],
    ['Access Control', 
    '../images/PRODUCT/Access Control.png',
    'Access Control', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Take control of security with Evergreen Safety's reliable access control products. 
    Our solutions provide flexible access management for homes and offices. 
    Choose from keyless entry systems and biometric access control. 
    Embrace safety without compromising convenience. Choose Evergreen Safety for top-notch solutions.`,
    'green' ],
    ['Computer Sales and Service', 
    '../images/PRODUCT/Computer Sales and Service.png',
    'Computer Sales and Service', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Experience top-quality computer sales and service at Evergreen Safety. 
    Choose from the latest models, tailored to suit your needs. 
    Embrace seamless computing with our high-performance hardware and software solutions. 
    Trust our skilled technicians for efficient computer repair services. 
    Invest in technology that truly cares - choose Evergreen Safety today.`,
    'red' ],
    ];

    return(
        <div className="safetyProductListing">
        <Product title={productlist[0][0]}
                imageLink={productlist[0][1]}
                imageTag={productlist[0][2]}
                context={productlist[0][3]}
                btColor={productlist[0][4]}
                direction={'reverse'}
                border={'required'}/>
        <Product title={productlist[1][0]}
                imageLink={productlist[1][1]}
                imageTag={productlist[1][2]}
                context={productlist[1][3]}
                btColor={productlist[1][4]}
                direction={'normal'}
                border={'required'}/>
        <Product title={productlist[2][0]}
                imageLink={productlist[2][1]}
                imageTag={productlist[2][2]}
                context={productlist[2][3]}
                btColor={productlist[2][4]}
                direction={'reverse'}
                border={'required'}/>
        <Product title={productlist[3][0]}
                imageLink={productlist[3][1]}
                imageTag={productlist[3][2]}
                context={productlist[3][3]}
                btColor={productlist[3][4]}
                direction={'normal'}
                border={'notrequired'}/>
        </div>
    );}