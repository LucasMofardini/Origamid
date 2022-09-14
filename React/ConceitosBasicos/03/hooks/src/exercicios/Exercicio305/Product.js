import React from 'react';
import { ProductContext } from "./ProductContext";

const Product = () =>{
    const storage = React.useContext(ProductContext);
    const { product } = storage;
    
    if(!product) return;
    return(
        <>  
            <>
                <h1>{product[0].nome}</h1>
                <img style={{maxWidth: '100%'}} src={product[0].fotos[0].src} alt="Img Product"/>
                <h2>R$ {product[0].preco}</h2>
            </>
        </>
    )
}

export default Product;