import './product.css'
import EnqBtn from './enquirybtn';
import { useEffect, useState } from 'react';

export default function Product({title, imageLink, imageTag, context, btColor, direction, border}){
    const order=`productContent ${direction}`
    const [btposition, setBtposition]=useState('productionBtn btreverse')
    const [contBorder, setContBorder]=useState('productContainer required')
    useEffect(() => {
        if (direction=='reverse'){
            // btposition=`productionBtn btreverse`
            setBtposition('productBtn btreverse')
        }else{
            setBtposition('productBtn btnormal')
        }

        if (border=='required'){
            setContBorder('productContainer required')
        }else{
            setContBorder('productContainer notrequired')
        }
    }, []);
    return(
        <div className={contBorder}>
            <div className='productTitle'>
                {/* <h1>Fire Safety</h1> */}
                <h1>{title}</h1>
            </div>
            <div className={order}>
                <div className="productImage">
                    {/* <img src='../images/fire and safety.jpg' alt='fire safety'/> */}
                    <img src={imageLink} alt={imageTag}/>
                </div>
                <div className='productContext'>
                    {/* <p>{context}</p> */}
                    <p dangerouslySetInnerHTML={{__html:context}}></p>
                    <div className={btposition}>
                        <EnqBtn bg={btColor}/>
                    </div>
                </div>
            </div>        
        </div>
        );
    }