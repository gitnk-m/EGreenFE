import { useEffect } from "react";

export default function Products(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 

    return(
        <div className='wrapper'>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            
        </div>
    );
}