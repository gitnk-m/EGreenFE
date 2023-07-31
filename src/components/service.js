import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import EnqBtn from "../components/enquirybtn";

export default function Service({title, context, image, btn}){
    return(
            <>
              <div className="serviceContent">
                <div className="serviceTitle">
                  <h2>{title}</h2>
                </div>
                <div className="serviceContext">
                  <p dangerouslySetInnerHTML={{__html:context}}></p>
                  {/* <p>n<br/>i<br/>r</p> */}
                </div>
                <div className="enqbtnsafety">
                  <EnqBtn bg={btn}/>
                </div>
              </div>
              <div className="serviceimage">
                <img src={image} alt="safetyImage"/>
              </div>
              </>
    );
}