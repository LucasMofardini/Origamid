import React from "react";  
import { ProductContext } from "./ProductContext";

const ButtonClear = () =>{
    const product = React.useContext(ProductContext);

    return(
        <>
            <button onClick={product.toggleData}>
                {product.product ? 'Limpar Dados' : 'Recuperar Dados'}
            </button>
        </>
    )
}

export default ButtonClear;