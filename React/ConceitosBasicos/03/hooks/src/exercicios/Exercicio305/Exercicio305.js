import React from 'react';
import { ProductStorage } from './ProductContext';
import Product from './Product';
import ButtonClear from './ButtonClear';

const Exercicio305 = () => {
    return(
        <ProductStorage>
            <ButtonClear/>
            <Product/>
        </ProductStorage>
    )
}

export default Exercicio305;