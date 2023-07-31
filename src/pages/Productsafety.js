import Product from "../components/product";
import { useEffect, useState } from "react";

export default function Productsafety(){
        useEffect(() => {
                window.scrollTo(0, 0);
                return () => {
                        window.scrollTo(0, 0);
                };
                }, []);
    const productlist=[['Foot Protection', 
    '../images/PRODUCT/Foot Protection.png',
    'Foot Protection', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Your feet deserve the best protection with Evergreen Safety's foot protection products. 
    Our safety footwear meets industry standards, providing reliable protection against potential hazards. 
    From steel-toe boots to slip-resistant shoes, we offer options to suit various needs. 
    Stay comfortable and productive throughout the day with our supportive designs. 
    Choose Evergreen Safety for dependable foot protection - safety made simple.`,
    'green' ],
    ['Head Protection', 
    '../images/PRODUCT/Head Protection.png',
    'Head Protection', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Protect your head with Evergreen Safety's top-quality helmets and headgear. 
    Designed for durability, comfort, and uncompromising safety, our diverse selection ensures your protection from workplace hazards. 
    Embrace safety today and trust Evergreen to safeguard your most valuable asset - your head.`,
    'red' ],
    ['Eye Protection', 
    '../images/PRODUCT/Eye Protection.png',
    'Eye Protection', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Ensure eye safety with Evergreen Safety's reliable eyewear. 
    Our safety goggles and glasses meet industry standards, safeguarding you from workplace hazards. 
    Stay comfortable and stylish with our durable designs. Choose Evergreen Safety for clear vision and dependable eye protection.`,
    'green' ],
    ['Ear Protection', 
    '../images/PRODUCT/Ear Protection.png',
    'Ear Protection', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Preserve your hearing with Evergreen Safety's reliable ear protection products. 
    Our earplugs and earmuffs meet industry standards, safeguarding you from harmful noise levels. 
    Stay comfortable and communicate clearly with our innovative designs. Choose Evergreen Safety for dependable ear protection.`,
    'red' ],
    ['Hand Protection', 
    '../images/PRODUCT/Hand Protection.png',
    'Hand Protection', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Keep your hands safe with Evergreen Safety's reliable safety gloves. 
    Our gloves meet industry standards, defending against cuts, abrasions, and chemicals. 
    Stay comfortable and agile with our innovative designs. Choose Evergreen Safety for top-notch hand protection.`,
    'green' ],
    ['Body Protection', 
    '../images/PRODUCT/Body Protection.png',
    'Body Protection', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Stay protected with Evergreen Safety's reliable body protection gear. 
    Our products meet industry standards, defending against impacts and splashes. 
    Stay comfortable and flexible with our innovative designs. Choose Evergreen Safety for top-notch body protection.`,
    'red' ],
    ['Fall Protection', 
    '../images/PRODUCT/Fall Protection.png',
    'Fall Protection', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Secure against falls with Evergreen Safety's reliable fall protection gear. 
    Our products meet industry standards, providing dependable defense in elevated work areas. 
    Stay comfortable and confident with our innovative designs. Choose Evergreen Safety for top-notch fall protection.`,
    'green' ],
    ['Road & Safety', 
    '../images/PRODUCT/Road & Safety.png',
    'Road & Safety', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Drive confidently with Evergreen Safety's reliable road safety products. 
    Our gear meets industry standards, providing reliable defense against potential accidents and hazards. 
    Stay visible and in control with our innovative designs. Choose Evergreen Safety for top-notch road safety solutions.`,
    'red' ],
    ['Fire Safety', 
    '../images/PRODUCT/Fire Safety.png',
    'Fire Safety', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Protect with confidence using Evergreen Safety's reliable fire safety products. 
    Our gear meets industry standards, providing dependable defense against potential fire incidents. 
    Choose from fire extinguishers, smoke detectors, and fire blankets. Embrace safety without compromising on style. 
    Choose Evergreen Safety for top-notch fire safety solutions.`,
    'green' ],
    ['Medical Safety', 
    '../images/PRODUCT/Medical Safety.png',
    'Medical Safety', 
    `&emsp;&emsp;&emsp;&emsp;&emsp;Care with confidence using Evergreen Safety's reliable medical safety products. 
    Our gear meets industry standards, providing dependable defense in medical settings. 
    From protective gloves to face shields, we have you covered. Embrace safety without compromising patient care. 
    Choose Evergreen Safety for top-notch medical safety solutions.`,
    'red' ]];
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
                border={'required'}/>
        <Product title={productlist[4][0]}
                imageLink={productlist[4][1]}
                imageTag={productlist[4][2]}
                context={productlist[4][3]}
                btColor={productlist[4][4]}
                direction={'reverse'}
                border={'required'}/>
        <Product title={productlist[5][0]}
                imageLink={productlist[5][1]}
                imageTag={productlist[5][2]}
                context={productlist[5][3]}
                btColor={productlist[5][4]}
                direction={'normal'}
                border={'required'}/>
        <Product title={productlist[6][0]}
                imageLink={productlist[6][1]}
                imageTag={productlist[6][2]}
                context={productlist[6][3]}
                btColor={productlist[6][4]}
                direction={'reverse'}
                border={'required'}/>
        <Product title={productlist[7][0]}
                imageLink={productlist[7][1]}
                imageTag={productlist[7][2]}
                context={productlist[7][3]}
                btColor={productlist[7][4]}
                direction={'normal'}
                border={'required'}/>
        <Product title={productlist[8][0]}
                imageLink={productlist[8][1]}
                imageTag={productlist[8][2]}
                context={productlist[8][3]}
                btColor={productlist[8][4]}
                direction={'reverse'}
                border={'required'}/>
        <Product title={productlist[9][0]}
                imageLink={productlist[9][1]}
                imageTag={productlist[9][2]}
                context={productlist[9][3]}
                btColor={productlist[9][4]}
                direction={'normal'}
                border={'notrequired'}/>
        </div>
    );}