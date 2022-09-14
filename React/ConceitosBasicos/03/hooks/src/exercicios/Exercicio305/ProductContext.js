import React, { useEffect, useState } from "react";

export const ProductContext = React.createContext();

export const ProductStorage = ({ children }) => {
    const [product, setProduct] = useState(null);
   
    const getData = () =>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setProduct(data);
        })
    }
    const toggleData = () =>{
       if(product) {
            return setProduct(null);
       }
       getData();
    }

    return (
        <ProductContext.Provider value={{product, toggleData}}>
            { children }
        </ProductContext.Provider>
    )
}