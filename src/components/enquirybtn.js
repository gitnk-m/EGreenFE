import './enquirybtn.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function EnqBtn({bg}){
    const [bgcolor, setbgcolor]=useState(true)
    useEffect(() => {
        if (bg==='red'){
        setbgcolor(true)
        }
        else{
        setbgcolor(false)
        }
        
    }, []);
    return(
        // <div className={`enqBtnContainer ${bgcolor ? 'enbtred':'enbtgrn'}`}>
        //     <img src='../images/btnArrow.svg' alt='arrow'/>
        //     <Link to='/contact' className='enqBtn'>Enquiry Now</Link>
        // </div>
        
        <Link to='/contact' className={`enqBtnContainer ${bgcolor ? 'enbtred':'enbtgrn'}`}>   
            <img src='../images/btnArrow.svg' alt='arrow'/>
            <span  className='enqBtn'>Enquiry Now</span>
        </Link>
        
    );
}